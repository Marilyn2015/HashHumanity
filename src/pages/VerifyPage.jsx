
// FILE: src/pages/VerifyPage.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function VerifyPage() {
  const ui = {
    page: {
      minHeight: "100vh",
      display: "grid",
      placeItems: "center",
      background: "#05070c",
      color: "#eaf0f8",
      padding: 24,
      fontFamily:
        "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    },
    topRight: {
      position: "fixed",
      top: 14,
      right: 18,
      zIndex: 10,
    },
    linkBtn: {
      display: "inline-block",
      padding: "0.6rem 0.9rem",
      borderRadius: 10,
      border: "1px solid #2A3A58",
      background: "#0C1422",
      color: "#EAF0F8",
      fontWeight: 800,
      letterSpacing: ".02em",
      textDecoration: "none",
      boxShadow: "0 10px 28px rgba(0,0,0,.45)",
    },
    card: {
      width: "min(92vw, 720px)",
      textAlign: "center",
      border: "1px solid #1E2A41",
      background:
        "linear-gradient(180deg, rgba(10,14,22,.96), rgba(7,10,17,.9))",
      boxShadow:
        "0 0 0 1px rgba(46,115,255,.08) inset, 0 30px 80px rgba(0,0,0,.55)",
      borderRadius: 16,
      padding: "18px 18px 16px",
    },
    h1: { margin: "6px 0 4px", fontSize: "clamp(22px, 4.5vw, 30px)", fontWeight: 900 },
    p: { margin: "8px 0", color: "#a4b0c7" },
    highlight: { margin: "10px 0", fontWeight: 800 },
    actions: { display: "flex", gap: 12, marginTop: 16, justifyContent: "center", flexWrap: "wrap" },
    btn: {
      display: "inline-block",
      padding: "0.85rem 1.2rem",
      borderRadius: 10,
      border: "1px solid #2A3A58",
      background: "#122036",
      color: "#EAF0F8",
      fontWeight: 800,
      letterSpacing: ".02em",
      textDecoration: "none",
      boxShadow: "0 10px 28px rgba(0,0,0,.45)",
    },
    btnGhost: { background: "transparent", border: "1px solid #314562" },
    sub: { marginTop: 10, fontSize: 12, color: "#9bb5db" },
    footer: { marginTop: 14, opacity: 0.9 },
  };

  return (
    <main style={ui.page}>
      {/* Top-right Universe link */}
      <div style={ui.topRight}>
        <Link to="/universe" style={ui.linkBtn}>Universe</Link>
      </div>

      <section style={ui.card}>
        <h1 style={ui.h1}>Proof of Person</h1>
        <p style={ui.p}>
          In the age of Artificial Intelligence, it’s more important than ever to
          know who is human. Bots, fake accounts, and duplicate identities
          threaten the integrity of online communities.
        </p>
        <p style={ui.p}>
          <strong>World ID</strong> is a system designed to keep out bots and
          ensure every user is a unique human being. By verifying your humanity,
          you help build a trusted space where real people can connect,
          communicate, and share freely.
        </p>
        <p style={{ ...ui.p, ...ui.highlight }}>
          #HUMANITY was built with this principle in mind — protecting our
          platform from automation abuse, preserving authenticity, and ensuring a
          human experience.
        </p>

        <div style={ui.actions}>
          <a
            href="https://worldcoin.org/world-id"
            target="_blank"
            rel="noopener noreferrer"
            style={ui.btn}
          >
            Open World ID
          </a>
          <a
            href="https://worldcoin.org/download"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...ui.btn, ...ui.btnGhost }}
          >
            Get World App
          </a>
        </div>
        <div style={ui.sub}>You’ll complete verification in World App.</div>

        <div style={ui.footer}>Together, we keep the internet human.</div>
      </section>
    </main>
  );
}
