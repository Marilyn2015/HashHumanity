// FILE: src/pages/UniversePage.jsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  ref as dbRef,
  onValue,
  off,
  get,
  push,
  set as dbSet,
  update as dbUpdate,
  remove,
  query,
  orderByChild,
  limitToLast,
  orderByKey,
  limitToFirst,
} from "firebase/database";
import { ref as storageRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db, storage } from "../firebase/firebaseConfig";
import "./UniversePage.css";

/* ================= helpers ================= */
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
async function uidByUsername(username) {
  const uname = String(username || "").trim().toLowerCase();
  if (!uname) return null;
  const snap = await get(dbRef(db, `usernames/${uname}`));
  return snap.exists() ? snap.val() : null;
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
const uniqueByUid = (rows) => Array.from(new Map(rows.map((r) => [r.uid, r])).values());

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

/* ================= toasts ================= */
function useToasts() {
  const [toasts, setToasts] = useState([]);
  const pushToast = useCallback((msg) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((t) => [...t, { id, msg }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 5200);
  }, []);
  return [toasts, { pushToast }];
}
const Toasts = ({ list }) => (
  <div className="toastWrap">{list.map((t) => <div key={t.id} className="toast">{t.msg}</div>)}</div>
);

/* ================= brand mark ================= */
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

/* ======== Name helpers ======== */
const isBadName = (s) => !s || /^user$/i.test(String(s).trim());
function safeDisplayName(src) {
  if (!src) return "";
  const s = String(src).trim();
  return isBadName(s) ? "" : s;
}
function displayNameForPost(p, cache) {
  const fromPost = safeDisplayName(p?.authorDisplayName);
  const fromOwner = p?.ownerUid ? safeDisplayName(cache[p.ownerUid]?.displayName) : "";
  const fromAuthor = p?.authorUid ? safeDisplayName(cache[p.authorUid]?.displayName) : "";
  const uname =
    p?.authorUsername ||
    (p?.ownerUid && cache[p.ownerUid]?.username) ||
    (p?.authorUid && cache[p.authorUid]?.username) ||
    "";
  return fromPost || fromOwner || fromAuthor || (uname ? `@${uname}` : "@someone");
}
function usernameForPost(p, cache) {
  return (
    p?.authorUsername ||
    (p?.ownerUid && cache[p.ownerUid]?.username) ||
    (p?.authorUid && cache[p.authorUid]?.username) ||
    "someone"
  );
}

/* ==================== Notifications Hook (PERSISTED) ==================== */
function useUniverseBadgesPersisted() {
  const [meUid, setMeUid] = useState(null);
  const [followUnread, setFollowUnread] = useState(0);
  const [messageUnread, setMessageUnread] = useState(0);
  const [lastSeenFollowers, setLastSeenFollowers] = useState(0);
  const [lastSeenMessages, setLastSeenMessages] = useState(0);

  useEffect(() => {
    const stop = onAuthStateChanged(auth, async (u) => {
      setMeUid(u?.uid || null);
      if (!u) return;
      const s = await get(dbRef(db, `userState/${u.uid}`)).then((x) => (x.exists() ? x.val() : {}));
      setLastSeenFollowers(Number(s?.lastSeenFollowers || 0));
      setLastSeenMessages(Number(s?.lastSeenMessages || 0));
    });
    return () => stop();
  }, []);

  // Followers unread
  useEffect(() => {
    if (!meUid) return;
    const folRef = dbRef(db, `followers/${meUid}`);
    const cb = (snap) => {
      let cnt = 0;
      if (snap.exists()) {
        snap.forEach((ch) => {
          const ts = typeof ch.val() === "number" ? ch.val() : 0;
          if (ts > lastSeenFollowers) cnt++;
        });
      }
      setFollowUnread(cnt);
    };
    onValue(folRef, cb);
    return () => off(folRef, "value", cb);
  }, [meUid, lastSeenFollowers]);

  // Messages unread
  useEffect(() => {
    if (!meUid) return;
    const inboxRef = dbRef(db, `inbox/${meUid}`);
    let perThreadUnsubs = [];
    const cbInbox = (threadsSnap) => {
      perThreadUnsubs.forEach((fn) => fn && fn());
      perThreadUnsubs = [];
      if (!threadsSnap.exists()) {
        setMessageUnread(0);
        return;
      }
      const counts = new Map();
      threadsSnap.forEach((th) => {
        const threadId = th.key;
        const lastSeenAt = Number(th.val()?.lastSeenAt || lastSeenMessages || 0);
        const msgsRef = dbRef(db, `messages/${threadId}`);
        const cbMsgs = (ms) => {
          let unread = 0;
          ms.forEach((m) => {
            const v = m.val();
            if (v?.fromUid !== meUid && Number(v?.createdAt || 0) > lastSeenAt) unread++;
          });
          counts.set(threadId, unread);
          let total = 0;
          for (const v of counts.values()) total += v;
          setMessageUnread(total);
        };
        onValue(msgsRef, cbMsgs);
        perThreadUnsubs.push(() => off(msgsRef, "value", cbMsgs));
      });
    };
    onValue(inboxRef, cbInbox);
    return () => {
      off(inboxRef, "value", cbInbox);
      perThreadUnsubs.forEach((fn) => fn && fn());
    };
  }, [meUid, lastSeenMessages]);

  const markFollowersSeen = useCallback(async () => {
    if (!meUid) return;
    const now = Date.now();
    await dbUpdate(dbRef(db), { [`userState/${meUid}/lastSeenFollowers`]: now });
    setLastSeenFollowers(now);
  }, [meUid]);

  const markMessagesSeen = useCallback(async () => {
    if (!meUid) return;
    const now = Date.now();
    await dbUpdate(dbRef(db), { [`userState/${meUid}/lastSeenMessages`]: now });
    setLastSeenMessages(now);
  }, [meUid]);

  return { followUnread, messageUnread, markFollowersSeen, markMessagesSeen };
}

/* ================= page ================= */
export default function UniversePage() {
  const { authUser, me } = useMe();
  const navigate = useNavigate();
  const [toasts, toastApi] = useToasts();

  const { followUnread, messageUnread, markFollowersSeen, markMessagesSeen } =
    useUniverseBadgesPersisted();

  /* ===== FEED (AUTH-GATED, NON-SPAM) ===== */
  const [posts, setPosts] = useState([]);
  const [feedError, setFeedError] = useState("");
  useEffect(() => {
    let detachFeed = null;

    const unsubAuth = onAuthStateChanged(auth, (u) => {
      if (detachFeed) {
        detachFeed();
        detachFeed = null;
      }
      setFeedError("");
      setPosts([]);

      if (!u) {
        setFeedError("Sign in to see the feed.");
        return;
      }

      const qRef = query(dbRef(db, "posts"), orderByChild("createdAt"), limitToLast(100));

      const handleValue = (snap) => {
        const v = snap.val() || {};
        const arr = Object.entries(v).map(([id, p]) => {
          const ts = typeof p.createdAt === "number" ? p.createdAt : Number(p.createdAt) || 0;
          return { id, ...p, createdAt: ts };
        });
        arr.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
        setPosts(arr);
      };

      const handleError = (err) => {
        if (detachFeed) {
          detachFeed();
          detachFeed = null;
        }
        if (err?.code === "PERMISSION_DENIED") {
          setFeedError("No permission to read /posts (auth or rules).");
        } else {
          setFeedError(err?.message || "Feed error.");
        }
      };

      const unsubscribe = onValue(qRef, handleValue, handleError);
      detachFeed = unsubscribe;
    });

    return () => {
      if (detachFeed) detachFeed();
      unsubAuth();
    };
  }, []);

  /* ===== user profile cache for names/avatars ===== */
  const [userCache, setUserCache] = useState({});
  useEffect(() => {
    const uids = new Set();
    posts.forEach((p) => {
      if (p?.ownerUid) uids.add(p.ownerUid);
      if (p?.authorUid) uids.add(p.authorUid);
    });
    const missing = [...uids].filter((uid) => !userCache[uid]);
    if (!missing.length) return;
    (async () => {
      const batch = {};
      await Promise.all(
        missing.map(async (uid) => {
          try {
            const s = await get(dbRef(db, `users/${uid}`));
            const v = s.exists() ? s.val() : {};
            const rawName = v.displayName || v.username || (v.email ? v.email.split("@")[0] : "");
            batch[uid] = {
              avatarUrl: v.avatarUrl || v.photoURL || "",
              username: v.username || (v.email ? v.email.split("@")[0] : ""),
              displayName: safeDisplayName(rawName) || (v.username ? `@${v.username}` : ""),
            };
          } catch {
            /* noop */
          }
        })
      );
      setUserCache((prev) => ({ ...prev, ...batch }));
    })();
  }, [posts]); // eslint-disable-line react-hooks/exhaustive-deps

  /* ===== likes ===== */
  const [likes, setLikes] = useState({});
  useEffect(() => {
    const listeners = [];
    posts.forEach((p) => {
      const lRef = dbRef(db, `likes/${p.id}`);
      const cb = (snap) => {
        const m = snap.val() || {};
        setLikes((prev) => ({
          ...prev,
          [p.id]: { count: Object.keys(m).length, you: authUser ? !!m[authUser.uid] : false },
        }));
      };
      onValue(lRef, cb);
      listeners.push({ lRef, cb });
    });
    return () => listeners.forEach(({ lRef, cb }) => off(lRef, "value", cb));
  }, [posts, authUser]);

  const toggleLike = async (postId, isMock) => {
    if (isMock) return toastApi.pushToast("Demo post — like disabled.");
    if (!authUser?.uid) return toastApi.pushToast("Sign in to like posts.");
    const ref = dbRef(db, `likes/${postId}/${authUser.uid}`);
    const you = likes[postId]?.you;
    try {
      you ? await remove(ref) : await dbSet(ref, true);
    } catch (e) {
      toastApi.pushToast(`Like failed: ${e?.message || e}`);
    }
  };

  /* ===== composer ===== */
  const [text, setText] = useState("");
    const [file, setFile] = useState(null);
  const [posting, setPosting] = useState(false);
  const canPost = !!(authUser?.uid && me);
  const onPickImage = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.size > 10 * 1024 * 1024) {
      toastApi.pushToast("Image must be ≤ 10MB");
      e.target.value = "";
      return;
    }
    setFile(f);
  };

  const createPost = useCallback(async () => {
    if (!authUser?.uid || !me) return toastApi.pushToast("Sign in first.");
    const body = (text || "").trim();
    if (!body && !file) return toastApi.pushToast("Write something or add an image.");
    setPosting(true);
    try {
      const postId = push(dbRef(db, "posts")).key;
      if (!postId) throw new Error("Failed to allocate id");

      let imageUrl;
      if (file) {
        const ext = (file.name?.split(".").pop() || "jpg").toLowerCase();
        const path = `posts/${authUser.uid}/${postId}.${ext}`;
        const sref = storageRef(storage, path);
        const task = uploadBytesResumable(sref, file, { contentType: file.type || "image/jpeg" });
        await new Promise((res, rej) => task.on("state_changed", null, rej, res));
        imageUrl = await getDownloadURL(sref);
      }

      const uname = (me.username || (authUser.email ? authUser.email.split("@")[0] : "") || "").toLowerCase();
      const disp = safeDisplayName(me.displayName) || (uname ? `@${uname}` : "");

      const doc = {
        ownerUid: authUser.uid,
        authorUid: authUser.uid,
        authorUsername: uname,
        authorDisplayName: disp,
        authorAvatarUrl: me.avatarUrl || authUser.photoURL || "",
        text: body,
        createdAt: Date.now(),
        ...(imageUrl ? { imageUrl } : {}),
      };

      await dbUpdate(dbRef(db), {
        [`posts/${postId}`]: doc,
        [`userPosts/${authUser.uid}/${postId}`]: true,
      });

      setText("");
      setFile(null);
    } catch (e) {
      console.error("createPost failed:", e);
      toastApi.pushToast(`Post failed: ${e?.code || e?.message || e}`);
    } finally {
      setPosting(false);
    }
  }, [authUser, me, text, file, toastApi]);

  /* ===== suggestions ===== */
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const qRef = query(dbRef(db, "usernames"), orderByKey(), limitToFirst(32));
    const cb = async (snap) => {
      const map = snap.val() || {};
      const rows = await Promise.all(
        Object.entries(map).map(async ([uname, uid]) => {
          const ps = await get(dbRef(db, `users/${uid}`));
          const pv = ps.exists() ? ps.val() : {};
          return {
            uid,
            username: pv.username || uname,
            displayName: safeDisplayName(pv.displayName) || (pv.username ? `@${pv.username}` : `@${uname}`),
            avatarUrl: pv.avatarUrl || pv.photoURL || "",
          };
        })
      );
      const deduped = uniqueByUid(rows).filter((r) => r.uid !== me?.uid);
      setSuggestions(deduped);
    };
    onValue(qRef, cb);
    return () => off(qRef, "value", cb);
  }, [me?.uid]);

  const avatarImgStyle = {
    width: 42,
    height: 42,
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "center 20%",
    border: "1px solid var(--line)",
    boxShadow: "var(--glowSoft)",
  };
  const suggImgStyle = {
    width: 34,
    height: 34,
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "center 20%",
    border: "1px solid var(--line)",
    boxShadow: "var(--glowSoft)",
  };
  const cmtImgStyle = {
    width: 28,
    height: 28,
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "center 20%",
    border: "1px solid var(--line)",
  };

  const onUserHeaderClick = async (p) => {
    if (p.isMock) return;
    if (p.ownerUid) return navigate(`/profile/${p.ownerUid}`);
    if (p.authorUid) return navigate(`/profile/${p.authorUid}`);
    if (p.authorUsername) {
      try {
        const uid = await uidByUsername(p.authorUsername);
        if (uid) return navigate(`/profile/${uid}`);
      } catch {
        /* noop */
      }
    }
  };

  const GLOBE_URL = "/humanity-globe-2560%20(1).webp";

  const Badge = ({ count }) =>
    count > 0 ? (
      <span
        style={{
          marginLeft: 8,
          background: "var(--brand)",
          color: "#0b1220",
          borderRadius: 999,
          padding: "2px 8px",
          fontSize: 12,
          fontWeight: 800,
          boxShadow: "0 0 14px rgba(96,165,250,.45)",
        }}
      >
        {count}
      </span>
    ) : null;

  return (
    <>
      {/* BACKGROUND */}
      <div className="bg-globe" aria-hidden>
        <img src={GLOBE_URL} alt="" loading="eager" decoding="async" fetchpriority="high" />
        <div className="bg-stars" />
        <div className="bg-vignette" />
      </div>

      {/* Header */}
      <Header onAbout={() => toastApi.pushToast("Humanity — Proof of Human")} />

      <div className="heroSpacer" />
      <Toasts list={toasts} />

      <div className="shell">
        <div className="grid">
          {/* LEFT NAV */}
          <aside className="panel nav">
            <div className="item" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Universe
            </div>
            <div className="item" onClick={() => me && navigate(`/profile/${me.uid}`)}>
              Profile
            </div>
            <div
              className="item"
              onClick={() => {
                markMessagesSeen();
                navigate("/messages");
              }}
            >
              Messages <Badge count={messageUnread} />
            </div>
            <div
              className="item"
              onClick={() => {
                markFollowersSeen();
                navigate("/notifications");
              }}
            >
              Notifications <Badge count={followUnread} />
            </div>
            <div className="item" onClick={() => navigate("/verify")}>
              Verify
            </div>
            <div className="item" onClick={() => navigate("/settings")}>
              Settings
            </div>
          </aside>

          {/* FEED */}
          <main className="feedCol">
            {/* Composer */}
            <section className="card">
              <div className="composerTop">
                {me?.avatarUrl ? (
                  <img src={me.avatarUrl} alt="" style={avatarImgStyle} />
                ) : (
                  <div className="avatarFallback" style={{ ...avatarImgStyle, display: "grid", placeItems: "center" }}>
                    👤
                  </div>
                )}
                <textarea
                  className="textarea"
                  rows={3}
                  placeholder="Share something…"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
              <div className="compRow">
                <label className="btn">
                  <input type="file" accept="image/*" onChange={onPickImage} style={{ display: "none" }} />
                  Add Image
                </label>
                <button className="btn btnPrimary" disabled={!canPost || posting} onClick={createPost}>
                  {posting ? "Posting…" : "Post"}
                </button>
              </div>
              {file && (
                <div className="preview">
                  <img src={URL.createObjectURL(file)} alt="preview" />
                  <button className="btn" onClick={() => setFile(null)}>
                    Remove
                  </button>
                </div>
              )}
            </section>

            {/* ONE clean error banner if feed is blocked */}
            {feedError && (
              <section
                className="card"
                style={{ border: "1px solid #f87171", background: "rgba(248,113,113,.12)", padding: 12, marginBottom: 12 }}
              >
                {feedError}
              </section>
            )}

            {/* Posts */}
            {posts.map((p) => {
              const likeCount = likes[p.id]?.count || 0;
              const youLiked = likes[p.id]?.you || false;
              const avatarSrc =
                p.authorAvatarUrl ||
                (p.ownerUid && userCache[p.ownerUid]?.avatarUrl) ||
                (p.authorUid && userCache[p.authorUid]?.avatarUrl) ||
                "";
              const uname = usernameForPost(p, userCache);
              const dispName = displayNameForPost(p, userCache);

              return (
                <article key={`post-${p.id}`} className="card">
                  <div className="postHead">
                    <button className="userBtn" onClick={() => onUserHeaderClick(p)}>
                      {avatarSrc ? (
                        <img src={avatarSrc} alt="" style={avatarImgStyle} />
                      ) : (
                        <div className="avatarFallback" style={{ ...avatarImgStyle, display: "grid", placeItems: "center" }}>
                          {initialsFrom(uname)}
                        </div>
                      )}
                      <div className="userNames">
                        <div className="display">{dispName}</div>
                        <div className="user">@{uname} · {timeAgo(p.createdAt)}</div>
                      </div>
                    </button>
                  </div>

                  {p.text && <div className="postBody">{p.text}</div>}
                  {p.imageUrl && <img className="postImage" src={p.imageUrl} alt="post media" />}

                  <div className="actions">
                    <button className={`pill ${youLiked ? "on" : ""}`} onClick={() => toggleLike(p.id, p.isMock)}>
                      ♥ {likeCount}
                    </button>
                    <button className="pill" onClick={() => toastApi.pushToast("Share coming soon")}>↗ Share</button>
                  </div>

                  <Comments postId={p.id} avatarStyle={cmtImgStyle} />
                  <CommentBox postId={p.id} me={me} authUser={authUser} toastApi={toastApi} />
                </article>
              );
            })}
          </main>

          {/* RIGHT RAIL */}
          <aside className="panel" style={{ padding: 12, display: "grid", gap: 14 }}>
            <div>
              <div className="rightTitle">Who to follow</div>
              <div className="sugg">
                {suggestions.map((s) => (
                  <div key={`sugg-${s.uid}`} className="suggItem">
                    {s.avatarUrl ? (
                      <img src={s.avatarUrl} alt="" style={suggImgStyle} />
                    ) : (
                      <div className="avatarFallback" style={{ ...suggImgStyle, display: "grid", placeItems: "center" }}>
                        {initialsFrom(s.username)}
                      </div>
                    )}
                    <div>
                      <div style={{ fontWeight: 900 }}>{s.displayName}</div>
                      <div style={{ opacity: 0.72, fontSize: 12 }}>@{s.username}</div>
                    </div>
                    <button className="suggBtn" onClick={() => navigate(`/profile/${s.uid}`)}>Follow</button>
                  </div>
                ))}
                {!suggestions.length && <div className="card">No suggestions yet.</div>}
              </div>
            </div>
            <div>
              <div className="rightTitle">Trending</div>
              <div style={{ display: "grid", gap: 8 }}>
                <div>#HUMANITY</div>
                <div>#AllBots</div>
                <div>#TrendingNow</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

/* ================= Header & Search ================= */
function Header({ onAbout }) {
  const navigate = useNavigate();
  const { authUser, me } = useMe();

  const doLogout = async () => {
    try {
      await signOut(auth);
      navigate("/"); // <— redirect to LandingPage.jsx (route "/")
    } catch (e) {
      console.error("Sign out failed:", e);
      alert("Log out failed. Check console for details.");
    }
  };

  const avatarStyle = {
    width: 34,
    height: 34,
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "center 20%",
    border: "1px solid var(--line)",
    boxShadow: "var(--glowSoft)",
    cursor: "pointer",
  };

  return (
    <header className="header">
      <div className="headerWrap">
        <button className="brand" onClick={onAbout} title="About #HUMANITY">
          <span className="brandIcon"><HumanityMark /></span>
          <span className="brandText">HUMANITY</span>
        </button>

        <Search />

        {authUser && (
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {me?.avatarUrl ? (
              <img
                src={me.avatarUrl}
                alt=""
                style={avatarStyle}
                onClick={() => me && navigate(`/profile/${me.uid}`)}
                title="Open your profile"
              />
            ) : (
              <div
                className="avatarFallback"
                style={{ ...avatarStyle, display: "grid", placeItems: "center" }}
                onClick={() => me && navigate(`/profile/${me.uid}`)}
                title="Open your profile"
              >
                👤
              </div>
            )}
            <button className="btn" onClick={doLogout}>Log out</button>
          </div>
        )}
      </div>
    </header>
  );
}

function Search() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState([]);
  const boxRef = useRef(null);

  useEffect(() => {
    const s = q.trim().toLowerCase();
    if (!s) {
      setResults([]);
      return;
    }
    const qRef = query(dbRef(db, "usernames"), orderByKey(), limitToFirst(10));
    const cb = async (snap) => {
      const map = snap.val() || {};
      const rows = await Promise.all(
        Object.entries(map)
          .filter(([uname]) => uname.startsWith(s))
          .slice(0, 10)
          .map(async ([uname_lc, uid]) => {
            const ps = await get(dbRef(db, `users/${uid}`));
            const pv = ps.exists() ? ps.val() : {};
            const disp = safeDisplayName(pv.displayName) || (pv.username ? `@${pv.username}` : `@${uname_lc}`);
            return {
              uid,
              username: pv.username || uname_lc,
              displayName: disp,
              avatarUrl: pv.avatarUrl || pv.photoURL || "",
            };
          })
      );
      const deduped = uniqueByUid(rows);
      setResults(deduped);
    };
    onValue(qRef, cb);
    return () => off(qRef, "value", cb);
  }, [q]);

  useEffect(() => {
    const onDoc = (e) => {
      if (!boxRef.current) return;
      if (!boxRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const go = () => {
    if (results.length) {
      navigate(`/profile/${results[0].uid}`);
      setOpen(false);
    }
  };

  return (
    <div className="searchBox" ref={boxRef}>
      <input
        className="searchInput"
        placeholder="Search users"
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter") go();
        }}
      />
      <button className="searchBtn" onClick={go}>Search</button>
      {open && results.length > 0 && (
        <div className="searchList">
          {results.map((r) => (
            <div
              key={`sr-${r.uid}`}
              className="searchItem"
              onClick={() => {
                navigate(`/profile/${r.uid}`);
                setOpen(false);
              }}
            >
              {r.avatarUrl ? (
                <img
                  src={r.avatarUrl}
                  className="searchAv"
                  alt=""
                  style={{ width: 28, height: 28, borderRadius: "50%", objectFit: "cover", objectPosition: "center 20%" }}
                />
              ) : (
                <div className="searchFallback">{initialsFrom(r.username)}</div>
              )}
              <div style={{ fontWeight: 900 }}>{r.displayName}</div>
              <div style={{ opacity: 0.72, marginLeft: 6 }}>@{r.username}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ================= comments ================= */
function Comments({ postId, avatarStyle }) {
  const [list, setList] = useState([]);
  useEffect(() => {
    const cRef = dbRef(db, `comments/${postId}`);
    const cb = (snap) => {
      const v = snap.val() || {};
      const arr = Object.entries(v).map(([id, c]) => ({ id, ...c }));
      arr.sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));
      setList(arr);
    };
    onValue(cRef, cb);
    return () => off(cRef, "value", cb);
  }, [postId]);

  if (!list.length) return null;

  return (
    <ul className="comments">
      {list.map((c) => (
        <li key={`c-${c.id}`} className="comment">
          {c.authorAvatarUrl ? (
            <img src={c.authorAvatarUrl} className="cAv" alt="" style={avatarStyle} />
          ) : (
            <div className="fallback" style={{ ...avatarStyle, display: "grid", placeItems: "center" }}>
              {initialsFrom(c.authorUsername)}
            </div>
          )}
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <strong>
                {safeDisplayName(c.authorDisplayName) ||
                  (c.authorUsername ? `@${c.authorUsername}` : "@someone")}
              </strong>
              <span style={{ opacity: 0.65, fontSize: 12 }}>{timeAgo(c.createdAt)}</span>
            </div>
            <div>{c.text}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

function CommentBox({ postId, me, authUser, toastApi }) {
  const [value, setValue] = useState("");
  const submit = async () => {
    const text = value.trim();
    if (!authUser?.uid || !me) return toastApi.pushToast("Sign in first.");
    if (!text) return;
    try {
      const cRef = push(dbRef(db, `comments/${postId}`));
      const prof = await getUserProfile(authUser.uid);
      const uname = prof.username || me.username || "";
      const disp = safeDisplayName(prof.displayName) || (uname ? `@${uname}` : "");
      await dbSet(cRef, {
        ownerUid: authUser.uid,
        authorUsername: uname,
        authorDisplayName: disp,
        authorAvatarUrl: prof.avatarUrl || me.avatarUrl || "",
        text,
        createdAt: Date.now(),
      });
      setValue("");
    } catch (e) {
      toastApi.pushToast(`Comment failed: ${e?.code || e?.message || e}`);
    }
  };
  return (
    <div className="commentRow">
      <input
        className="commentInput"
        placeholder="Write a comment…"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") submit();
        }}
      />
      <button className="btn" onClick={submit}>Reply</button>
    </div>
  );
}
