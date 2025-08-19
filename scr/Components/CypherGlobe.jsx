// src/components/LandingPage.jsx
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import CypherGlobe from "./CypherGlobe";

export default function LandingPage() {
  // Build some sample data (swap with your API)
  const connections = useMemo(() => ([
    { from:{ name:"San Francisco", lat:37.7749, lng:-122.4194 }, to:{ name:"Tokyo", lat:35.6895, lng:139.6917 }, value:3 },
    { from:{ name:"New York", lat:40.7128, lng:-74.006 },       to:{ name:"London", lat:51.5074, lng:-0.1278 },  value:5 },
    { from:{ name:"Singapore", lat:1.3521, lng:103.8198 },      to:{ name:"Dubai", lat:25.2048, lng:55.2708 },   value:3 },
    { from:{ name:"São Paulo", lat:-23.5505, lng:-46.6333 },    to:{ name:"Johannesburg", lat:-26.2041, lng:28.0473 }, value:2 },
    { from:{ name:"Mumbai", lat:19.076, lng:72.8777 },          to:{ name:"Lagos", lat:6.5244, lng:3.3792 },     value:4 },
    { from:{ name:"Berlin", lat:52.52, lng:13.405 },            to:{ name:"Toronto", lat:43.6532, lng:-79.3832 }, value:2 },
    { from:{ name:"Nairobi", lat:-1.2921, lng:36.8219 },        to:{ name:"Sydney", lat:-33.8688, lng:151.2093 }, value:3 }
  ]), []);

  const arcs = useMemo(() => connections.map(c => ({
    startLat: c.from.lat, startLng: c.from.lng,
    endLat: c.to.lat, endLng: c.to.lng,
    value: c.value, label: c.from.name + " -> " + c.to.name
  })), [connections]);

  const points = useMemo(() => {
    const map = new Map();
    connections.forEach(c => {
      const a = c.from.lat + "," + c.from.lng;
      const b = c.to.lat + "," + c.to.lng;
      map.set(a, { lat:c.from.lat, lng:c.from.lng, name:c.from.name, count:(map.get(a)?.count||0)+1 });
      map.set(b, { lat:c.to.lat, lng:c.to.lng, name:c.to.name, count:(map.get(b)?.count||0)+1 });
    });
    return Array.from(map.values());
  }, [connections]);

  // Make a few pulsing rings where lots of connections exist
  const rings = points.slice(0, 4).map(p => ({
    lat: p.lat, lng: p.lng, maxR: 8, speed: 2.8, repeat: 1200
  }));

  return (
    <main className="landing">
      <div className="stars" aria-hidden />
      <section className="hero">
        <h1 className="title">#Humanity</h1>
        <p className="tagline">Human-verified social. No bots. No ads. Just people.</p>

        <CypherGlobe points={points} arcs={arcs} rings={rings} className="hero-globe" />

        <div className="cta">
          <Link to="/login" className="btn btn-glass"><span>Log In</span></Link>
          <Link to="/register" className="btn btn-neo"><span>Register</span></Link>
        </div>
      </section>

      <style>{`
        :root{ --bg:#070b12; --ink:#e9eef6; --muted:#a8b3c7; --blue:#2e73ff; }
        *{box-sizing:border-box}
        html,body,#root{height:100%}
        body{margin:0;background:var(--bg);color:var(--ink);font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Inter,Arial}
        .landing{min-height:100vh;display:grid;place-items:center;position:relative;overflow:hidden}
        .stars{ position:absolute; inset:0; pointer-events:none; background:
          radial-gradient(1200px 800px at 50% -10%, rgba(46,115,255,0.15), transparent 60%),
          radial-gradient(900px 600px at -20% 80%, rgba(46,115,255,0.08), transparent 60%),
          radial-gradient(900px 600px at 120% 20%, rgba(0,180,255,0.08), transparent 60%),
          #05070c; }
        .hero{ position:relative; z-index:1; max-width:1100px; width:100%; padding:6rem 1.25rem 3rem; text-align:center; display:grid; gap:1rem; justify-items:center }
        .title{ margin:0; font-weight:800; font-size:clamp(44px,7vw,84px); text-shadow:0 8px 40px rgba(46,115,255,.45) }
        .tagline{ margin:0; color:var(--muted); font-size:clamp(15px,2.1vw,20px) }

        .cta{ display:flex; gap:1rem; margin-top:.8rem; flex-wrap:wrap; justify-content:center }
        .btn{ position:relative; display:inline-grid; place-items:center; padding:1rem 1.6rem; border-radius:16px; font-weight:800; text-decoration:none; cursor:pointer; transition:transform .12s, box-shadow .25s, filter .25s }
        .btn:active{ transform: translateY(1px) scale(.99) }
        .btn-glass{ color: rgba(233,238,246,.85); background: rgba(10,14,22,.6); border:1px solid rgba(255,255,255,.12); backdrop-filter: blur(10px); box-shadow: 0 10px 30px rgba(0,0,0,.45), inset 0 0 0 1px rgba(255,255,255,.05) }
        .btn-glass:hover{ border-color: rgba(255,255,255,.22); box-shadow: 0 16px 44px rgba(0,0,0,.55), 0 0 36px rgba(46,115,255,.25); filter: brightness(1.03) }
        .btn-neo{ color:#fff; border:1px solid rgba(255,255,255,.16); background:
          radial-gradient(120% 140% at 10% 0%, rgba(103,163,255,.55), transparent 60%),
          linear-gradient(90deg, #2e73ff, #46b0ff 60%, #87d5ff);
          box-shadow: 0 16px 44px rgba(46,115,255,.45), 0 0 26px rgba(0,152,255,.35) inset, 0 0 0 1px rgba(255,255,255,.06) inset; }
        .btn-neo:hover{ box-shadow: 0 22px 60px rgba(46,115,255,.55), 0 0 36px rgba(0,152,255,.45) inset; filter: brightness(1.03) }
      `}</style>
    </main>
  );
}
