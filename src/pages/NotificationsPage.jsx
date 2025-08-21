// FILE: src/pages/NotificationsPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ref as dbRef,
  get,
  onValue,
  off,
  update as dbUpdate,
} from "firebase/database";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig";
import "./NotificationsPage.css";

/* ====== UI (aligned with Landing/Universe) ====== */
const UI = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(180deg, rgba(2,8,23,.86), rgba(2,8,23,.86)), url('/humanity-globe-2560%20(1).webp') center/cover fixed",
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
  brand: { fontWeight: 900, letterSpacing: 0.5, textShadow: "0 0 8px rgba(96,165,250,.35)" },
  main: { maxWidth: 980, margin: "42px auto", padding: "0 20px", display: "grid", gap: 16 },
  card: {
    background: "rgba(255,255,255,.08)",
    border: "1px solid rgba(255,255,255,.12)",
    backdropFilter: "blur(12px) saturate(150%)",
    WebkitBackdropFilter: "blur(12px) saturate(150%)",
    borderRadius: 16,
    boxShadow: "0 18px 60px rgba(0,0,0,.45)",
    padding: "16px 14px",
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
    border: "1px solid rgba(255,255,255,.22)",
    boxShadow: "0 0 12px rgba(0,0,0,.35)",
    background: "rgba(255,255,255,.06)",
    display: "block",
  },
  btn: {
    border: "1px solid rgba(255,255,255,.28)",
    background: "rgba(12,18,32,.85)",
    color: "#eaf2ff",
    padding: "8px 12px",
    fontSize: 12,
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: 800,
  },
  btnGhost: {
    border: "1px solid rgba(255,255,255,.18)",
    background: "rgba(255,255,255,.04)",
  },
  sectionTitle: { fontWeight: 900, letterSpacing: 0.5, marginBottom: 8, display: "flex", alignItems: "center", gap: 10 },
  subtle: { opacity: 0.72, fontSize: 12 },
  chip: {
    fontSize: 11,
    padding: "2px 8px",
    borderRadius: 999,
    background: "rgba(96,165,250,.25)",
    border: "1px solid rgba(96,165,250,.45)",
    color: "#dbeafe",
    fontWeight: 900,
  },
  badge: {
    marginRight: 10,
    padding: "2px 8px",
    borderRadius: 999,
    background: "rgba(96,165,250,.95)",
    color: "#0b1220",
    fontWeight: 800,
    fontSize: 12,
    boxShadow: "0 0 12px rgba(96,165,250,.45)",
  },
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

  const [followers, setFollowers] = useState([]); // [{uid, ts, profile, isNew}]
  const [followingSet, setFollowingSet] = useState(() => new Set()); // who I follow
  const [lastSeenFollowers, setLastSeenFollowers] = useState(0);

  const [threads, setThreads] = useState([]); // [{threadId, other, lastMsg, lastAt, unreadCount}]

  /* ===== Load lastSeenFollowers once, then immediately mark seen ===== */
  useEffect(() => {
    let alive = true;
    (async () => {
      if (!authUser?.uid) return;
      const s = await get(dbRef(db, `userState/${authUser.uid}/lastSeenFollowers`)).catch(() => null);
      const last = s?.exists() ? Number(s.val()) : 0;
      if (alive) setLastSeenFollowers(last);
      const now = Date.now();
      dbUpdate(dbRef(db), { [`userState/${authUser.uid}/lastSeenFollowers`]: now }).catch(() => {});
    })();
    return () => { alive = false; };
  }, [authUser?.uid]);

  /* ===== Followers stream (ALL; ordered client-side) ===== */
  useEffect(() => {
    if (!authUser?.uid) return;
    let cancelled = false;
    const folRef = dbRef(db, `followers/${authUser.uid}`);
    const cb = async (snap) => {
      if (cancelled) return;
      const items = [];
      const promises = [];
      const v = snap.val() || {};
      for (const [fuid, raw] of Object.entries(v)) {
        const ts = typeof raw === "number" ? raw : 0;
        promises.push(
          getUserProfile(fuid).then((prof) => {
            items.push({ uid: fuid, ts, profile: prof, isNew: ts > (lastSeenFollowers || 0) });
          })
        );
      }
      await Promise.all(promises);
      if (cancelled) return;
      items.sort((a, b) => (b.ts || 0) - (a.ts || 0));
      setFollowers(items);
    };
    onValue(folRef, cb);
    return () => { cancelled = true; off(folRef, "value", cb); };
  }, [authUser?.uid, lastSeenFollowers]);

  /* ===== Following set (to show Follow back / Following) ===== */
  useEffect(() => {
    if (!authUser?.uid) return;
    const fRef = dbRef(db, `following/${authUser.uid}`);
    const cb = (snap) => {
      const v = snap.val() || {};
      setFollowingSet(new Set(Object.keys(v)));
    };
    onValue(fRef, cb);
    return () => off(fRef, "value", cb);
  }, [authUser?.uid]);

  /* ===== Inbox summary (kept, style-matched) ===== */
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
              const [other, lastSnap] = await Promise.all([
                getUserProfile(otherUid),
                get(dbRef(db, `messages/${threadId}`)),
              ]);
              let lastMsg = null;
              let lastAt = 0;
              let unreadCount = 0;
              const all = lastSnap.val() || {};
              for (const [id, m] of Object.entries(all)) {
                const createdAt = Number(m?.createdAt || 0);
                if (!lastMsg || createdAt > lastAt) {
                  lastMsg = { id, ...m };
                  lastAt = createdAt;
                }
                if (m?.fromUid !== authUser.uid && createdAt > lastSeenAt) unreadCount++;
              }
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

  /* ===== Actions ===== */
  const toggleFollow = async (targetUid, isFollowing) => {
    if (!authUser?.uid || !targetUid || targetUid === authUser.uid) return;
    const updates = {};
    if (isFollowing) {
      updates[`following/${authUser.uid}/${targetUid}`] = null;
      updates[`followers/${targetUid}/${authUser.uid}`] = null;
    } else {
      const now = Date.now();
      updates[`following/${authUser.uid}/${targetUid}`] = now;
      updates[`followers/${targetUid}/${authUser.uid}`] = now;
    }
    try {
      await dbUpdate(dbRef(db), updates);
    } catch (e) {
      console.error("toggleFollow", e);
      alert("Could not update follow state.");
    }
  };

  const doLogout = async () => {
    try { await signOut(auth); navigate("/login"); }
    catch (e) { console.error("Sign out failed:", e); alert("Log out failed. Check console."); }
  };

  const followerCount = followers.length;
  const newCount = useMemo(() => followers.filter(f => f.isNew).length, [followers]);

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
          <div style={UI.sectionTitle}>
            <span>Followers</span>
            <span style={UI.chip} title="Total followers">{followerCount}</span>
            {newCount > 0 && <span style={UI.badge} title="New since last visit">NEW {newCount}</span>}
          </div>

          {followers.length === 0 ? (
            <div style={UI.subtle}>No followers yet.</div>
          ) : (
            followers.map((f) => {
              const isFollowing = followingSet.has(f.uid);
              return (
                <div key={`f-${f.uid}`} style={UI.row}>
                  {f.profile.avatarUrl ? (
                    <img src={f.profile.avatarUrl} alt="" style={UI.avatar} />
                  ) : (
                    <div style={{ ...UI.avatar, display: "grid", placeItems: "center" }}>
                      {initialsFrom(f.profile.username)}
                    </div>
                  )}
                  <div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                      <strong>
                        {safeDisplayName(f.profile.displayName) ||
                          (f.profile.username ? `@${f.profile.username}` : "Someone")}
                      </strong>
                      <span style={UI.subtle}>· {timeAgo(f.ts)}</span>
                      {f.isNew && <span style={UI.chip}>New</span>}
                      {isFollowing && <span style={UI.chip}>Following</span>}
                    </div>
                    <div style={UI.subtle}>Followed you</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <button style={UI.btn} onClick={() => navigate(`/profile/${f.uid}`)}>View</button>
                    <button
                      style={UI.btn}
                      onClick={() => toggleFollow(f.uid, isFollowing)}
                      title={isFollowing ? "Unfollow" : "Follow back"}
                    >
                      {isFollowing ? "Unfollow" : "Follow back"}
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </section>

        {/* Messages (kept; color-matched) */}
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
                  <div style={{ ...UI.avatar, display: "grid", placeItems: "center" }}>
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
                      : (t.lastMsg?.imageUrl ? "[photo]" : "New conversation")}
                  </div>
                </div>
                <div>
                  {t.unreadCount > 0 && (
                    <span style={UI.badge} title={`${t.unreadCount} unread`}>{t.unreadCount}</span>
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

