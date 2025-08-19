

import React, { useEffect, useRef, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export default function LoginPage() {
  const navigate = useNavigate();
  const formRef = useRef(null);

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [msg, setMsg] = useState("");

  // lightweight “cipher wall” lines
  const rows = useMemo(() => {
    const HEX = "0123456789ABCDEF";
    const mk = (n) =>
      Array.from({ length: n }, () =>
        Array.from({ length: 48 }, () => HEX[Math.floor(Math.random() * 16)]).join("")
      );
    return mk(24);
  }, []);

  useEffect(() => {
    function handler(e) {
      if (e.key === "Enter" && !busy) {
        formRef.current?.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
      }
    }
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [busy]);

  async function handleLogin(e) {
    e.preventDefault();
    setErr(""); setMsg("");
    if (!email.trim() || !pw) { setErr("Email and password are required."); return; }
    setBusy(true);
    try {
      // Persist session across tabs/reloads
      await setPersistence(auth, browserLocalPersistence);

      // Sign in
      const cred = await signInWithEmailAndPassword(auth, email.trim(), pw);

      // 🔒 Patch: force-refresh the ID token to avoid stale identity after switching accounts.
      await cred.user.getIdToken(true); // force refresh
      const token = await cred.user.getIdToken(); // fresh token now

      // Optional: if you use a custom API client, set the auth header immediately.
      // api.setAuthToken?.(token);

      // Optional: clear any local caches that might contain another user's profile.
      // localStorage.removeItem("profileCache");
      // localStorage.removeItem("lastUserId");
      // If using React Query: queryClient.clear();
      // If using SWR: import { mutate } from "swr"; mutate(() => true, undefined, { revalidate: false });

      // Navigate with replace to prevent back-nav to the login form
      navigate("/universe", { replace: true });
    } catch (e2) {
      const code = e2?.code || "unknown";
      const map = {
        "auth/invalid-email": "That email looks invalid.",
        "auth/user-disabled": "This account is disabled.",
        "auth/user-not-found": "No account found with that email.",
        "auth/wrong-password": "Wrong password.",
        "auth/too-many-requests": "Too many attempts. Try later.",
      };
      setErr(map[code] || `Login failed: ${code}`);
    } finally { setBusy(false); }
  }

  async function handleForgot() {
    setErr(""); setMsg("");
    if (!email.trim()) { setErr("Type your email first, then hit ‘Forgot password’."); return; }
    try {
      await sendPasswordResetEmail(auth, email.trim());
      setMsg("Reset link sent. Check your inbox (and spam).");
    } catch (e2) {
      const code = e2?.code || "unknown";
      const map = {
        "auth/invalid-email": "That email looks invalid.",
        "auth/user-not-found": "No account found with that email.",
      };
      setErr(map[code] || `Couldn’t send reset email: ${code}`);
    }
  }

  return (
    <main className="login-wrap">
      {/* LAYER 1: square grid */}
      <div className="grid-bg" aria-hidden />

      {/* LAYER 2: geometric SVG (squares + connectors) */}
      <svg className="geo" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
        <g stroke="rgba(120,170,255,.35)" strokeWidth="0.6" fill="none" strokeLinecap="square" strokeLinejoin="miter">
          {/* connector lines */}
          <path className="dash" d="M10 18H30V38H50V58H70V78H90" />
          <path className="dash" d="M18 90V70H38V50H58V30H78V10" />
          {/* square modules */}
          <rect x="12" y="12" width="14" height="14" />
          <rect x="32" y="32" width="14" height="14" />
          <rect x="52" y="52" width="14" height="14" />
          <rect x="72" y="72" width="14" height="14" />
          <rect x="72" y="12" width="14" height="14" />
          <rect x="12" y="72" width="14" height="14" />
        </g>
        {/* accent squares */}
        <g stroke="rgba(60,200,255,.7)" strokeWidth="0.4" fill="none">
          <rect className="pulse" x="44" y="20" width="8" height="8" />
          <rect className="pulse" x="20" y="44" width="8" height="8" />
          <rect className="pulse" x="68" y="44" width="8" height="8" />
        </g>
      </svg>

      {/* LAYER 3: subtle cipher wall (hex) */}
      <div className="cipher" aria-hidden>
        {rows.map((r, i) => (
          <div className="row" key={i}>{r}</div>
        ))}
      </div>

      {/* CARD */}
      <form className="card" ref={formRef} onSubmit={handleLogin} noValidate>
        <header className="header">
          <div className="logo">#Humanity</div>
          <div className="ver">v0.1</div>
        </header>

        <h2 className="title">Log in</h2>

        <label className="field">
          <span>Email</span>
          <input
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            inputMode="email"
          />
        </label>

        <label className="field">
          <span>Password</span>
          <input
            type="password"
            autoComplete="current-password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            required
          />
        </label>

        <div className="row-actions">
          <button type="button" className="link" onClick={handleForgot}>
            Forgot password?
          </button>
        </div>

        {err ? <div className="alert error">{err}</div> : null}
        {msg ? <div className="alert ok">{msg}</div> : null}

        <div className="actions">
          <button className="btn primary glow" type="submit" disabled={busy}>
            {busy ? "Signing in…" : "Log In"}
          </button>
        </div>
      </form>

      <style>{`
        :root{
          --bg:#06080E;
          --ink:#EAF0F8;
          --muted:#A7B3C6;
          --line:#1C2738;
          --grid:#0E1624;
          --accent:#2E73FF;
          --accent-2:#28D7FF;
        }
        *{box-sizing:border-box}
        html,body,#root{height:100%}
        body{margin:0;background:var(--bg);color:var(--ink);font-family:Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Menlo,monospace}

        .login-wrap{
          position:relative; min-height:100vh; overflow:hidden;
          display:grid; place-items:center; padding: clamp(2rem, 4vw, 4rem) 1rem;
          background: var(--bg);
        }

        /* Layer 1: square grid (no rounded corners, pure right angles) */
        .grid-bg{
          position:absolute; inset:-2px; z-index:0; pointer-events:none;
          background:
            repeating-linear-gradient(to right, var(--grid) 0 1px, transparent 1px 40px),
            repeating-linear-gradient(to bottom, var(--grid) 0 1px, transparent 1px 40px),
            linear-gradient(#05070C, #05070C);
        }
        /* faint scanline sweep for a “lab display” feel */
        .grid-bg::after{
          content:""; position:absolute; inset:0; pointer-events:none;
          background: linear-gradient(90deg, transparent 0%, rgba(40,215,255,.065) 48%, transparent 100%);
          mix-blend-mode: screen;
          animation: sweep 8s linear infinite;
        }
        @keyframes sweep { from { transform: translateX(-100%) } to { transform: translateX(100%) } }

        /* Layer 2: geometry SVG (squares + connectors) */
        .geo{
          position:absolute; inset:0; z-index:0; pointer-events:none;
          opacity:.55;
        }
        .dash{ stroke-dasharray: 2 2; animation: dash 16s linear infinite; }
        @keyframes dash { to { stroke-dashoffset: -200 } }
        .pulse{ animation: pulse 3.6s ease-in-out infinite }
        @keyframes pulse {
          0%,100% { opacity:.25 }
          50% { opacity:.85 }
        }

        /* Layer 3: cipher wall (hard-edged monospace hex, square layout) */
        .cipher{
          position:absolute; inset:0; z-index:0; pointer-events:none;
          display:grid; grid-template-rows: repeat(24, 1fr); padding: 2vh 5vw;
          opacity:.12; font-family: ui-monospace, Menlo, Consolas, monospace; font-size: clamp(10px, 1.6vw, 14px);
          line-height: 1.2;
          color: #7FB2FF;
        }
        .cipher .row{
          white-space: nowrap; overflow: hidden; text-overflow: clip;
        }

        /* CARD — all sharp edges (no border-radius) */
        .card{
          position:relative; z-index:1; width:min(92vw, 480px);
          padding: 1.6rem; border:1px solid #1E2A41; background:
            linear-gradient(180deg, rgba(10,14,22,.92), rgba(7,10,17,.85));
          box-shadow:
            0 0 0 1px rgba(46,115,255,.10) inset,
            0 30px 80px rgba(0,0,0,.55);
          backdrop-filter: blur(10px) saturate(120%);
        }
        .card, .btn, .field input, .link, .actions, .row-actions { border-radius: 0 !important; } /* enforce sharp edges */

        .header{
          display:flex; justify-content:space-between; align-items:center; margin-bottom:.25rem;
          border-bottom: 1px solid #1E2A41; padding-bottom:.6rem;
        }
        .logo{
          font-weight:900; letter-spacing:.02em; text-transform:none;
          color:#EAF0F8;
        }
        .ver{
          font-family: ui-monospace, Menlo, Consolas, monospace;
          font-size:.85rem; color:#7FB2FF;
          padding:.2rem .3rem; border:1px solid #1E2A41;
          background: rgba(12,18,28,.7);
        }
        .title{
          margin:.9rem 0 1rem; font-size:1.05rem; color:var(--muted); letter-spacing:.03em; text-transform:uppercase;
          border-left: 3px solid var(--accent); padding-left:.6rem;
        }

        .field{ display:flex; flex-direction:column; gap:.35rem; margin:.8rem 0 }
        .field span{ font-size:.82rem; color:#9db6da; letter-spacing:.02em; text-transform:uppercase }
        .field input{
          width:100%; padding:.85rem 1rem; color:var(--ink);
          background: #0B1220; border:1px solid #233049; outline:none;
          box-shadow: 0 0 0 0 rgba(46,115,255,0);
          transition: border-color .15s ease, box-shadow .2s ease, background .2s ease;
        }
        .field input:focus{
          border-color: var(--accent);
          box-shadow: 0 0 0 2px rgba(46,115,255,.18);
          background: #0E1626;
        }

        .row-actions{ display:flex; justify-content:flex-end; margin-top:.2rem }
        .link{
          background:none; border:1px solid #233049; color:#9ec1ff; padding:.5rem .7rem; font-weight:700;
          text-decoration:none; cursor:pointer; user-select:none;
          transition: border-color .15s ease, color .15s ease, background .15s ease, box-shadow .2s ease;
        }
        .link:hover{ border-color:#2A3A58; color:#cfe1ff; background:#0E1626 }

        .alert{
          margin-top:.8rem; padding:.75rem 1rem; border:1px solid; text-align:center; font-weight:700;
        }
        .alert.error{ border-color: rgba(255,82,82,.45); color:#ffdada; background: rgba(255,82,82,.08) }
        .alert.ok{ border-color: rgba(46,255,180,.38); color:#c8ffe7; background: rgba(46,255,180,.06) }

        .actions{ display:flex; justify-content:flex-end; gap:.6rem; margin-top:1rem }
        .btn{
          padding:.95rem 1.25rem; border:1px solid #233049; color:#EAF0F8; background:#0C1422; font-weight:900; letter-spacing:.02em;
          cursor:pointer; outline:none;
          transition: transform .08s ease, box-shadow .22s ease, border-color .15s ease, background .15s ease, filter .22s ease;
          position:relative;
        }
        .btn:active{ transform: translateY(1px) }
        .btn.primary{
          border-color:#2A3A58; background:#122036;
        }
        .glow{
          box-shadow:
            0 0 0 0 rgba(46,115,255,.0),
            0 10px 28px rgba(0,0,0,.45);
        }
        .glow:hover{
          box-shadow:
            0 0 0 2px rgba(46,115,255,.45),
            0 18px 40px rgba(0,0,0,.55);
          filter: drop-shadow(0 0 12px rgba(40,215,255,.12));
          background:#142844;
          border-color:#33507A;
        }

        /* Motion safety */
        @media (prefers-reduced-motion: reduce){
          .grid-bg::after, .dash, .pulse { animation:none !important }
        }
      `}</style>
    </main>
  );
}
