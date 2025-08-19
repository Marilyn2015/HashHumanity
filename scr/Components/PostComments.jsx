// FILE: src/components/PostComments.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ref as dbRef,
  onValue,
  off,
  push,
  set,
  get,
  update,
} from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig";

/**
 * Live comments with username + profile photo.
 * - Writes comments to: comments/{postId}/{commentId}
 *   { uid, text, ts, username, displayName, photoURL }
 * - Reads profiles from: profiles/{uid}
 *
 * Props:
 *   - postId: string (required)
 */
export default function PostComments({ postId }) {
  const [me, setMe] = useState(null);
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);
  const [err, setErr] = useState("");

  // simple in-memory profile cache to hydrate old comments missing username/photoURL
  const profileCache = useRef(new Map());

  const canComment = useMemo(() => Boolean(me && postId), [me, postId]);

  /* --- auth --- */
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setMe(u || null));
    return () => unsub();
  }, []);

  /* --- live comments sub --- */
  useEffect(() => {
    if (!postId) return;
    const cRef = dbRef(db, `comments/${postId}`);
    const unsub = onValue(cRef, (snap) => {
      const val = snap.val() || {};
      const arr = Object.entries(val)
        .map(([id, c]) => ({ id, ...c }))
        .sort((a, b) => (a.ts || 0) - (b.ts || 0));
      setComments(arr);
    });
    return () => off(cRef);
  }, [postId]);

  /* --- fetch profile helper (cached) --- */
  async function getProfile(uid) {
    if (!uid) return {};
    if (profileCache.current.has(uid)) return profileCache.current.get(uid);
    const snap = await get(dbRef(db, `profiles/${uid}`));
    const p = snap.val() || {};
    const entry = {
      username: p.username || null,
      displayName: p.displayName || null,
      photoURL: p.photoURL || null,
    };
    profileCache.current.set(uid, entry);
    return entry;
  }

  /* --- write comment with denormalized fields --- */
  async function submitComment(e) {
    e?.preventDefault?.();
    setErr("");
    if (!canComment) {
      setErr("You must be signed in to comment.");
      return;
    }
    const body = (text || "").trim();
    if (!body) return;

    try {
      setSending(true);
      // get snapshot of my current profile
      const myProfSnap = await get(dbRef(db, `profiles/${me.uid}`));
      const myProf = myProfSnap.val() || {};
      const username = myProf.username || null;
      const displayName = myProf.displayName || me.displayName || null;
      const photoURL = myProf.photoURL || me.photoURL || null;

      const cRef = push(dbRef(db, `comments/${postId}`));
      await set(cRef, {
        uid: me.uid,
        text: body,
        ts: Date.now(),
        username,
        displayName,
        photoURL,
      });

      setText("");
    } catch (e2) {
      console.error(e2);
      setErr("Failed to post comment.");
    } finally {
      setSending(false);
    }
  }

  /* --- render helpers --- */
  function CommentItem({ c }) {
    const [hydrated, setHydrated] = useState({
      username: c.username || null,
      displayName: c.displayName || null,
      photoURL: c.photoURL || null,
    });

    // If old comment is missing fields, hydrate from profiles/{uid}
    useEffect(() => {
      let mounted = true;
      (async () => {
        if (c.username && c.photoURL) return; // already good
        const p = await getProfile(c.uid);
        if (!mounted) return;
        setHydrated((h) => ({
          username: h.username || p.username,
          displayName: h.displayName || p.displayName,
          photoURL: h.photoURL || p.photoURL,
        }));

        // Optional: backfill the missing fields so future reads are perfect
        // (Uncomment if you want to persist the fix)
        // try {
        //   await update(dbRef(db, `comments/${postId}/${c.id}`), {
        //     username: p.username || null,
        //     displayName: p.displayName || null,
        //     photoURL: p.photoURL || null,
        //   });
        // } catch {}
      })();
      return () => {
        mounted = false;
      };
    }, [c.id, c.uid, c.username, c.photoURL]);

    const name = hydrated.username || hydrated.displayName || c.uid?.slice(0, 6) || "user";
    const avatar = hydrated.photoURL || "/avatar-fallback.png";
    const when = c.ts ? new Date(c.ts).toLocaleString() : "";

    return (
      <div style={styles.commentRow}>
        <img src={avatar} alt="" style={styles.avatar} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={styles.meta}>
            <strong style={styles.name}>{name}</strong>
            <span style={styles.dot}>•</span>
            <span style={styles.time}>{when}</span>
          </div>
          <div style={styles.text}>{c.text}</div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.wrap}>
      {/* Write box */}
      {canComment && (
        <form onSubmit={submitComment} style={styles.form}>
          <img
            src={profileCache.current.get(me?.uid)?.photoURL || auth.currentUser?.photoURL || "/avatar-fallback.png"}
            alt=""
            style={styles.avatarSmall}
          />
          <input
            style={styles.input}
            placeholder="Write a comment…"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" style={styles.btn} disabled={sending || !text.trim()}>
            {sending ? "Posting…" : "Post"}
          </button>
        </form>
      )}

      {err && <div style={styles.err}>{err}</div>}

      {/* Comments list */}
      <div>
        {comments.map((c) => (
          <CommentItem key={c.id} c={c} />
        ))}
        {comments.length === 0 && <div style={styles.empty}>No comments yet.</div>}
      </div>
    </div>
  );
}

/* ---------- Inline styles so you don't have to wire CSS right now ---------- */
const styles = {
  wrap: { display: "grid", gap: 12 },
  form: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.14)",
    padding: 8,
    borderRadius: 10,
  },
  input: {
    flex: 1,
    minWidth: 0,
    background: "transparent",
    border: "none",
    outline: "none",
    color: "#fff",
    fontSize: 14,
  },
  btn: {
    background: "#17d7ff",
    color: "#001018",
    border: "none",
    borderRadius: 8,
    padding: "8px 12px",
    fontWeight: 800,
    cursor: "pointer",
  },
  err: { color: "#ff6b6b", fontSize: 13 },
  empty: { opacity: 0.7, fontSize: 13 },

  commentRow: {
    display: "flex",
    gap: 10,
    padding: "10px 8px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    objectFit: "cover",
    border: "1px solid rgba(255,255,255,0.25)",
  },
  avatarSmall: {
    width: 28,
    height: 28,
    borderRadius: "50%",
    objectFit: "cover",
    border: "1px solid rgba(255,255,255,0.25)",
  },
  meta: { display: "flex", alignItems: "center", gap: 6, fontSize: 13, opacity: 0.9 },
  name: { fontWeight: 800 },
  dot: { opacity: 0.6 },
  time: { opacity: 0.7, fontSize: 12 },
  text: { marginTop: 2, lineHeight: 1.4, wordBreak: "break-word" },
};
