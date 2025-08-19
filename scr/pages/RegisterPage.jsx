// FILE: src/pages/RegisterPage.jsx
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  updateProfile,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

import {
  ref as dbRef,
  runTransaction,
  update as dbUpdate,
  get as dbGet,
} from "firebase/database";

import {
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import { auth, db, storage } from "../firebase/firebaseConfig";
import "./RegisterPage.css"; // <<< THEME STYLES

/* ---------------- helpers ---------------- */
const toUsername = (s) => String(s || "").trim().toLowerCase();
const validUsername = (u) => /^[a-z0-9_]{3,20}$/.test(u);
const fileExt = (name = "") => {
  const ext = name.split(".").pop()?.toLowerCase();
  return ext && ext.length <= 5 ? ext : "webp";
};

export default function RegisterPage() {
  const nav = useNavigate();

  // form state
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [pw, setPw] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);

  // ui state
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [upPct, setUpPct] = useState(0);

  const displayName = useMemo(() => {
    const dn = `${first} ${last}`.trim();
    return dn || toUsername(username);
  }, [first, last, username]);

  async function claimUsernameOnce(uname, uid) {
    const ref = dbRef(db, `usernames/${uname}`);
    const txn = await runTransaction(ref, (curr) => (curr === null ? uid : curr));
    if (!txn.committed && txn.snapshot.val() !== uid) {
      throw new Error("Username already taken.");
    }
  }

  async function uploadAvatarIfAny(uid) {
    if (!avatarFile) return null;
    const ext = fileExt(avatarFile.name);
    const path = `avatars/${uid}/avatar_${Date.now()}.${ext}`;
    const putRef = storageRef(storage, path);
    const task = uploadBytesResumable(putRef, avatarFile);
    await new Promise((resolve, reject) => {
      task.on(
        "state_changed",
        (snap) => {
          if (snap.total) setUpPct(Math.round((snap.bytesTransferred / snap.total) * 100));
        },
        reject,
        resolve
      );
    });
    return await getDownloadURL(task.snapshot.ref);
  }

  async function writeProfile(uid, data) {
    await dbUpdate(dbRef(db), { [`users/${uid}`]: data });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    setUpPct(0);

    try {
      await setPersistence(auth, browserLocalPersistence);

      const cred = await createUserWithEmailAndPassword(auth, email.trim(), pw);
      const uid = cred.user.uid;

      if (displayName) {
        await updateProfile(cred.user, { displayName });
      }

      const existing = await dbGet(dbRef(db, `users/${uid}`));
      if (existing.exists()) {
        nav("/universe");
        return;
      }

      const uname = toUsername(username);
      if (!validUsername(uname)) {
        throw new Error("Username must be 3–20 chars: a–z, 0–9, underscore.");
      }
      await claimUsernameOnce(uname, uid);

      const avatarUrl = await uploadAvatarIfAny(uid);

      await writeProfile(uid, {
        uid,
        username: uname,
        displayName,
        avatarUrl: avatarUrl || null,
        createdAt: Date.now(),
      });

      nav("/universe");
    } catch (e2) {
      console.error(e2);
      setErr(e2?.message || String(e2));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hx-auth-wrap">
      <div className="hx-auth-card">
        <header className="hx-auth-header">
          <div className="hx-logo">#HUMANITY</div>
          <h1>Create your account</h1>
          <p>Pick a unique username. Add an avatar now or later.</p>
        </header>

        <form onSubmit={onSubmit} className="hx-form">
          <div className="hx-row-2">
            <div className="hx-field">
              <label>First name</label>
              <input
                className="hx-input"
                placeholder="Phoenix"
                value={first}
                onChange={(e) => setFirst(e.target.value)}
              />
            </div>
            <div className="hx-field">
              <label>Last name</label>
              <input
                className="hx-input"
                placeholder="Doe"
                value={last}
                onChange={(e) => setLast(e.target.value)}
              />
            </div>
          </div>

          <div className="hx-field">
            <label>Username</label>
            <input
              className="hx-input"
              placeholder="3–20, a–z 0–9 _"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="hx-field">
            <label>Email</label>
            <input
              className="hx-input"
              type="email"
              placeholder="you@domain.com"
              value={email}
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="hx-field">
            <label>Password</label>
            <input
              className="hx-input"
              type="password"
              placeholder="••••••••"
              value={pw}
              autoComplete="new-password"
              onChange={(e) => setPw(e.target.value)}
              required
            />
          </div>

          <div className="hx-field">
            <label>Avatar (optional)</label>
            <div className="hx-file-line">
              <input
                className="hx-file"
                type="file"
                accept="image/*"
                onChange={(e) => setAvatarFile(e.target.files?.[0] || null)}
              />
              {avatarFile && (
                <span className="hx-file-name">
                  {avatarFile.name}
                  {upPct > 0 && <em> • {upPct}%</em>}
                </span>
              )}
            </div>
          </div>

          {err && <div className="hx-error">{err}</div>}

          <button type="submit" className="hx-btn" disabled={loading}>
            {loading ? "Creating…" : "Create account"}
          </button>

          <div className="hx-foot-note">
            By creating an account you agree to our community rules.
          </div>
        </form>
      </div>

      {/* subtle grid glow background */}
      <div className="hx-grid-bg" aria-hidden />
    </div>
  );
}
