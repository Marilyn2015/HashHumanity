// FILE: src/pages/SettingsPage.jsx
import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  onAuthStateChanged,
  sendPasswordResetEmail,
  signOut,
  deleteUser,
} from "firebase/auth";
import {
  ref as dbRef,
  get,
  update as dbUpdate,
  remove,
} from "firebase/database";
import { auth, db } from "../firebase/firebaseConfig";
import "./UniversePage.css";

/* ===== helpers kept consistent with Universe ===== */
const safeDisplayName = (s) => {
  const v = (s || "").toString().trim();
  return !v || /^user$/i.test(v) ? "" : v;
};
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
          email: u.email || "",
        });
      } catch {
        setMe({
          uid: u.uid,
          displayName: u.email ? u.email.split("@")[0] : "",
          username: u.email ? u.email.split("@")[0] : "",
          avatarUrl: u.photoURL || "",
          email: u.email || "",
        });
      }
    });
    return () => unsub();
  }, []);
  return { authUser, me };
}

/* ===== tiny toast ===== */
function useToasts() {
  const [toasts, setToasts] = useState([]);
  const push = useCallback((msg) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((t) => [...t, { id, msg }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 4200);
  }, []);
  return { toasts, push };
}
const Toasts = ({ list }) => (
  <div className="toastWrap">{list.map((t) => <div key={t.id} className="toast">{t.msg}</div>)}</div>
);

/* ===== header visuals reused ===== */
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
function Header() {
  const navigate = useNavigate();
  const { authUser, me } = useMe();
  const avatarStyle = {
    width: 34, height: 34, borderRadius: "50%", objectFit: "cover", objectPosition: "center 20%",
    border: "1px solid var(--line)", boxShadow: "var(--glowSoft)", cursor: "pointer",
  };
  return (
    <header className="header">
      <div className="headerWrap">
        <button className="brand" onClick={() => navigate("/universe")} title="Back to Universe">
          <span className="brandIcon"><HumanityMark /></span>
          <span className="brandText">HUMANITY</span>
        </button>
        <div style={{ flex: 1 }} />
        {authUser && (
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {me?.avatarUrl
              ? <img src={me.avatarUrl} alt="" style={avatarStyle} onClick={() => me && navigate(`/profile/${me.uid}`)} />
              : <div className="avatarFallback" style={{ ...avatarStyle, display: "grid", placeItems: "center" }}
                  onClick={() => me && navigate(`/profile/${me.uid}`)}>👤</div>}
            <button className="btn" onClick={async () => { await signOut(auth); navigate("/login"); }}>Log out</button>
          </div>
        )}
      </div>
    </header>
  );
}

