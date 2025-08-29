// FILE: src/pages/UniversePage.jsx
import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
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

/* force HTTPS to prevent mixed content */
const httpsify = (u) => {
  if (!u) return u;
  try {
    const s = String(u);
    if (s.startsWith("http://")) return s.replace(/^http:\/\//i, "https://");
    return s;
  } catch { return u; }
};

/* ======== simple linkifier (URLs → <a>) ======== */
function LinkifiedText({ text = "" }) {
  const urlRe = /((https?:\/\/|www\.)[^\s<]+)/gi;
  const parts = String(text).split(urlRe);
  return (
    <span>
      {parts.map((part, i) => {
        const isUrl = urlRe.test(part);
        urlRe.lastIndex = 0;
        if (!isUrl) return <React.Fragment key={i}>{part}</React.Fragment>;
        const href = part.startsWith("http") ? part : `https://${part}`;
        return (
          <a key={i} href={href} target="_blank" rel="noopener noreferrer">
            {part}
          </a>
        );
      })}
    </span>
  );
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

/* ===== hashtag helpers ===== */
function extractHashtags(text) {
  const tags = [];
  if (!text) return tags;
  const re = /(^|\s)#([A-Za-z0-9_]{2,32})/g;
  let m;
  while ((m = re.exec(String(text)))) tags.push(m[2]);
  return tags;
}
function postHasTag(p, tagUC) {
  const has = (t) => extractHashtags(t).some((x) => x.toUpperCase() === tagUC);
  return (!!p.text && has(p.text)) || (p?.type === "repost" && !!p?.original?.text && has(p.original.text));
}

/* ================= page ================= */
export default function UniversePage() {
  const { authUser, me } = useMe();
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [toasts, toastApi] = useToasts();
  const [lightboxSrc, setLightboxSrc] = useState("");
  const openLightbox = useCallback((src) => {
    if (!src) return;
    try {
      const s = String(src || "");
      if (!s) return;
      // force https if protocol-relative or plain http
      const fixed = s.startsWith("http://") ? s.replace(/^http:\/\//i, "https://") : s;
      setLightboxSrc(fixed);
    } catch {
      setLightboxSrc(src);
    }
  }, []);
  const closeLightbox = useCallback(() => setLightboxSrc(""), []);

  const { followUnread, messageUnread, markFollowersSeen, markMessagesSeen } =
    useUniverseBadgesPersisted();

  /* ===== FEED ===== */
  const [posts, setPosts] = useState([]);
  const [feedError, setFeedError] = useState("");
  const [visibleCount, setVisibleCount] = useState(10);

  // tag filter from URL (/tag/:tag) or query (?tag=)
  const [selectedTag, setSelectedTag] = useState(null);
  useEffect(() => {
    const pathTag = params?.tag ? String(params.tag).replace(/^#/, "") : "";
    const qTag = new URLSearchParams(location.search).get("tag") || "";
    const t = (pathTag || qTag).trim();
    setSelectedTag(t ? t.toUpperCase() : null);
  }, [params?.tag, location.search]);

  useEffect(() => {
    setVisibleCount(10);
  }, [selectedTag]);

  useEffect(() => {
    let detachFeed = null;

    const unsubAuth = onAuthStateChanged(auth, (u) => {
      if (detachFeed) {
        detachFeed();
        detachFeed = null;
      }
      setFeedError("");
      setPosts([]);
      setVisibleCount(10);

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

  /* ===== repair old gs:// URLs once ===== */
  const fixedRefs = useRef(new Set());
  useEffect(() => {
    posts.forEach((p) => {
      if (!p.imageUrl || !String(p.imageUrl).startsWith("gs://")) return;
      if (fixedRefs.current.has(p.id)) return;
      fixedRefs.current.add(p.id);
      const sref = storageRef(storage, p.imageUrl);
      getDownloadURL(sref)
        .then((httpsUrl) => dbUpdate(dbRef(db), { [`posts/${p.id}/imageUrl`]: httpsUrl }))
        .catch(() => {});
    });
  }, [posts]);

  /* ===== user profile cache ===== */
  const [userCache, setUserCache] = useState({});
  useEffect(() => {
    const uids = new Set();
    posts.forEach((p) => {
      if (p?.ownerUid) uids.add(p.ownerUid);
      if (p?.authorUid) uids.add(p.authorUid);
      if (p?.original?.ownerUid) uids.add(p.original.ownerUid);
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
          } catch {}
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

  const ALLOWED_IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
  const EXT_FROM_TYPE = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
    "image/gif": "gif",
  };

  const onPickImage = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.size > 10 * 1024 * 1024) {
      toastApi.pushToast("Image must be ≤ 10MB");
      e.target.value = "";
      return;
    }
    if (!ALLOWED_IMAGE_TYPES.has(f.type)) {
      toastApi.pushToast("Unsupported image type. Use JPG, PNG, WEBP, or GIF.");
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
        const ext = EXT_FROM_TYPE[file.type] || "jpg";
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

  /* ===== repost ===== */
  const repost = async (p) => {
    if (!authUser?.uid || !me) return toastApi.pushToast("Sign in first.");
    const confirm = window.confirm("Repost this to your timeline?");
    if (!confirm) return;

    try {
      const origSnap = await get(dbRef(db, `posts/${p.id}`));
      if (!origSnap.exists()) {
        toastApi.pushToast("Original post no longer available.");
        return;
      }
      const orig = origSnap.val();

      const newId = push(dbRef(db, "posts")).key;
      if (!newId) throw new Error("Failed to allocate id");

      const uname = (me.username || (authUser.email ? authUser.email.split("@")[0] : "") || "").toLowerCase();
      const disp = safeDisplayName(me.displayName) || (uname ? `@${uname}` : "");

      const doc = {
        ownerUid: authUser.uid,
        authorUid: authUser.uid,
        authorUsername: uname,
        authorDisplayName: disp,
        authorAvatarUrl: me.avatarUrl || authUser.photoURL || "",
        createdAt: Date.now(),
        type: "repost",
        repostOf: p.id,
        original: {
          id: p.id,
          ownerUid: orig.ownerUid || orig.authorUid || null,
          authorUsername: orig.authorUsername || "",
          authorDisplayName: orig.authorDisplayName || "",
          authorAvatarUrl: orig.authorAvatarUrl || "",
          text: orig.text || "",
          imageUrl: orig.imageUrl || "",
          createdAt: orig.createdAt || 0,
        },
      };

      await dbUpdate(dbRef(db), {
        [`posts/${newId}`]: doc,
        [`userPosts/${authUser.uid}/${newId}`]: true,
      });

      toastApi.pushToast("Reposted ✔");
    } catch (e) {
      toastApi.pushToast(`Repost failed: ${e?.message || e}`);
    }
  };

  /* ===== trending (auto) ===== */
  const trendingTags = useMemo(() => {
    const counts = new Map();
    const cutoff = Date.now() - 48 * 60 * 60 * 1000; // 48h
    posts.forEach((p) => {
      if ((p.createdAt || 0) < cutoff) return;
      const set = new Set();
      extractHashtags(p.text || "").forEach((t) => set.add(t.toUpperCase()));
      if (p?.type === "repost" && p?.original?.text) {
        extractHashtags(p.original.text).forEach((t) => set.add(t.toUpperCase()));
      }
      set.forEach((t) => counts.set(t, (counts.get(t) || 0) + 1));
    });
    const sorted = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]).map(([t]) => t);
    if (sorted.length === 0) return ["HUMANITY", "AllBots", "TrendingNow"];
    return sorted.slice(0, 3);
  }, [posts]);

  const goTag = (raw) => {
    const tag = String(raw || "").replace(/^#/, "");
    const tagUC = tag.toUpperCase();
    setSelectedTag(tagUC);
    // If you wire a route path="/tag/:tag" -> UniversePage, this will reflect in URL too:
    navigate(`/tag/${encodeURIComponent(tagUC)}`);
  };

  const clearTag = () => {
    setSelectedTag(null);
    navigate("/universe");
  };

  const GLOBE_URL = "/humanity-globe-2560%20(1).webp";

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
      } catch {}
    }
  };

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

  // Apply tag filter to posts for rendering + "Show more"
  const filteredPosts = useMemo(() => {
    if (!selectedTag) return posts;
    const tagUC = selectedTag.toUpperCase();
    return posts.filter((p) => postHasTag(p, tagUC));
  }, [posts, selectedTag]);

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
            {/* Optional active tag chip */}
            {selectedTag && (
              <div className="card" style={{ marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ fontWeight: 900 }}>Filtering by</div>
                <div
                  style={{
                    padding: "4px 10px",
                    borderRadius: 999,
                    border: "1px solid var(--line)",
                    background: "rgba(255,255,255,.06)",
                    fontWeight: 900,
                  }}
                >
                  #{selectedTag}
                </div>
                <button className="btn" onClick={clearTag} style={{ marginLeft: "auto" }}>
                  Clear
                </button>
              </div>
            )}

            {/* Composer */}
            <section className="card">
              <div className="composerTop">
                {me?.avatarUrl ? (
                  <img src={httpsify(me.avatarUrl)} alt="" style={avatarImgStyle} />
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
                  <input type="file" accept="image/png,image/jpeg,image/webp,image/gif" onChange={onPickImage} style={{ display: "none" }} />
                  Add Image
                </label>
                <button className="btn btnPrimary" disabled={!canPost || posting} onClick={createPost}>
                  {posting ? "Posting…" : "Post"}
                </button>
              </div>
              {file && (
                <div className="preview">
                  <img src={URL.createObjectURL(file)} alt="preview" onLoad={(e)=>URL.revokeObjectURL(e.currentTarget.src)} />
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

            {/* Posts (first N, then Show more) */}
            {(filteredPosts.slice(0, visibleCount)).map((p) => {
              const likeCount = likes[p.id]?.count || 0;
              const youLiked = likes[p.id]?.you || false;
              const avatarSrc = httpsify(
                p.authorAvatarUrl ||
                (p.ownerUid && userCache[p.ownerUid]?.avatarUrl) ||
                (p.authorUid && userCache[p.authorUid]?.avatarUrl) ||
                ""
              );
              const uname = usernameForPost(p, userCache);
              const dispName = displayNameForPost(p, userCache);

              const isRepost = p.type === "repost" || !!p.repostOf;

              return (
                <article id={`post-${p.id}`} key={`post-${p.id}`} className="card">
                  <div className="postHead">
                    <button className="userBtn" onClick={() => onUserHeaderClick(p)}>
                      {avatarSrc ? (
                        <img
                          src={avatarSrc}
                          alt=""
                          style={{ ...avatarImgStyle, cursor: "zoom-in" }}
                          onClick={(e) => { e.stopPropagation(); openLightbox(avatarSrc); }}
                        />
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

                  {/* Repost label */}
                  {isRepost && (
                    <div style={{ opacity: 0.7, fontSize: 12, margin: "2px 2px 8px" }}>
                      Reposted
                    </div>
                  )}

                  {/* Text/Image for normal post */}
                  {!isRepost && p.text && <div className="postBody"><LinkifiedText text={p.text} /></div>}
                  {!isRepost && p.imageUrl && (
                    <img
                      className="postImage"
                      src={httpsify(p.imageUrl)}
                      alt="post media"
                      onClick={() => openLightbox(p.imageUrl)}
                      style={{ cursor: "zoom-in" }}
                      onError={(e) => { e.currentTarget.style.display = "none"; }}
                      loading="lazy"
                      decoding="async"
                    />
                  )}

                  {/* Embedded original for repost */}
                  {isRepost && (
                    <OriginalPostEmbed data={p.original} userCache={userCache} onOpenImage={openLightbox} />
                  )}

                  <div className="actions">
                    <button className={`pill ${youLiked ? "on" : ""}`} onClick={() => toggleLike(p.id, p.isMock)}>
                      ♥ {likeCount}
                    </button>
                    <button className="pill" onClick={() => repost(isRepost ? { id: p.repostOf } : p)}>↻ Share</button>
                    <button
                      className="pill"
                      onClick={async () => {
                        try {
                          const url = `${window.location.origin}/post/${p.id}`;
                          await navigator.clipboard.writeText(url);
                          toastApi.pushToast("Link copied");
                        } catch {
                          toastApi.pushToast("Copy failed");
                        }
                      }}
                      title="Copy link"
                    >
                      🔗 Copy
                    </button>
                  </div>

                  <Comments postId={p.id} avatarStyle={cmtImgStyle} onOpenImage={openLightbox} />
                  <CommentBox postId={p.id} me={me} authUser={authUser} toastApi={toastApi} />
                </article>
              );
            })}

            {/* Show more */}
            {filteredPosts.length > visibleCount && (
              <div style={{ display: "grid", placeItems: "center", margin: "12px 0 24px" }}>
                <button className="btn" onClick={() => setVisibleCount((n) => n + 10)}>Show more</button>
              </div>
            )}
          </main>

          {/* RIGHT RAIL */}
          <aside className="panel" style={{ padding: 12, display: "grid", gap: 14 }}>
            {/* Trending FIRST */}
            <div>
              <div className="rightTitle">Trending</div>
              <div style={{ display: "grid", gap: 8 }}>
                {trendingTags.map((t) => (
                  <button
                    key={`tag-${t}`}
                    className="btn"
                    style={{ justifySelf: "start", padding: "6px 10px", borderRadius: 999 }}
                    onClick={() => goTag(t)}
                    title={`Filter by #${t}`}
                  >
                    #{t}
                  </button>
                ))}
              </div>
            </div>

            {/* Who to follow SECOND */}
            <div>
              <div className="rightTitle">Who to follow</div>
              <div className="sugg">
                {suggestions.map((s) => (
                  <div key={`sugg-${s.uid}`} className="suggItem">
                    {s.avatarUrl ? (
                      <img src={httpsify(s.avatarUrl)} alt="" style={suggImgStyle} />
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
          </aside>
        </div>
      </div>

      {/* Mobile top icons (profile + discussions) */}
      <MobileTopBar
        me={me}
        onProfile={() => me ? navigate(`/profile/${me.uid}`) : navigate("/login")}
        onDiscuss={() => navigate("/discussions")}
        onLogin={() => navigate("/login")}
      />

      {/* Mobile bottom nav (messages, alerts, settings, post) */}
      <BottomNav
        onMessages={() => navigate("/messages")}
        onNotifs={() => navigate("/notifications")}
        onSettings={() => navigate("/settings")}
        onPost={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />

      {/* Lightbox */}
      {lightboxSrc && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={lightboxSrc} alt="" className="lightboxImg" />
        </div>
      )}
    </>
  );
}

/* ===== embedded original post preview for reposts ===== */
function OriginalPostEmbed({ data, userCache, onOpenImage }) {
  if (!data) {
    return <div className="card" style={{ padding: 10, opacity: 0.8 }}>Original post unavailable.</div>;
  }
  const uname = data.authorUsername || (data.ownerUid && userCache[data.ownerUid]?.username) || "someone";
  const disp = safeDisplayName(data.authorDisplayName) ||
               (data.ownerUid && safeDisplayName(userCache[data.ownerUid]?.displayName)) ||
               (uname ? `@${uname}` : "@someone");
  const av = httpsify(
    data.authorAvatarUrl ||
    (data.ownerUid && userCache[data.ownerUid]?.avatarUrl) ||
    ""
  );

  return (
    <div className="card" style={{ background: "var(--panel)", padding: 10, border: "1px solid var(--line)" }}>
      <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 6 }}>
        {av ? (
          <img src={av} alt="" style={{ width: 28, height: 28, borderRadius: "50%", objectFit: "cover", border: "1px solid var(--line)", cursor: "zoom-in" }} onClick={() => onOpenImage && onOpenImage(av)} />
        ) : (
          <div style={{ width: 28, height: 28, borderRadius: "50%", display: "grid", placeItems: "center", border: "1px solid var(--line)" }}>
            {initialsFrom(uname)}
          </div>
        )}
        <div style={{ fontWeight: 800 }}>{disp}</div>
        <div style={{ opacity: 0.7, fontSize: 12 }}>@{uname} · {timeAgo(data.createdAt)}</div>
      </div>
      {data.text && <div style={{ marginBottom: data.imageUrl ? 8 : 0 }}><LinkifiedText text={data.text} /></div>}
      {data.imageUrl && (
        <img
          className="postImage"
          src={httpsify(data.imageUrl)}
          alt="post media"
          onClick={() => onOpenImage && onOpenImage(data.imageUrl)}
          style={{ cursor: "zoom-in" }}
          onError={(e) => { e.currentTarget.style.display = "none"; }}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
}

/* ================= Header & Search ================= */
function Header({ onAbout }) {
  const navigate = useNavigate();
  const { authUser, me } = useMe();

  const doLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
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
                src={httpsify(me.avatarUrl)}
                alt=""
                style={{ ...avatarStyle, cursor: "zoom-in" }}
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
                  src={httpsify(r.avatarUrl)}
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

/* ================= Mobile top bar (profile + discussions) ================= */
function MobileTopBar({ me, onProfile, onDiscuss, onLogin }) {
  return (
    <div className="mobileTopBar">
      <button className="mobileTopBtn" onClick={onDiscuss} title="Discussions">🗣️</button>
      <div style={{ flex: 1 }} />
      {me?.avatarUrl ? (
        <img
          src={me.avatarUrl}
          alt=""
          className="mobileTopAvatar"
          onClick={onProfile}
        />
      ) : (
        <button className="mobileTopBtn" onClick={onLogin} title="Profile">👤</button>
      )}
    </div>
  );
}

/* ================= Mobile bottom nav (messages, alerts, settings, post) ================= */
function BottomNav({ onMessages, onNotifs, onSettings, onPost }) {
  return (
    <nav className="bottomNav" aria-label="Primary">
      <div className="bottomBar">
        <button className="bottomBtn" onClick={onMessages}><span>💬</span><span className="bottomCap">Messages</span></button>
        <button className="bottomBtn" onClick={onNotifs}><span>🔔</span><span className="bottomCap">Alerts</span></button>
        <button className="bottomBtn" onClick={onSettings}><span>⚙️</span><span className="bottomCap">Settings</span></button>
        <button className="bottomBtn" onClick={onPost}><span>✍️</span><span className="bottomCap">Post</span></button>
      </div>
    </nav>
  );
}

/* ================= comments ================= */
function Comments({ postId, avatarStyle, onOpenImage }) {
  const { authUser } = useMe();
  const [list, setList] = useState([]);
  const [likesMap, setLikesMap] = useState({}); // commentId -> {count, you}
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

  useEffect(() => {
    const lRef = dbRef(db, `commentLikes/${postId}`);
    const cb = (snap) => {
      const v = snap.val() || {};
      const next = {};
      Object.keys(v).forEach((cid) => {
        const by = v[cid] || {};
        next[cid] = {
          count: Object.keys(by).length,
          you: authUser ? !!by[authUser.uid] : false,
        };
      });
      setLikesMap(next);
    };
    onValue(lRef, cb);
    return () => off(lRef, "value", cb);
  }, [postId, authUser?.uid]);

  const toggleCommentLike = async (commentId) => {
    if (!authUser?.uid) return;
    const ref = dbRef(db, `commentLikes/${postId}/${commentId}/${authUser.uid}`);
    const you = likesMap[commentId]?.you;
    try {
      you ? await remove(ref) : await dbSet(ref, true);
    } catch {}
  };

  if (!list.length) return null;

  return (
    <ul className="comments">
      {list.map((c) => (
        <li key={`c-${c.id}`} className="comment">
          {c.authorAvatarUrl ? (
            <img src={c.authorAvatarUrl} className="cAv" alt="" style={{ ...avatarStyle, cursor: c.authorAvatarUrl ? "zoom-in" : "default" }} onClick={() => onOpenImage && onOpenImage(c.authorAvatarUrl)} />
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
            <div style={{ marginTop: 6 }}>
              <button className={`pill ${likesMap[c.id]?.you ? "on" : ""}`} onClick={() => toggleCommentLike(c.id)}>
                ♥ {likesMap[c.id]?.count || 0}
              </button>
            </div>
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


