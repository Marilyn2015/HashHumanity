
// FILE: src/pages/NotificationsPage.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ref as dbRef,
  get,
  onValue,
  off,
  query,
  orderByValue,
  orderByChild,
  limitToLast,
  update as dbUpdate,
} from "firebase/database";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig";

/* ====== UI ====== */
const UI = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(180deg, rgba(2,8,23,.70), rgba(2,8,23,.70)), url('/humanity-globe-2560 (1).webp') center/cover fixed",
    color: "#e9eef8",
  },
  topbar: {
    position: "sticky",
    top: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 24px",
    background: "rgba(2,8,23,.55)",
    borderBottom: "1px solid rgba(255,255,255,.08)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    zIndex: 5,
  },
  brand: { fontWeight: 900, letterSpacing: 0.5, textShadow: "0 0 8px rgba(0,212,255,.35)" },
  main: { maxWidth: 980, margin: "42px auto", padding: "0 20px", display: "grid", gap: 16 },
  card: {
    background: "rgba(255,255,255,.14)",
    border: "1px solid rgba(255,255,255,.28)",
    backdropFilter: "blur(12px) saturate(160%)",
    WebkitBackdropFilter: "blur(12px) saturate(160%)",
    borderRadius: 18,
    boxShadow:
      "0 10px 40px rgba(0,0,0,.45), 0 0 30px rgba(255,255,255,.16) inset, 0 0 24px rgba(255,255,255,.10)",
    padding: "18px 16px",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "42px 1fr auto",
    gap: 12,
    alignItems: "center",
    padding: "10px 6px",
    borderBottom: "1px solid rgba(255,255,255,.10)",
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "center 20%",
    border: "1px solid rgba(255,255,255,.28)",
    boxShadow: "0 0 12px rgba(0,0,0,.35)",
  },
  btn: {
    border: "1px solid rgba(255,255,255,.28)",
    background: "rgba(255,255,255,.08)",
    color: "#eaf2ff",
    padding: "8px 12px",
    fontSize: 12,
    borderRadius: 8,
    cursor: "pointer",
  },
  btnGhost: {
    border: "1px solid rgba(255,255,255,.18)",
    background: "rgba(255,255,255,.04)",
  },
  sectionTitle: { fontWeight: 900, letterSpacing: 0.5, marginBottom: 8 },
  subtle: { opacity: 0.72, fontSize: 12 },
};

const initialsFrom = (name) => {
  if (!name) return "?";
  const p = String(name).trim().split(/\s+/);
  return ((p[0]?.[0] || "") + (p[1]?.[0] || "")).toUpperCase() || "?";
};
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
const isBadName = (s) => !s || /^user$/i.test(String(s).trim());
const safeDisplayName = (src) => {
  if (!src) return "";
  const s = String(src).trim();
  return isBadName(s) ? "" : s;
};

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
          avatarUrl: v.avatarUrl || v.photoURL || u.photoURL || "",
        });
      } catch {
        setMe({
          uid: u.uid,
          displayName: u.email ? u.email.split("@")[0] : "",
          username: u.email ? u.email.split("@")[0] : "",
          avatarUrl: u.photoURL || "",
        });
      }
    });
    return () => unsub();
  }, []);
  return { authUser, me };
}

async function getUserProfile(uid) {
  const s = await get(dbRef(db, `users/${uid}`));
  const v = s.exists() ? s.val() : {};
  const username =
    v.username ||
    (v.displayName ? v.displayName.toLowerCase().replace(/[^a-z0-9_]/g, "") : "");
  return {
    uid,
    username,
    displayName: v.displayName || (username ? `@${username}` : ""),
    avatarUrl: v.avatarUrl || v.photoURL || "",
  };
}

