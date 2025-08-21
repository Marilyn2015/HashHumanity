// FILE: src/pages/RegisterPage.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import {
  ref as dbRef,
  update as dbUpdate,
  runTransaction,
} from "firebase/database";
import {
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { auth, db, storage } from "../firebase/firebaseConfig";
import "./RegisterPage.css"; // (optional) your page-specific tweaks

export default function RegisterPage() {
  const navigate = useNavigate();
  const formRef = useRef(null);

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [file, setFile] = useState(null);

  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [msg, setMsg] = useState("");

  // subtle cipher rows (purely visual; optional)
  const rows = useMemo(() => {
    const HEX = "0123456789ABCDEF";
    const mk = (n) =>
      Array.from({ length: n }, () =>
        Array.from({ length: 48 }, () => HEX[Math.floor(Math.random() * 16)]).join("")
      );
    return mk(18);
  }, []);

  useEffect(() => {
    const onEnter = (e) => {
      if (e.key === "Enter" && !busy) {
        formRef.current?.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
      }
    };
    window.addEventListener("keydown", onEnter);
    return () => window.removeEventListener("keydown", onEnter);
  }, [busy]);

  const usernameOk = (u) => /^[a-z0-9_]{3,20}$/.test(u || "");
  const MAX_AVATAR = 5 * 1024 * 1024; // 5MB

  async function claimUsername(uname, uid) {
    const ref = dbRef(db, `usernames/${uname}`);
    const trx = await runTransaction(ref, (cur) => (cur === null ? uid : cur));
    return trx.snapshot.val() === uid;
  }

  async function uploadAvatarIfAny(uid) {
    if (!file) return "";
    if (file.size > MAX_AVATAR) throw new Error("Avatar must be ≤ 5MB.");
    const ext = (file.name.split(".").pop() || "jpg").toLowerCase();
    const path = `avatars/${uid}/avatar_${Date.now()}.${ext}`;
    const sref = storageRef(storage, path);
    const task = uploadBytesResumable(sref, file, {
      contentType: file.type || "image/jpeg",
      cacheControl: "public,max-age=31536000",
    });
    await new Promise((res, rej) => task.on("state_changed", null, rej, res));
    return await getDownloadURL(sref);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErr(""); setMsg("");

    const uname = username.trim().toLowerCase();
    if (!first.trim() || !last.trim() || !uname || !email.trim() || !pw) {
      setErr("Please fill in all required fields.");
      return;
    }
    if (!usernameOk(uname)) {
      setErr("Username must be 3–20 chars: a–z, 0–9, _");
      return;
    }

    setBusy(true);
    try {
      await setPersistence(auth, browserLocalPersistence);

      // Create auth user
      const cred = await createUserWithEmailAndPassword(auth, email.trim(), pw);
      const uid = cred.user.uid;

      // Claim username (atomic)
      const ok = await claimUsername(uname, uid);
      if (!ok) {
        throw new Error("That username is already taken.");
      }

      // Upload avatar (optional)
      const avatarUrl = await uploadAvatarIfAny(uid);

      // Build displayName
      const displayName = `${first.trim()} ${last.trim()}`.trim();

      // Write profile to RTDB (only validated keys from your rules)
      const updates = {
        [`users/${uid}/displayName`]: displayName,
        [`users/${uid}/username`]: uname,
        ...(avatarUrl ? { [`users/${uid}/avatarUrl`]: avatarUrl, [`users/${uid}/imageUrl`]: avatarUrl } : {}),
        [`users/${uid}/updatedAt`]: Date.now(),
      };
      await dbUpdate(dbRef(db), updates);

      // Reflect in Auth profile
      await updateProfile(cred.user, {
        displayName,
        photoURL: avatarUrl || undefined,
      }).catch(() => {});

      setMsg("Account created!");
      navigate("/universe", { replace: true });
    } catch (e2) {
      const code = e2?.code || "";
      const map = {
        "auth/invalid-email": "That email looks invalid.",
        "auth/email-already-in-use": "That email is already in use.",
        "auth/weak-password": "Password is too weak.",
        "auth/password-does-not-meet-requirements":
          "Password doesn’t meet policy (add a non-alphanumeric character).",
      };
      setErr(map[code] || e2?.message || "Could not create account.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      {/* Universe background (same structure as UniversePage) */}
      <div className="bg-globe" aria-hidden>
        <img src="/humanity-globe-2560%20(1).webp" alt="" loading="eager" decoding="async" />
        <div className="bg-stars" />
        <div className="bg-vignette" />
      </div>

      {/* Optional: faint cipher wall overlay */}
      <div className="register-cipher" aria-hidden>
        {rows.map((r, i) => (
          <div className="row" key={i}>{r}</div>
        ))}
      </div>

      {/* Centered card */}
      <main className="auth-shell">
        <form className="auth-card" ref={formRef} onSubmit={handleSubmit} noValidate>
          <header className="auth-head">
            <div className="brand">#HUMANITY</div>
            <div className="ver">v0.1</div>
          </header>

          <h2 className="auth-title">Create your account</h2>

          <div className="grid-2">
            <label className="field">
              <span>First name</span>
              <input value={first} onChange={(e) => setFirst(e.target.value)} required />
            </label>
            <label className="field">
              <span>Last name</span>
              <input value={last} onChange={(e) => setLast(e.target.value)} required />
            </label>
          </div>

          <label className="field">
            <span>Username</span>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value.toLowerCase())}
              placeholder="3–20, a–z 0–9 _"
              required
            />
          </label>

          <label className="field">
            <span>Email</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>

          <label className="field">
            <span>Password</span>
            <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} required />
            <small className="hint">If your project enforces a policy, include at least one symbol.</small>
          </label>

          <label className="field">
            <span>Avatar (optional)</span>
            <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />
            <small className="hint">Max 5MB</small>
          </label>

          {err ? <div className="alert error">{err}</div> : null}
          {msg ? <div className="alert ok">{msg}</div> : null}

          <div className="actions">
            <button className="btn primary" type="submit" disabled={busy}>
              {busy ? "Creating…" : "Create account"}
            </button>
          </div>
        </form>
      </main>

      {/* Local styles to center + match Universe look */}
      <style>{`
        :root{
          --ink:#EAF0F8;
          --muted:#A7B3C6;
        }
        *{box-sizing:border-box}
        html,body,#root{height:100%}
        body{margin:0;color:var(--ink);font-family:Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Menlo,monospace}

        .auth-shell{
          min-height:100vh; position:relative; z-index:1;
          display:grid; place-items:center; padding: clamp(24px, 4vw, 48px) 16px;
        }
        .auth-card{
          width:min(94vw, 760px);
          padding: 18px;
          border:1px solid rgba(255,255,255,.16);
          background: linear-gradient(180deg, rgba(12,16,26,.92), rgba(8,12,20,.88));
          box-shadow: 0 0 0 1px rgba(96,165,250,.10) inset, 0 30px 80px rgba(0,0,0,.55);
          backdrop-filter: blur(10px) saturate(120%);
        }
        .auth-head{
          display:flex; align-items:center; justify-content:space-between; margin-bottom:.5rem;
          padding-bottom:.6rem; border-bottom:1px solid rgba(255,255,255,.12);
        }
        .brand{ font-weight:900; letter-spacing:.02em }
        .ver{
          font-family: ui-monospace, Menlo, Consolas, monospace;
          font-size:.85rem; color:#9ec1ff;
          padding:.2rem .35rem; border:1px solid rgba(255,255,255,.12);
          background: rgba(12,18,28,.7);
        }
        .auth-title{
          margin:.85rem 0 1rem; font-size:1rem; color:var(--muted); letter-spacing:.03em; text-transform:uppercase;
          border-left: 3px solid #60a5fa; padding-left:.6rem;
        }
        .grid-2{ display:grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        @media (max-width: 640px){ .grid-2{ grid-template-columns: 1fr } }

        .field{ display:flex; flex-direction:column; gap:.35rem; margin:.8rem 0 }
        .field span{ font-size:.82rem; color:#9db6da; letter-spacing:.02em; text-transform:uppercase }
        .field input{
          width:100%; padding:.85rem 1rem; color:var(--ink);
          background: #0B1220; border:1px solid #233049; outline:none;
          transition: border-color .15s ease, box-shadow .2s ease, background .2s ease;
        }
        .field input:focus{
          border-color: #60a5fa;
          box-shadow: 0 0 0 2px rgba(96,165,250,.18);
          background: #0E1626;
        }
        .hint{ font-size: 12px; color:#9db6da }

        .alert{
          margin-top:.8rem; padding:.75rem 1rem; border:1px solid; text-align:center; font-weight:700;
        }
        .alert.error{ border-color: rgba(255,82,82,.45); color:#ffdada; background: rgba(255,82,82,.08) }
        .alert.ok{ border-color: rgba(46,255,180,.38); color:#c8ffe7; background: rgba(46,255,180,.06) }

        .actions{ display:flex; justify-content:flex-end; gap:.6rem; margin-top:1rem }
        .btn{
          padding:.95rem 1.25rem; border:1px solid #233049; color:#EAF0F8; background:#0C1422; font-weight:900; letter-spacing:.02em;
          cursor:pointer; outline:none;
        }
        .btn.primary{ border-color:#2A3A58; background:#122036; }

        /* cipher overlay */
        .register-cipher{
          position:fixed; inset:0; z-index:0; pointer-events:none;
          display:grid; grid-template-rows: repeat(18, 1fr); padding: 2vh 5vw;
          opacity:.10; font-family: ui-monospace, Menlo, Consolas, monospace; font-size: clamp(10px, 1.3vw, 13px);
          line-height: 1.2; color: #9ec1ff;
        }
        .register-cipher .row{ white-space: nowrap; overflow: hidden; }
      `}</style>
    </>
  );
}
