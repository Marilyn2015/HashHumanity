// FILE: src/pages/VerifyPage.jsx
import React from "react";
import "./VerifyPage.css";

export default function VerifyPage() {
  return (
    <div className="verify-container">
      <div className="verify-card">
        <h1 className="verify-title">Proof of Person</h1>
        <p className="verify-text">
          In the age of Artificial Intelligence, it’s more important than ever to
          know who is human. Bots, fake accounts, and duplicate identities
          threaten the integrity of online communities.
        </p>
        <p className="verify-text">
          <strong>World ID</strong> is a system designed to keep out bots and
          ensure every user is a unique human being. By verifying your humanity,
          you help build a trusted space where real people can connect,
          communicate, and share freely.
        </p>
        <p className="verify-highlight">
          #HUMANITY was built with this principle in mind — protecting our
          platform from automation abuse, preserving authenticity, and ensuring a
          human experience.
        </p>
        <div className="verify-footer">Together, we keep the internet human.</div>
      </div>
    </div>
  );
}