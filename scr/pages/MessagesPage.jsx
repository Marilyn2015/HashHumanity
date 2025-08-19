// FILE: src/pages/MessagesPage.jsx
import React, { useEffect, useMemo, useState, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  ref as dbRef,
  onValue,
  off,
  get,
  push,
  set as dbSet,
  update as dbUpdate,
  query,
  orderByChild,
  limitToLast,
} from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig";
import "./UniversePage.css";

/* ================= helpers ================= */
const safeDisplayName = (s) => {
  const v = (s || "").toString().trim();
  return !v || /^user$/i.test(v) ? "" : v;
};
const normalizeHandle = (raw) => String(raw || "").trim().replace(/^@+/, "").toLowerCase();
const timeAgo = (ts) => {
  const n = typeof ts === "number" ? ts : Number(ts) || Date.now();
  const diff = Date.now() - n;
  const m = Math.floor(diff / 60000);
  if (m < 1) return "just now";
  if (m < 60) return `${m}m`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h`;
  const d = Math.floor(h / 24);
  return `${d}d`;
};
const looksLikeUid = (s) => /^[A-Za-z0-9_-]{20,}$/.test(String(s || ""));
const threadIdFor = (a, b) => {
  const [x, y] = [String(a), String(b)].sort();
  return `${x}_${y}`;
};

async function uidByUsername(username) {
  const uname = normalizeHandle(username);
  if (!uname) return null;
  const snap = await get(dbRef(db, `usernames/${uname}`));
  return snap.exists() ? snap.val() : null;
}
async function getUserProfile(uid) {
  if (!uid) return { uid: "", username: "", displayName: "", avatarUrl: "" };
  const s = await get(dbRef(db, `users/${uid}`));
  const v = s.exists() ? s.val() : {};
  return {
    uid,
    username: v.username || "",
    displayName: v.displayName || "",
    avatarUrl: v.avatarUrl || "",
  };
}

/* ================= auth/profile hook ================= */
function useMe() {
  const [authUser, setAuthUser] = useState(null);
  const [me, setMe] = useState(null);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setAuthUser(u || null);
      if (!u) return setMe(null);
      try {
        const snap = await get(dbRef(db, `users/${u.uid}`));
        const v = snap.exists() ? snap.val() : {};
        setMe({
          uid: u.uid,
          displayName: v.displayName || v.username || (u.email ? u.email.split("@")[0] : ""),
          username: v.username || (u.email ? u.email.split("@")[0] : ""),
          avatarUrl: v.avatarUrl || u.photoURL || "",
          email: u.email || "",
        });
      } catch {
        setMe({
          uid: u.uid,
          displayName: u.email?.split("@")[0] || "you",
          username: u.email?.split("@")[0] || "you",
          avatarUrl: u.photoURL || "",
          email: u.email || "",
        });
      }
    });
    return () => unsub();
  }, []);
  return { authUser, me };
}

/* ================= tiny toasts ================= */
function useToasts() {
  const [toasts, setToasts] = useState([]);
  const pushToast = useCallback((msg) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((t) => [...t, { id, msg }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 4200);
  }, []);
  return { toasts, pushToast };
}
const Toasts = ({ list }) => (
  <div className="toastWrap">{list.map((t) => <div key={t.id} className="toast">{t.msg}</div>)}</div>
);

/* ================= visuals ================= */
function HumanityMark({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden>
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="21" stroke="url(#g)" strokeWidth="3" fill="none" />
      <path d="M14 31V17h4v5h12v-5h4v14h-4v-5H18v5h-4z" fill="url(#g)" />
    </svg>
  );
}
function Header() {
  const navigate = useNavigate();
  const { authUser, me } = useMe();
  const avatarStyle = {
    width: 34, height: 34, borderRadius: "50%", objectFit: "cover",
    border: "1px solid var(--line)", boxShadow: "var(--glowSoft)", cursor: "pointer"
  };
  return (
    <header className="header">
      <div className="headerWrap">
        <button className="brand" onClick={() => navigate("/universe")} title="Back to Universe">
          <span className="brandIcon"><HumanityMark /></span>
          <span className="brandText">HUMANITY</span>
        </button>
        <div style={{ flex: 1 }} />
        {/* Replace logout with an explicit Universe button */}
        <button className="btn" onClick={() => navigate("/universe")}>Universe</button>
        {authUser && (
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {me?.avatarUrl
              ? <img src={me.avatarUrl} alt="" style={avatarStyle} onClick={() => navigate(`/profile/${me.uid}`)} />
              : <div className="avatarFallback" style={{ ...avatarStyle, display: "grid", placeItems: "center" }}>👤</div>}
          </div>
        )}
      </div>
    </header>
  );
}

/* ================= page ================= */
export default function MessagesPage() {
  const { me } = useMe();
  const { toasts, pushToast } = useToasts();
  const [fatalErr, setFatalErr] = useState("");

  // inbox threads (from my inbox path)
  const [threads, setThreads] = useState([]);
  // map threadId -> lastFromUid (from last message)
  const [lastFrom, setLastFrom] = useState({});

  // compose state
  const [toInput, setToInput] = useState("");
  const [toResolvedUid, setToResolvedUid] = useState("");
  const [toResolvedProfile, setToResolvedProfile] = useState(null);
  const [composeBody, setComposeBody] = useState("");
  const [sending, setSending] = useState(false);

  // Keep track of live inbox subscription to clean up correctly
  const inboxUnsubRef = useRef(null);
  useEffect(() => {
    // Attach AFTER auth is ready; do NOT rely on me (it’s a DB read).
    const unsubAuth = onAuthStateChanged(auth, (u) => {
      // cleanup any previous inbox listener
      if (inboxUnsubRef.current) {
        inboxUnsubRef.current();
        inboxUnsubRef.current = null;
      }
      setFatalErr("");

      if (!u) {
        setThreads([]);
        return;
      }

      const inboxRef = dbRef(db, `inbox/${u.uid}`);
      const cb = async (snap) => {
        try {
          const v = snap.val() || {};
          const entries = Object.entries(v);
          const arr = await Promise.all(
            entries.map(async ([tid, meta]) => {
              const prof = meta?.otherUid ? await getUserProfile(meta.otherUid) : null;
              return {
                threadId: tid,
                otherUid: meta?.otherUid || "",
                lastMessageAt: Number(meta?.lastMessageAt || 0),
                lastText: meta?.lastText || "",
                otherProfile: prof,
              };
            })
          );
          arr.sort((a, b) => (b.lastMessageAt || 0) - (a.lastMessageAt || 0));
          setThreads(arr);
        } catch (e) {
          console.error(e);
          setFatalErr(e?.message || "Failed to load inbox");
        }
      };

      const unsubscribe = onValue(
        inboxRef,
        cb,
        (e) => setFatalErr(e?.message || "Inbox error")
      );
      inboxUnsubRef.current = unsubscribe;
    });

    return () => {
      if (inboxUnsubRef.current) inboxUnsubRef.current();
      unsubAuth();
    };
  }, []);

  // Peek last message in each thread to split into Inbox vs Outbox
  useEffect(() => {
    let unsubs = [];
    let cancelled = false;

    (async () => {
      if (!auth.currentUser?.uid || threads.length === 0) return;

      // Tear down any old peeks
      unsubs.forEach((u) => u && u());
      unsubs = [];

      for (const t of threads) {
        const qRef = query(dbRef(db, `messages/${t.threadId}`), orderByChild("createdAt"), limitToLast(1));
        const unsub = onValue(
          qRef,
          (snap) => {
            if (cancelled) return;
            let from = "";
            snap.forEach((ch) => { from = ch.val()?.fromUid || ""; });
            setLastFrom((prev) => ({ ...prev, [t.threadId]: from }));
          },
          // If permission denied (mirror not present yet), still list the thread
          () => setLastFrom((prev) => ({ ...prev, [t.threadId]: "" }))
        );
        unsubs.push(unsub);
      }
    })();

    return () => {
      unsubs.forEach((u) => u && u());
    };
  }, [threads]);

  // Split into Inbox / Outbox; include threads with unknown lastFrom in Inbox by default
  const myUid = auth.currentUser?.uid || null;
  const inboxList = useMemo(
    () => threads.filter((t) => !lastFrom[t.threadId] || lastFrom[t.threadId] !== myUid),
    [threads, lastFrom, myUid]
  );
  const outboxList = useMemo(
    () => threads.filter((t) => lastFrom[t.threadId] && lastFrom[t.threadId] === myUid),
    [threads, lastFrom, myUid]
  );

  // Resolve recipient by @username or UID (debounced)
  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const raw = toInput.trim();
        if (!raw) { setToResolvedUid(""); setToResolvedProfile(null); return; }
        if (looksLikeUid(raw)) {
          setToResolvedUid(raw);
          const prof = await getUserProfile(raw).catch(() => null);
          setToResolvedProfile(prof);
          return;
        }
        const uname = normalizeHandle(raw);
        const uid = await uidByUsername(uname);
        if (uid) {
          setToResolvedUid(uid);
          const prof = await getUserProfile(uid).catch(() => null);
          setToResolvedProfile(prof);
        } else {
          setToResolvedUid("");
          setToResolvedProfile(null);
        }
      } catch (e) {
        console.error(e);
      }
    }, 250);
    return () => clearTimeout(timer);
  }, [toInput]);

  // Clicking a thread pre-fills the compose target
  const pickThread = (t) => {
    if (!t?.otherUid) return;
    setToInput(t.otherProfile?.username ? `@${t.otherProfile.username}` : t.otherUid);
    setToResolvedUid(t.otherUid);
    setToResolvedProfile(t.otherProfile || null);
  };

  // Send a new message
  const sendNew = async () => {
    const u = auth.currentUser;
    if (!u) return pushToast("Sign in first.");
    const text = (composeBody || "").trim();
    if (!text) return pushToast("Write a message.");
    if (!toResolvedUid) return pushToast("Recipient not found.");
    if (toResolvedUid === u.uid) return pushToast("You can’t message yourself.");

    setSending(true);
    try {
      const tid = threadIdFor(u.uid, toResolvedUid);
      const now = Date.now();

      // 1) Append message
      const msgRef = push(dbRef(db, `messages/${tid}`));
      await dbSet(msgRef, { fromUid: u.uid, text, createdAt: now });

      // 2) Update my inbox row
      await dbUpdate(dbRef(db, `inbox/${u.uid}`), {
        [tid]: { otherUid: toResolvedUid, lastMessageAt: now, lastText: text },
      });

      // 3) Update recipient inbox row
      await dbUpdate(dbRef(db, `inbox/${toResolvedUid}`), {
        [tid]: { otherUid: u.uid, lastMessageAt: now, lastText: text },
      });

      setComposeBody("");
      setToInput("");
      setToResolvedUid("");
      setToResolvedProfile(null);
      pushToast("Message sent.");
    } catch (e) {
      console.error("sendNew error:", e);
      pushToast(e?.message || "Could not send message");
    } finally {
      setSending(false);
    }
  };

  /* ==== Styles: match global card theme (no neon-green) ==== */
  const GLOBE_URL = "/humanity-globe-2560%20(1).webp";
  const card = { padding: 18, borderRadius: 10, border: "1px solid var(--line)", background: "rgba(255,255,255,.08)" };
  const sectionTitle = { fontWeight: 900, letterSpacing: 0.4, marginBottom: 10 };
  const listItem = {
    padding: "10px 12px",
    borderRadius: 10,
    border: "1px solid var(--line)",
    background: "rgba(255,255,255,.06)",
    cursor: "pointer"
  };
  const btn = {
    borderRadius: 10,
    padding: "10px 14px",
    border: "1px solid rgba(255,255,255,.28)",
    background: "rgba(8,12,20,.9)",
    color: "#fff",
    cursor: "pointer",
    fontWeight: 700,
  };
  const btnPrimary = {
    ...btn,
    borderColor: "rgba(96,165,250,.6)",
    boxShadow: "0 0 12px rgba(96,165,250,.28)",
  };
  const inputBase = {
    borderRadius: 10,
    border: "1px solid var(--line)",
    background: "rgba(255,255,255,1)",
    color: "#0b1220",
    padding: "10px 12px",
    outline: "none",
  };
  const metaHint = { fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace", color: "#9aa4af", fontSize: 12 };

  return (
    <>
      {/* Humanity background */}
      <div className="bg-globe" aria-hidden>
        <img src={GLOBE_URL} alt="" loading="eager" decoding="async" fetchpriority="high" />
        <div className="bg-stars" />
        <div className="bg-vignette" />
      </div>

      <Header />
      <div className="heroSpacer" />
      <Toasts list={toasts} />

      {fatalErr ? (
        <div className="shell">
          <div className="grid" style={{ gridTemplateColumns: "1fr", gap: 16 }}>
            <section className="card" style={{ ...card, border: "1px solid #f87171", background: "rgba(248,113,113,.12)" }}>
              <div style={{ fontWeight: 900, marginBottom: 6 }}>Messages error</div>
              <div style={{ opacity: .9 }}>{fatalErr}</div>
            </section>
          </div>
        </div>
      ) : (
        <div className="shell">
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            {/* INBOX */}
            <section className="card" style={card}>
              <div style={sectionTitle}>Inbox</div>
              <div style={{ display: "grid", gap: 10 }}>
                {inboxList.length === 0 && <div style={{ opacity: .8 }}>Nothing in your inbox.</div>}
                {inboxList.map((t) => {
                  const name =
                    safeDisplayName(t.otherProfile?.displayName) ||
                    (t.otherProfile?.username ? `@${t.otherProfile.username}` : t.otherUid);
                  return (
                    <div key={`in-${t.threadId}`} style={listItem} onClick={() => pickThread(t)}>
                      <div style={{ fontWeight: 900 }}>{name}</div>
                      <div style={{ opacity: .75, fontSize: 12 }}>{t.lastText || "—"}</div>
                      <div style={{ opacity: .55, fontSize: 11, marginTop: 2 }}>{timeAgo(t.lastMessageAt)}</div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* OUTBOX */}
            <section className="card" style={card}>
              <div style={sectionTitle}>Outbox</div>
              <div style={{ display: "grid", gap: 10 }}>
                {outboxList.length === 0 && <div style={{ opacity: .8 }}>No sent conversations yet.</div>}
                {outboxList.map((t) => {
                  const name =
                    safeDisplayName(t.otherProfile?.displayName) ||
                    (t.otherProfile?.username ? `@${t.otherProfile.username}` : t.otherUid);
                  return (
                    <div key={`out-${t.threadId}`} style={listItem} onClick={() => pickThread(t)}>
                      <div style={{ fontWeight: 900 }}>{name}</div>
                      <div style={{ opacity: .75, fontSize: 12 }}>{t.lastText || "—"}</div>
                      <div style={{ opacity: .55, fontSize: 11, marginTop: 2 }}>{timeAgo(t.lastMessageAt)}</div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* COMPOSE */}
            <section className="card" style={card}>
              <div style={sectionTitle}>Compose</div>

              <label style={{ display: "grid", gap: 6, marginBottom: 10 }}>
                <span style={{ ...metaHint, color: "#9aa4af" }}>TO (USERNAME or UID)</span>
                <input
                  value={toInput}
                  onChange={(e) => setToInput(e.target.value)}
                  placeholder="@username or UID"
                  style={inputBase}
                />
                <div style={metaHint}>
                  {toResolvedUid
                    ? <>Found: <strong>{toResolvedProfile?.displayName || (toResolvedProfile?.username ? `@${toResolvedProfile.username}` : toResolvedUid)}</strong></>
                    : (toInput.trim() ? "No match yet…" : "Type @username or paste a UID")}
                </div>
              </label>

              <label style={{ display: "grid", gap: 6 }}>
                <span style={{ ...metaHint, color: "#9aa4af" }}>MESSAGE</span>
                <textarea
                  rows={6}
                  value={composeBody}
                  onChange={(e) => setComposeBody(e.target.value)}
                  placeholder="Write your message…"
                  style={{ ...inputBase, resize: "vertical" }}
                />
              </label>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 14 }}>
                <button
                  style={btn}
                  onClick={() => { setToInput(""); setComposeBody(""); setToResolvedUid(""); setToResolvedProfile(null); }}
                >
                  Clear
                </button>
                <button
                    style={btnPrimary}
                    disabled={sending || !toResolvedUid || !composeBody.trim()}
                    onClick={sendNew}
                >
                  {sending ? "Sending…" : "Send"}
                </button>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
}


