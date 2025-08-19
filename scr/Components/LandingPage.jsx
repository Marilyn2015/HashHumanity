
import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <main className="landing">
      {/* background */}
      <div className="stars" aria-hidden />
      <div className="aura aura-1" aria-hidden />
      <div className="aura aura-2" aria-hidden />

      <section className="hero">
        <h1 className="title">
          <span className="title-fill">#Humanity</span>
        </h1>

        <p className="tagline">
          Human-verified social. No bots. No ads. No extra shit.
        </p>

        {/* verification pills */}
        <div className="pills" role="list">
          <span className="pill" role="listitem">
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9.5 16.2 5.8 12.5l1.4-1.4 2.3 2.3 5.3-5.3 1.4 1.4z"/></svg>
            Human-verified
          </span>
          <span className="pill" role="listitem">
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3zm0 18c-3.3-1.2-6-4.7-6-9V6.3l6-2.2 6 2.2V11c0 4.3-2.7 7.8-6 9z"/></svg>
            Proof-of-personhood
          </span>
          <span className="pill" role="listitem">
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h12v2H3v-2z"/></svg>
            No ads / No bots
          </span>
        </div>

        {/* globe */}
        <div className="globe-wrap">
          <picture aria-hidden="true">
            <source srcSet="/humanity-globe-2560.webp" media="(min-width:2000px)" type="image/webp" />
            <source srcSet="/humanity-globe-1920.webp" media="(min-width:1280px)" type="image/webp" />
            <img className="globe" src="/humanity-globe-1280.webp" alt="" role="presentation" aria-hidden="true" />
          </picture>

          {/* orbit lines overlay */}
          <svg className="orbits" viewBox="0 0 100 100" aria-hidden="true">
            <g fill="none" stroke="currentColor" opacity="0.35" strokeWidth="0.3">
              <ellipse cx="50" cy="50" rx="44" ry="22" className="orbit" />
              <ellipse cx="50" cy="50" rx="36" ry="18" className="orbit" transform="rotate(20 50 50)" />
              <ellipse cx="50" cy="50" rx="30" ry="14" className="orbit" transform="rotate(-18 50 50)" />
            </g>
          </svg>

          <div className="vignette" aria-hidden />
        </div>

        {/* calls to action */}
        <div className="cta">
          <Link to="/login" className="btn btn-dark glow">Log In</Link>
          <Link to="/register" className="btn btn-primary glow">Register</Link>
        </div>

        {/* scroll cue */}
        <div className="scroll-cue" aria-hidden>
          <span className="chev" />
        </div>

        <footer className="foot">
          <div className="foot-title">Human Proof of Identity</div>
          <nav className="foot-links">
            <a href="#about">About</a>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </nav>
        </footer>
      </section>

      {/* styles */}
      <style>{`
        :root{
          --bg:#05070c;
          --ink:#eaf0f8;
          --muted:#a4b0c7;
          --blue:#2e73ff;
          --btn-glow: rgba(46,115,255,.55);
        }
        *{box-sizing:border-box}
        html, body, #root { height:100% }
        body { margin:0; background:var(--bg); color:var(--ink); font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial }
        .landing{ position:relative; min-height:100vh; display:grid; place-items:center; overflow:hidden }

        /* Stars: two layers drifting + twinkling + occasional shooting star */
        .stars{ position:absolute; inset:0; pointer-events:none; background: var(--bg) }
        .stars::before, .stars::after{
          content:""; position:absolute; inset:-10%;
          background-image:
            radial-gradient(1.5px 1.5px at 7% 12%, rgba(255,255,255,.95) 60%, transparent 61%),
            radial-gradient(1px 1px at 18% 40%, rgba(255,255,255,.7) 60%, transparent 61%),
            radial-gradient(1.2px 1.2px at 33% 20%, rgba(255,255,255,.8) 60%, transparent 61%),
            radial-gradient(1px 1px at 42% 72%, rgba(255,255,255,.6) 60%, transparent 61%),
            radial-gradient(1.4px 1.4px at 60% 55%, rgba(255,255,255,.8) 60%, transparent 61%),
            radial-gradient(1px 1px at 76% 18%, rgba(255,255,255,.7) 60%, transparent 61%),
            radial-gradient(1.5px 1.5px at 88% 66%, rgba(255,255,255,.9) 60%, transparent 61%),
            radial-gradient(1px 1px at 95% 82%, rgba(255,255,255,.6) 60%, transparent 61%);
          animation: drift 140s linear infinite, twinkle 6s ease-in-out infinite alternate;
          opacity:.9;
        }
        .stars::after{
          filter: blur(.6px);
          opacity:.55;
          animation-duration: 200s, 8s;
        }
        /* shooting star */
        .stars::marker { content:"" } /* keep validators calm */
        .stars span { display:none }   /* not used; placeholder */
        .stars::before {
          mask:
            linear-gradient(90deg, transparent 0 70%, #000 70% 100%);
        }
        .stars::after{
          --shoot-x: 110%;
          --shoot-y: -10%;
        }
        .stars::after:where(:not(:empty)){} /* no-op for specificity */

        /* subtle aurora glows */
        .aura{ position:absolute; inset:auto; width:140vmax; height:140vmax; border-radius:50%; filter:blur(120px); opacity:.18; pointer-events:none; }
        .aura-1{ top:-70vmax; left:50%; transform:translateX(-50%); background:radial-gradient(circle at 50% 50%, rgba(46,115,255,.6), transparent 60%) }
        .aura-2{ bottom:-80vmax; left:-40vmax; background:radial-gradient(circle at 40% 60%, rgba(0,180,255,.45), transparent 60%) }

        /* header */
        .hero{ position:relative; z-index:1; width:100%; max-width:1100px; padding:6rem 1rem 3rem; display:flex; flex-direction:column; align-items:center; text-align:center; gap:1rem }
        .title{ margin:0; line-height:.98 }
        .title-fill{
          font-weight:900; letter-spacing:.01em; display:inline-block;
          font-size: clamp(52px, 9vw, 98px);
          background: linear-gradient(92deg, #fff, #9ec1ff, #7ab0ff, #fff);
          background-size: 200% 100%;
          -webkit-background-clip: text; background-clip: text; color: transparent;
          text-shadow: 0 8px 40px rgba(46,115,255,.35), 0 2px 0 rgba(0,0,0,.3);
          animation: sheen 8s ease-in-out infinite;
        }
        @keyframes sheen { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }

        .tagline{ margin:0; font-size: clamp(16px, 2.2vw, 22px); color:var(--muted); text-shadow: 0 2px 14px rgba(0,0,0,.5) }

        /* pills */
        .pills{ display:flex; gap:.6rem; flex-wrap:wrap; justify-content:center; margin-top:.25rem }
        .pill{
          display:inline-flex; align-items:center; gap:.45rem;
          padding:.5rem .8rem; border-radius:999px;
          background: rgba(14,18,28,.55); border:1px solid rgba(255,255,255,.12);
          color: #cfe1ff; font-weight:700; font-size:.92rem; letter-spacing:.01em;
          box-shadow: inset 0 0 0 1px rgba(46,115,255,.12), 0 6px 20px rgba(0,0,0,.25);
          backdrop-filter: blur(6px);
        }
        .pill svg{ opacity:.9 }

        /* globe + orbits */
        .globe-wrap{ position:relative; width:min(92vw, 900px); margin-top:.35rem }
        .globe{
          width:100%; height:auto; display:block; user-select:none;
          filter: drop-shadow(0 28px 68px rgba(14, 34, 66, .55))
                  drop-shadow(0 18px 40px rgba(46,115,255,.28));
          animation: float 14s ease-in-out infinite;
        }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }

        .orbits{
          position:absolute; inset:0; width:100%; height:100%; color:#7fb2ff;
          mix-blend-mode:screen; pointer-events:none;
        }
        .orbit{
          stroke-dasharray: 3 2;
          animation: dash 9s linear infinite;
        }
        .orbit:nth-child(2){ animation-duration: 11s; opacity:.4 }
        .orbit:nth-child(3){ animation-duration: 13s; opacity:.35 }
        @keyframes dash { to { stroke-dashoffset: -50 } }

        .vignette{
          position:absolute; inset:0; pointer-events:none;
          background: radial-gradient(ellipse at 50% 55%, rgba(0,0,0,0) 40%, rgba(0,0,0,.22) 72%, rgba(0,0,0,.36) 100%);
          mix-blend-mode:multiply;
        }

        /* buttons */
        .cta{ display:flex; gap:1rem; flex-wrap:wrap; justify-content:center; margin-top:.65rem }
        .btn{
          padding: .95rem 1.5rem; border-radius:14px; font-weight:800; letter-spacing:.02em;
          text-decoration:none; border:1px solid rgba(255,255,255,.1);
          backdrop-filter: blur(6px);
          transition: transform .12s ease, box-shadow .25s ease, background .2s ease, border-color .2s ease, filter .25s ease;
          will-change: transform, box-shadow, filter;
          outline: none;
        }
        .btn:focus-visible{ box-shadow: 0 0 0 4px rgba(46,115,255,.35) }
        .btn:active{ transform: translateY(1px) }

        .glow{
          box-shadow:
            0 0 0 0 var(--btn-glow),
            0 10px 30px rgba(0,0,0,.35);
          filter: drop-shadow(0 6px 16px rgba(46,115,255,.25));
        }
        .glow:hover{
          box-shadow:
            0 0 18px 6px var(--btn-glow),
            0 16px 34px rgba(0,0,0,.45);
          filter: drop-shadow(0 10px 28px rgba(46,115,255,.35));
        }

        .btn-dark{ background: rgba(12,16,26,.65); color: rgba(234,240,248, .92) }
        .btn-dark:hover{ background: rgba(22,28,42,.78); border-color: rgba(255,255,255,.18) }
        .btn-primary{ background: var(--blue); color:#fff; border-color: rgba(255,255,255,.18); text-shadow: 0 1px 0 rgba(0,0,0,.25) }
        .btn-primary:hover{ background: #3a7dff }

        /* scroll cue */
        .scroll-cue{ margin-top:.1rem; height:28px; display:grid; place-items:center; opacity:.75 }
        .chev{
          width: 10px; height: 10px; border-bottom:2px solid #7fb2ff; border-right:2px solid #7fb2ff;
          transform: rotate(45deg); display:block;
          animation: bob 2.6s ease-in-out infinite;
        }
        @keyframes bob { 0%,100%{transform: translateY(0) rotate(45deg)} 50%{transform: translateY(6px) rotate(45deg)} }

        /* footer */
        .foot{ margin-top:1.2rem; display:flex; flex-direction:column; align-items:center; gap:.45rem; opacity:.95 }
        .foot-title{ color:var(--muted); font-size:14px; letter-spacing:.02em }
        .foot-links{ display:flex; gap:1rem }
        .foot-links a{ color:var(--muted); text-decoration:none; font-size:14px }
        .foot-links a:hover{ color:var(--ink) }

        /* reduced motion */
        @media (prefers-reduced-motion: reduce){
          .title-fill, .stars::before, .stars::after, .globe, .orbit, .chev { animation: none !important }
        }
      `}</style>
    </main>
  );
}