/* ===== Page ===== */
export default function SettingsPage() {
  const navigate = useNavigate();
  const { authUser, me } = useMe();
  const { toasts, push } = useToasts();

  // prefs live under userState/{uid}/prefs
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // UI state (read-only account summary)
  const [email, setEmail] = useState("");
  const [display, setDisplay] = useState("");
  const [username, setUsername] = useState("");

  // notification prefs
  const [pushNewFollowers, setPushNewFollowers] = useState(true);
  const [pushNewMessages, setPushNewMessages] = useState(true);
  const [dmFromEveryone, setDmFromEveryone] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(false);

  useEffect(() => {
    if (!me?.uid) return;
    setEmail(me.email || "");
    setDisplay(safeDisplayName(me.displayName) || me.username || "");
    setUsername(me.username || "");

    (async () => {
      try {
        const s = await get(dbRef(db, `userState/${me.uid}/prefs`));
        const pv = s.exists() ? s.val() : {};
        setPushNewFollowers(pv.pushNewFollowers ?? true);
        setPushNewMessages(pv.pushNewMessages ?? true);
        setDmFromEveryone(pv.dmFromEveryone ?? true);
        setEmailUpdates(pv.emailUpdates ?? false);
      } catch {
        // defaults are fine
      } finally {
        setLoading(false);
      }
    })();
  }, [me?.uid, me?.email, me?.displayName, me?.username]);

  // Save prefs (must be owner-write in rules)
  const save = async () => {
    if (!authUser?.uid || !me?.uid) { push("Sign in first."); return; }
    setSaving(true);
    try {
      await dbUpdate(dbRef(db, `userState/${me.uid}/prefs`), {
        pushNewFollowers: !!pushNewFollowers,
        pushNewMessages: !!pushNewMessages,
        dmFromEveryone: !!dmFromEveryone,
        emailUpdates: !!emailUpdates,
      });
      await dbUpdate(dbRef(db, `userState/${me.uid}`), { updatedAt: Date.now() });
      push("Settings saved");
    } catch (e) {
      console.error("save prefs error", e);
      push(e?.message || "Save failed (check rules for userState)");
    } finally {
      setSaving(false);
    }
  };

  const clearBadges = async () => {
    if (!me?.uid) return;
    try {
      const now = Date.now();
      await dbUpdate(dbRef(db, `userState/${me.uid}`), {
        lastSeenFollowers: now,
        lastSeenMessages: now,
      });
      push("Badges cleared");
    } catch (e) {
      console.error("clear badges error", e);
      push(e?.message || "Could not clear badges");
    }
  };

  const sendReset = async () => {
    try {
      if (!email) return push("No email on file.");
      await sendPasswordResetEmail(auth, email);
      push("Password reset email sent");
    } catch (e) {
      push(e?.message || "Reset failed");
    }
  };

  // ---- Delete account (profile) ----
  const deleteAccount = async () => {
    if (!auth.currentUser || !me?.uid) { push("No user signed in."); return; }
    const ok = window.confirm(
      "⚠️ This will permanently delete your profile, preferences, posts, and your following list. Continue?"
    );
    if (!ok) return;

    try {
      const uid = me.uid;

      // 1) Remove profile + prefs
      await Promise.all([
        remove(dbRef(db, `users/${uid}`)),
        remove(dbRef(db, `userState/${uid}`)),
      ]);

      // 2) Remove following and mirror follower entries you own
      const followingSnap = await get(dbRef(db, `following/${uid}`));
      if (followingSnap.exists()) {
        const ops = [];
        followingSnap.forEach((ch) => {
          const targetUid = ch.key; // you follow them
          // remove your following flag
          ops.push(remove(dbRef(db, `following/${uid}/${targetUid}`)));
          // remove your owned follower entry on their node
          ops.push(remove(dbRef(db, `followers/${targetUid}/${uid}`)));
        });
        await Promise.all(ops);
      }
      // Remove your followers node (you don't own children created by others; this just removes container if you had any you created—usually none)
      await remove(dbRef(db, `followers/${uid}`)).catch(() => {});

      // 3) Remove your posts (from userPosts/{uid})
      const postsSnap = await get(dbRef(db, `userPosts/${uid}`));
      if (postsSnap.exists()) {
        const ops = [];
        postsSnap.forEach((ch) => {
          const postId = ch.key;
          ops.push(remove(dbRef(db, `posts/${postId}`)));
          ops.push(remove(dbRef(db, `userPosts/${uid}/${postId}`)));
          // comments/likes cleanup for other users is restricted by rules; leaving harmless orphans is acceptable
        });
        await Promise.all(ops);
      }
      await remove(dbRef(db, `userPosts/${uid}`)).catch(() => {});

      // 4) Delete auth account (may require recent login)
      await deleteUser(auth.currentUser);

      push("Account deleted");
      navigate("/register");
    } catch (e) {
      console.error("deleteAccount error", e);
      // Most common: auth/requires-recent-login
      push(e?.message || "Failed to delete account (you may need to re-authenticate).");
    }
  };

  const GLOBE_URL = "/humanity-globe-2560%20(1).webp";
  const fld = { display: "grid", gap: 6 };
  const input = {
    background: "var(--panel)", border: "1px solid var(--line)", color: "#eaf2ff",
    padding: "10px 12px", borderRadius: 10, outline: "none",
  };
  const sectionTitle = { fontWeight: 900, letterSpacing: 0.4, marginBottom: 10 };
  const row = { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "10px 0" };

  return (
    <>
      {/* Background stack */}
      <div className="bg-globe" aria-hidden>
        <img src={GLOBE_URL} alt="" loading="eager" decoding="async" fetchpriority="high" />
        <div className="bg-stars" />
        <div className="bg-vignette" />
      </div>

      <Header />
      <div className="heroSpacer" />
      <Toasts list={toasts} />

      <div className="shell">
        <div className="grid">
          {/* LEFT NAV to match the site */}
          <aside className="panel nav">
            <div className="item" onClick={() => navigate("/universe")}>Universe</div>
            <div className="item" onClick={() => me && navigate(`/profile/${me.uid}`)}>Profile</div>
            <div className="item" onClick={() => navigate("/messages")}>Messages</div>
            <div className="item" onClick={() => navigate("/notifications")}>Notifications</div>
            <div className="item" onClick={() => navigate("/verify")}>Verify</div>
            <div className="item">Settings</div>
          </aside>

          {/* SETTINGS CONTENT */}
          <main className="feedCol">
            <section className="card" style={{ padding: 18 }}>
              <h2 style={{ margin: 0 }}>Settings</h2>
              {loading && <div style={{ opacity: 0.8, marginTop: 8 }}>Loading…</div>}
            </section>

            {/* Account summary (read-only here) */}
            <section className="card" style={{ padding: 18 }}>
              <div style={sectionTitle}>Account</div>
              <div style={{ display: "grid", gap: 12 }}>
                <label style={fld}>
                  <span>Email</span>
                  <input style={input} value={email} disabled />
                </label>
                <label style={fld}>
                  <span>Display name</span>
                  <input style={input} value={display} disabled title="Edit on your Profile page" />
                </label>
                <label style={fld}>
                  <span>Username</span>
                  <input style={input} value={username} disabled title="Edit on your Profile page" />
                </label>
                <div style={{ display: "flex", gap: 10, marginTop: 6, flexWrap: "wrap" }}>
                  <button className="btn" onClick={() => me && navigate(`/profile/${me.uid}`)}>Edit Profile</button>
                  <button className="btn" onClick={sendReset}>Send password reset</button>
                  {/* Removed “Log out” here as requested */}
                </div>
              </div>
            </section>

            {/* Notifications */}
            <section className="card" style={{ padding: 18 }}>
              <div style={sectionTitle}>Notifications</div>
              <div style={{ ...row, borderTop: "1px dashed var(--line)" }}>
                <div>
                  <div style={{ fontWeight: 800 }}>New followers</div>
                  <div style={{ opacity: 0.75, fontSize: 13 }}>Show alerts/badges when someone follows you.</div>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={pushNewFollowers}
                    onChange={(e) => setPushNewFollowers(e.target.checked)}
                  />
                  <span className="slider" />
                </label>
              </div>
              <div style={{ ...row, borderTop: "1px dashed var(--line)" }}>
                <div>
                  <div style={{ fontWeight: 800 }}>New messages</div>
                  <div style={{ opacity: 0.75, fontSize: 13 }}>Badges for unread direct messages.</div>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={pushNewMessages}
                    onChange={(e) => setPushNewMessages(e.target.checked)}
                  />
                  <span className="slider" />
                </label>
              </div>
              <div style={{ ...row, borderTop: "1px dashed var(--line)" }}>
                <div>
                  <div style={{ fontWeight: 800 }}>Direct messages</div>
                  <div style={{ opacity: 0.75, fontSize: 13 }}>Allow DMs from everyone (off = followers only).</div>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={dmFromEveryone}
                    onChange={(e) => setDmFromEveryone(e.target.checked)}
                  />
                  <span className="slider" />
                </label>
              </div>
              <div style={{ ...row, borderTop: "1px dashed var(--line)" }}>
                <div>
                  <div style={{ fontWeight: 800 }}>Email updates</div>
                  <div style={{ opacity: 0.75, fontSize: 13 }}>
                    Occasional summary emails. (No emails are sent unless this is on.)
                  </div>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={emailUpdates}
                    onChange={(e) => setEmailUpdates(e.target.checked)}
                  />
                  <span className="slider" />
                </label>
              </div>

              <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
                <button className="btn btnPrimary" disabled={saving} onClick={save}>
                  {saving ? "Saving…" : "Save settings"}
                </button>
                <button className="btn" onClick={clearBadges}>Clear badges</button>
              </div>
            </section>

            {/* Danger Zone */}
            <section className="card" style={{ padding: 18 }}>
              <div style={sectionTitle}>Danger zone</div>
              <div style={{ fontSize: 13, opacity: 0.8, marginBottom: 10 }}>
                This will permanently delete your account and profile data. You cannot undo this action.
              </div>
              <button
                className="btn"
                onClick={deleteAccount}
                style={{
                  border: "1px solid rgba(255,54,94,.7)",
                  background: "rgba(255,54,94,.15)",
                  color: "#ffdfe6",
                }}
              >
                Delete Account
              </button>
            </section>
          </main>

          {/* RIGHT RAIL */}
          <aside className="panel" style={{ padding: 12 }}>
            <div className="rightTitle">Tips</div>
            <div style={{ opacity: 0.85, fontSize: 14, lineHeight: 1.5 }}>
              Settings live at <code>userState/&#123;uid&#125;/prefs</code>.<br />
              Badges clear when you open Messages/Notifications or hit “Clear badges”.
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}


