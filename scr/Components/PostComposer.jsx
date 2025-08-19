
// FILE: src/components/PostComposer.jsx
import React, { useState } from "react";
import { auth, db, storage } from "../firebase/firebaseConfig";
import {
  ref as dbRef, get, push, set
} from "firebase/database";
import {
  ref as storageRef, uploadBytes, getDownloadURL
} from "firebase/storage";

function withTimeout(promise, ms = 20000, label = "operation") {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error(`${label} timed out`)), ms))
  ]);
}

export default function PostComposer({ onPosted }) {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [posting, setPosting] = useState(false);
  const [err, setErr] = useState("");

  async function handlePost() {
    setErr("");
    setPosting(true);
    try {
      const user = auth.currentUser;
      if (!user) throw new Error("Not signed in");

      // Pull profile for denormalized author fields
      const uSnap = await withTimeout(get(dbRef(db, `users/${user.uid}`)), 10000, "profile fetch");
      const u = uSnap.exists() ? uSnap.val() : {};

      // Reserve a post key first
      const postRef = push(dbRef(db, "posts"));

      // Upload image (optional)
      let finalImageUrl = "";
      if (file) {
        const ext = (file.name.split(".").pop() || "jpg").toLowerCase();
        const path = `posts/${user.uid}/${postRef.key}/image_${Date.now()}.${ext}`;
        const sref = storageRef(storage, path);
        const metadata = { contentType: file.type || "image/jpeg", cacheControl: "public,max-age=31536000" };
        await withTimeout(uploadBytes(sref, file, metadata), 20000, "image upload");
        finalImageUrl = await withTimeout(getDownloadURL(sref), 10000, "download URL");
      }

      // Write the post (your rules require uid or ownerUid)
      await withTimeout(set(postRef, {
        id: postRef.key,
        uid: user.uid,
        ownerUid: user.uid,
        authorUid: user.uid,
        authorUsername: u.username || "",
        authorDisplayName: u.displayName || u.username || "",
        authorAvatarUrl: u.avatarUrl || u.photoURL || "",
        text: text || "",
        imageUrl: finalImageUrl || "",
        createdAt: Date.now(),
        likeCount: 0,
        commentCount: 0,
      }), 10000, "post write");

      setText("");
      setFile(null);
      onPosted?.();
    } catch (e) {
      setErr(e.message || String(e));
      // eslint-disable-next-line no-console
      console.error("PostComposer:", e);
    } finally {
      setPosting(false);
    }
  }

  return (
    <div className="composer frosted white-glow" style={{ padding: 12, borderRadius: 12 }}>
      {err && <div className="vp-error" style={{ marginBottom: 8 }}>{err}</div>}
      <textarea
        placeholder="Say something…"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "100%", minHeight: 72, marginBottom: 8 }}
      />
      <div style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "space-between" }}>
        <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />
        <button className="btn primary" disabled={posting} onClick={handlePost}>
          {posting ? "Posting…" : "Post"}
        </button>
      </div>
    </div>
  );
}