export default function NotificationsPage() {
  const { authUser, me } = useMe();
  const navigate = useNavigate();

  const [followers, setFollowers] = useState([]); // [{uid, ts, profile}]
  const [threads, setThreads] = useState([]);     // [{threadId, other, lastMsg, lastAt, unreadCount}]

  // Followers stream
  useEffect(() => {
    if (!authUser?.uid) return;
    const folRef = query(dbRef(db, `followers/${authUser.uid}`), orderByValue(), limitToLast(200));
    const cb = async (snap) => {
      const rows = [];
      if (snap.exists()) {
        const promises = [];
        snap.forEach((ch) => {
          const followerUid = ch.key;
          const raw = ch.val();
          const ts = typeof raw === "number" ? raw : Date.now();
          promises.push(
            getUserProfile(followerUid).then((prof) => rows.push({ uid: followerUid, ts, profile: prof }))
          );
        });
        await Promise.all(promises);
        rows.sort((a, b) => (b.ts || 0) - (a.ts || 0));
      }
      setFollowers(rows);
    };
    onValue(folRef, cb);
    return () => off(folRef, "value", cb);
  }, [authUser?.uid]);

  // Inbox + latest msg + unread counts
  useEffect(() => {
    if (!authUser?.uid) return;
    const inboxRef = dbRef(db, `inbox/${authUser.uid}`);
    const cb = async (threadsSnap) => {
      const out = [];
      const lastSeenGlobal = await get(dbRef(db, `userState/${authUser.uid}/lastSeenMessages`))
        .then((s) => (s.exists() ? Number(s.val()) : 0))
        .catch(() => 0);

      const promises = [];
      if (threadsSnap.exists()) {
        threadsSnap.forEach((th) => {
          const threadId = th.key;
          const tval = th.val() || {};
          const otherUid = tval.otherUid;
          const lastSeenAt = Number(tval.lastSeenAt || lastSeenGlobal || 0);
          if (!otherUid) return;

          promises.push(
            (async () => {
              const [other, lastMsgSnap] = await Promise.all([
                getUserProfile(otherUid),
                get(query(dbRef(db, `messages/${threadId}`), orderByChild("createdAt"), limitToLast(1))),
              ]);

              let lastMsg = null;
              let lastAt = 0;
              let unreadCount = 0;

              if (lastMsgSnap.exists()) {
                lastMsgSnap.forEach((m) => {
                  const v = m.val();
                  lastMsg = { id: m.key, ...v };
                  lastAt = Number(v?.createdAt || 0);
                });
              }

              const allMsgs = await get(dbRef(db, `messages/${threadId}`)).then((s) => s.val() || {});
              Object.values(allMsgs).forEach((v) => {
                if (v?.fromUid !== authUser.uid && Number(v?.createdAt || 0) > lastSeenAt) unreadCount++;
              });

              out.push({ threadId, other, lastMsg, lastAt, unreadCount });
            })()
          );
        });
      }

      await Promise.all(promises);
      out.sort((a, b) => (b.lastAt || 0) - (a.lastAt || 0));
      setThreads(out);
    };
    onValue(inboxRef, cb);
    return () => off(inboxRef, "value", cb);
  }, [authUser?.uid]);

  // Mark seen when landing
  useEffect(() => {
    if (!authUser?.uid) return;
    const now = Date.now();
    dbUpdate(dbRef(db), {
      [`userState/${authUser.uid}/lastSeenFollowers`]: now,
      [`userState/${authUser.uid}/lastSeenMessages`]: now,
    }).catch(() => {});
  }, [authUser?.uid]);

  const doLogout = async () => {
    try { await signOut(auth); navigate("/login"); }
    catch (e) { console.error("Sign out failed:", e); alert("Log out failed. Check console."); }
  };

  return (
    <div style={UI.page}>
      <header style={UI.topbar}>
        <div style={UI.brand}>#HUMANITY</div>
        <div style={{ display: "flex", gap: 10 }}>
          <button style={UI.btn} onClick={() => navigate("/universe")}>Universe</button>
          {me ? <button style={UI.btn} onClick={() => navigate(`/profile/${me.uid}`)}>Profile</button> : null}
          <button style={{ ...UI.btn, ...UI.btnGhost }} onClick={doLogout}>Log out</button>
        </div>
      </header>

      <main style={UI.main}>
        {/* Followers */}
        <section style={UI.card}>
          <div style={UI.sectionTitle}>New Followers</div>
          {followers.length === 0 ? (
            <div style={UI.subtle}>No new followers.</div>
          ) : (
            followers.map((f) => (
              <div key={`f-${f.uid}-${f.ts}`} style={UI.row}>
                {f.profile.avatarUrl ? (
                  <img src={f.profile.avatarUrl} alt="" style={UI.avatar} />
                ) : (
                  <div
                    style={{
                      ...UI.avatar,
                      display: "grid",
                      placeItems: "center",
                      background: "rgba(255,255,255,.06)",
                    }}
                  >
                    {initialsFrom(f.profile.username)}
                  </div>
                )}
                <div>
                  <div style={{ fontWeight: 900 }}>
                    {safeDisplayName(f.profile.displayName) ||
                      (f.profile.username ? `@${f.profile.username}` : "Someone")}
                  </div>
                  <div style={UI.subtle}>followed you · {timeAgo(f.ts)}</div>
                </div>
                <div>
                  <button style={UI.btn} onClick={() => navigate(`/profile/${f.uid}`)}>View</button>
                </div>
              </div>
            ))
          )}
        </section>

        {/* Messages */}
        <section style={UI.card}>
          <div style={UI.sectionTitle}>Messages</div>
          {threads.length === 0 ? (
            <div style={UI.subtle}>No conversations yet.</div>
          ) : (
            threads.map((t) => (
              <div key={`t-${t.threadId}`} style={UI.row}>
                {t.other.avatarUrl ? (
                  <img src={t.other.avatarUrl} alt="" style={UI.avatar} />
                ) : (
                  <div
                    style={{
                      ...UI.avatar,
                      display: "grid",
                      placeItems: "center",
                      background: "rgba(255,255,255,.06)",
                    }}
                  >
                    {initialsFrom(t.other.username)}
                  </div>
                )}
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                    <strong>
                      {safeDisplayName(t.other.displayName) ||
                        (t.other.username ? `@${t.other.username}` : "Someone")}
                    </strong>
                    <span style={UI.subtle}>{timeAgo(t.lastAt)}</span>
                  </div>
                  <div style={{ opacity: 0.9 }}>
                    {t.lastMsg?.text
                      ? (t.lastMsg.text.length > 120
                          ? `${t.lastMsg.text.slice(0, 120)}…`
                          : t.lastMsg.text)
                      : "New conversation"}
                  </div>
                </div>
                <div>
                  {t.unreadCount > 0 && (
                    <span
                      style={{
                        marginRight: 10,
                        padding: "2px 8px",
                        borderRadius: 999,
                        background: "var(--brand)",
                        color: "#0b1220",
                        fontWeight: 800,
                        fontSize: 12,
                        boxShadow: "0 0 12px rgba(96,165,250,.45)",
                      }}
                      title={`${t.unreadCount} unread`}
                    >
                      {t.unreadCount}
                    </span>
                  )}
                  <button
                    style={UI.btn}
                    onClick={() => navigate(`/messages?thread=${encodeURIComponent(t.threadId)}`)}
                  >
                    Open
                  </button>
                </div>
              </div>
            ))
          )}
        </section>
      </main>
    </div>
  );
}
