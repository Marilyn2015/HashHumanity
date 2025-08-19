// FILE: src/pages/ViewProfile.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import {
  ref as dbRef,
  get,
  update as dbUpdate,
  runTransaction,
  onValue,
  query,
  orderByChild,
  equalTo,
  off
} from "firebase/database";
import {
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { auth, db, storage } from "../firebase/firebaseConfig";

// ---- helpers ----
const usernameOk = (u) => /^[a-z0-9_]{3,20}$/.test(u || "");
const MAX_AVATAR_BYTES = 5 * 1024 * 1024 - 1024; // 5MB minus a bit

// Minimal inline UI so it looks clean even without CSS
const UI = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(180deg, rgba(2,8,23,.70), rgba(2,8,23,.70)), url('/humanity-globe-2560 (1).webp') center/cover fixed",
    color: "#e9eef8",
  },
  topbar: {
    position: "sticky", top: 0, display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "14px 24px", background: "rgba(2,8,23,.55)", borderBottom: "1px solid rgba(255,255,255,.08)",
    backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", zIndex: 5,
  },
  brand: { fontWeight: 700, letterSpacing: 0.5, textShadow: "0 0 8px rgba(0,212,255,.35)" },
  main: { maxWidth: 920, margin: "42px auto", padding: "0 20px" },
  card: {
    background: "rgba(255,255,255,.14)", border: "1px solid rgba(255,255,255,.28)",
    backdropFilter: "blur(12px) saturate(160%)", WebkitBackdropFilter: "blur(12px) saturate(160%)",
    borderRadius: 18, boxShadow: "0 10px 40px rgba(0,0,0,.45), 0 0 30px rgba(255,255,255,.16) inset, 0 0 24px rgba(255,255,255,.10)",
    padding: "28px 22px",
  },
  center: { textAlign: "center" },
  avatar: {
    width: 140, height: 140, borderRadius: "50%", objectFit: "cover",
    border: "3px solid #ffffffcc", boxShadow: "0 4px 18px rgba(0,0,0,.35), 0 0 12px rgba(255,255,255,.25)",
    background: "rgba(255,255,255,.05)", display: "block", margin: "0 auto 12px",
  },
  username: { fontSize: 22, fontWeight: 800, marginTop: 6, textShadow: "0 0 6px rgba(255,255,255,.22)" },
  handle: { fontSize: 13, color: "#c7d2fe", marginTop: 2, opacity: .92 },
  bio: { marginTop: 12, color: "#dbeafe", opacity: .95, lineHeight: 1.55, fontSize: 14 },
  links: { marginTop: 12 },
  link: { display: "inline-block", margin: "3px 8px", color: "#7dd3fc", textDecoration: "none", wordBreak: "break-word" },
  row: { display: "flex", justifyContent: "center", gap: 12, marginTop: 12, flexWrap: "wrap" },
  btn: {
    border: "1px solid rgba(255,255,255,.28)", background: "rgba(255,255,255,.08)", color: "#eaf2ff",
    padding: "9px 14px", textTransform: "uppercase", fontSize: 12, borderRadius: 8, cursor: "pointer",
    transition: "box-shadow .15s ease, transform .05s ease, background .15s ease, border-color .15s ease"
  },
  btnPrimary: {
    border: "1px solid rgba(255,255,255,.55)",
    background: "radial-gradient(45% 140% at 30% 20%, rgba(255,255,255,.28), rgba(0,212,255,.18))",
    boxShadow: "0 0 14px rgba(0,212,255,.25)"
  },
  btnViolet: {
    border: "1px solid rgba(138,92,255,.55)",
    background: "radial-gradient(45% 140% at 30% 20%, rgba(255,255,255,.18), rgba(138,92,255,.14))",
    boxShadow: "0 0 14px rgba(138,92,255,.25)"
  },
  counts: { display: "flex", justifyContent: "center", gap: 22, marginTop: 8, color: "#e5e7eb", fontSize: 12 },
  editor: { marginTop: 16, paddingTop: 14, borderTop: "1px dashed rgba(255,255,255,.35)" },
  grid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 10 },
  fld: { display: "flex", flexDirection: "column", gap: 6 },
  input: {
    background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.28)", color: "#f8fbff",
    padding: "9px 10px", borderRadius: 8, outline: "none",
  },
  hint: { fontSize: 11, color: "#e5e7eb" },
  linkRow: { display: "flex", gap: 8, marginBottom: 8 },
  galleryTitle: { fontWeight: 700, letterSpacing: 0.4, marginBottom: 12 },
  gridPhotos: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px,1fr))", gap: 12 },
  photo: {
    width: "100%", height: 146, objectFit: "cover", borderRadius: 10,
    border: "1px solid rgba(255,255,255,.28)", background: "rgba(255,255,255,.08)",
  },
  ok: { fontSize: 12, color: "#86efac" },
  err: {
    background: "rgba(255,54,94,.18)", border: "1px solid rgba(255,54,94,.45)",
    color: "#fff5f7", padding: 10, borderRadius: 8, marginBottom: 12
  },
  progress: { height: 6, width: "100%", background: "rgba(255,255,255,.2)", borderRadius: 4, overflow: "hidden", marginTop: 6 },
  bar: { height: "100%", background: "linear-gradient(90deg,#a7f3d0,#67e8f9)" },
};

export default function ViewProfile() {
  const nav = useNavigate();
  const { uid: routeUid } = useParams();

  const [me, setMe] = useState(null);
  const [uid, setUid] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState("");
  const [saveMsg, setSaveMsg] = useState("");
  const [uploadPct, setUploadPct] = useState(0);

  // View model
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [links, setLinks] = useState([]);
  const [followersCount, setFollowersCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const [photos, setPhotos] = useState([]);

  // Follow state
  const [isFollowing, setIsFollowing] = useState(false);

  // Editing model
  const [editing, setEditing] = useState(false);
  const [editDisplayName, setEditDisplayName] = useState("");
  const [editUsername, setEditUsername] = useState("");
  const [editBio, setEditBio] = useState("");
  const [editLinks, setEditLinks] = useState([""]);
  const [file, setFile] = useState(null);
  const [priorUsername, setPriorUsername] = useState("");

  // preview (prevents flicker)
  const previewURL = useMemo(() => (file ? URL.createObjectURL(file) : null), [file]);
  useEffect(() => () => previewURL && URL.revokeObjectURL(previewURL), [previewURL]);
  const avatarSrc = previewURL || avatarUrl || "/avatar-fallback.png";

  useEffect(() => {
    const stop = onAuthStateChanged(auth, async (user) => {
      if (!user) { nav("/login"); return; }
      setMe(user);
      const target = routeUid || user.uid;
      setUid(target);
      await loadProfile(target);
      const unsubPhotos = subscribePhotos(target);
      const unsubs = subscribeFollowWires(user.uid, target);
      setLoading(false);

      // cleanup
      return () => {
        unsubPhotos && unsubPhotos();
        unsubs && unsubs.forEach((fn) => fn && fn());
      };
    });
    return () => stop(); // cleanup auth
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeUid, nav]);

  async function loadProfile(targetUid) {
    try {
      const snap = await get(dbRef(db, `users/${targetUid}`));
      const d = snap.exists() ? snap.val() : {};
      setDisplayName(d.displayName || "");
      setUsername(d.username || "");
      setPriorUsername(d.username || "");
      setBio(d.bio || "");
      setAvatarUrl(d.avatarUrl || d.photoURL || d.imageUrl || "");
      setLinks(Array.isArray(d.links) ? d.links.filter(Boolean) : []);
      // counts come live from subscriptions
      // prime editor
      setEditDisplayName(d.displayName || "");
      setEditUsername(d.username || "");
      setEditBio(d.bio || "");
      setEditLinks(Array.isArray(d.links) && d.links.length ? d.links : [""]);
    } catch (e) {
      setErr(e.message || String(e));
    }
  }

  function subscribePhotos(targetUid) {
    const qy = query(dbRef(db, "posts"), orderByChild("authorUid"), equalTo(targetUid));
    const cb = onValue(qy, (snap) => {
      const arr = [];
      snap.forEach((ch) => {
        const v = ch.val();
        if (v?.imageUrl) arr.push({ id: ch.key, url: v.imageUrl, createdAt: v.createdAt || 0 });
      });
      arr.sort((a, b) => b.createdAt - a.createdAt);
      setPhotos(arr.slice(0, 36));
    });
    // return unsubscribe
    return () => off(qy);
  }

  // --- FOLLOW SUBSCRIPTIONS & ACTIONS (match your rules) ---
  function subscribeFollowWires(viewerUid, profileUid) {
    const unsubs = [];

    // relationship (am I following this profile?)
    const relRef = dbRef(db, `following/${viewerUid}/${profileUid}`);
    onValue(relRef, (snap) => setIsFollowing(!!snap.val()));
    unsubs.push(() => off(relRef));

    // followers count of profile
    const followersRef = dbRef(db, `followers/${profileUid}`);
    onValue(followersRef, (snap) => setFollowersCount(snap.exists() ? snap.numChildren() : 0));
    unsubs.push(() => off(followersRef));

    // following count of profile (how many they follow)
    const followingRef = dbRef(db, `following/${profileUid}`);
    onValue(followingRef, (snap) => setFollowingCount(snap.exists() ? snap.numChildren() : 0));
    unsubs.push(() => off(followingRef));

    return unsubs;
  }

  async function followUser(viewerUid, profileUid) {
    if (!viewerUid) throw new Error("Not signed in.");
    if (viewerUid === profileUid) throw new Error("You can’t follow yourself.");
    const updates = {};
    updates[`following/${viewerUid}/${profileUid}`] = true;
    updates[`followers/${profileUid}/${viewerUid}`] = true;
    await dbUpdate(dbRef(db), updates);
  }

  async function unfollowUser(viewerUid, profileUid) {
    if (!viewerUid) throw new Error("Not signed in.");
    if (viewerUid === profileUid) throw new Error("You can’t unfollow yourself.");
    const updates = {};
    updates[`following/${viewerUid}/${profileUid}`] = null;
    updates[`followers/${profileUid}/${viewerUid}`] = null;
    await dbUpdate(dbRef(db), updates);
  }

  async function handleFollowClick() {
    try {
      if (!me?.uid || !uid) throw new Error("Sign in to follow.");
      if (me.uid === uid) return; // no-op on own profile
      if (isFollowing) await unfollowUser(me.uid, uid);
      else await followUser(me.uid, uid);
    } catch (e) {
      console.error(e);
      alert(e?.message || "Follow action failed.");
    }
  }

  async function claimUsername(newUname, myUid) {
    if (!newUname || newUname === priorUsername) return true;
    const unameRef = dbRef(db, `usernames/${newUname}`);
    const res = await runTransaction(unameRef, (current) => (current === null ? myUid : current));
    const takenBy = res.snapshot.val();
    if (takenBy !== myUid) return false;
    if (priorUsername && priorUsername !== newUname) {
      await dbUpdate(dbRef(db), { [`usernames/${priorUsername}`]: null }).catch(() => {});
    }
    return true;
  }

  // ---- fixed upload: resumable + real progress ----
  async function uploadAvatar(file, whoUid) {
    if (file.size > MAX_AVATAR_BYTES) {
      throw new Error("Avatar exceeds 5MB rule. Choose a smaller image.");
    }
    const ext = (file.name.split(".").pop() || "jpg").toLowerCase();
    const path = `avatars/${whoUid}/avatar_${Date.now()}.${ext}`;
    const sref = storageRef(storage, path);
    const metadata = { contentType: file.type || "image/jpeg", cacheControl: "public,max-age=31536000" };

    return await new Promise((resolve, reject) => {
      setUploadPct(0);
      const task = uploadBytesResumable(sref, file, metadata);
      const guard = setTimeout(() => reject(new Error("Upload timed out (check CORS for localhost).")), 120000);

      task.on(
        "state_changed",
        (snap) => {
          const pct = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
          setUploadPct(pct);
        },
        (err) => {
          clearTimeout(guard);
          reject(err);
        },
        async () => {
          clearTimeout(guard);
          try {
            const url = await getDownloadURL(task.snapshot.ref);
            resolve(url);
          } catch (e) {
            reject(e);
          }
        }
      );
    });
  }

  async function saveEdits() {
    if (!me || !uid || me.uid !== uid) return;
    setErr(""); setSaveMsg(""); setSaving(true);

    try {
      // 1) upload avatar if chosen
      let finalAvatarUrl = avatarUrl || "";
      if (file) {
        finalAvatarUrl = await uploadAvatar(file, uid);
      }

      // 2) username change
      const newUsername = (editUsername || "").trim().toLowerCase();
      if (newUsername && !usernameOk(newUsername)) throw new Error("Username must be 3–20: a–z 0–9 _");
      if (newUsername && newUsername !== (priorUsername || "")) {
        const ok = await claimUsername(newUsername, uid);
        if (!ok) throw new Error("That username is already taken.");
      }

      // 3) build partial payload
      const cleanLinks = (editLinks || []).map((x) => String(x || "").trim()).filter(Boolean).slice(0, 5);
      const updates = { updatedAt: Date.now() };
      const dn = (editDisplayName || "").trim();
      if (dn && dn !== (displayName || "")) updates.displayName = dn;
      if (newUsername && newUsername !== (username || "")) updates.username = newUsername;
      if (editBio !== (bio || "")) updates.bio = editBio;
      if (JSON.stringify(cleanLinks) !== JSON.stringify(links)) updates.links = cleanLinks;
      if (finalAvatarUrl && finalAvatarUrl !== (avatarUrl || "")) {
        updates.avatarUrl = finalAvatarUrl;
        updates.imageUrl = finalAvatarUrl; // back-compat
      }

      if (Object.keys(updates).length === 1 && !updates.avatarUrl) {
        setErr("No changes to save.");
        return;
      }

      // 4) write to users/{uid}
      await dbUpdate(dbRef(db, `users/${uid}`), updates);

      // 5) reflect in Firebase Auth profile
      if (auth.currentUser && (updates.displayName || updates.avatarUrl)) {
        await updateProfile(auth.currentUser, {
          displayName: updates.displayName || undefined,
          photoURL: updates.avatarUrl || undefined,
        }).catch(() => {});
      }

      // 6) reflect in UI
      if (updates.displayName !== undefined) setDisplayName(updates.displayName);
      if (updates.username !== undefined) { setUsername(updates.username); setPriorUsername(updates.username); }
      if (updates.bio !== undefined) setBio(updates.bio);
      if (updates.links !== undefined) setLinks(updates.links);
      if (updates.avatarUrl !== undefined) setAvatarUrl(updates.avatarUrl);

      setFile(null);
      setSaveMsg("Saved!");
      setEditing(false);
      setUploadPct(0);
    } catch (e) {
      const msg = e?.message || e?.code || String(e);
      setErr(msg);
      console.error("saveEdits error:", e);
    } finally {
      setSaving(false);
    }
  }

  const isOwnProfile = me && uid && me.uid === uid;

  if (loading) {
    return (
      <div style={UI.page}>
        <header style={UI.topbar}><div style={UI.brand}>#HUMANITY</div></header>
        <main style={UI.main}><section style={{ ...UI.card, ...UI.center }}>Loading…</section></main>
      </div>
    );
  }

  return (
    <div style={UI.page}>
      <header style={UI.topbar}>
        <div style={UI.brand}>#HUMANITY</div>
        <div style={{ display: "flex", gap: 10 }}>
          <button style={UI.btn} onClick={() => nav("/universe")}>Universe</button>
          <button style={{ ...UI.btn, borderColor: "rgba(255,54,94,.6)" }}
                  onClick={async () => { await signOut(auth); nav("/login"); }}>
            Log out
          </button>
        </div>
      </header>

      <main style={UI.main}>
        {/* PROFILE CARD */}
        <section style={{ ...UI.card, ...UI.center }}>
          <img
            src={avatarSrc}
            alt="Profile avatar"
            style={UI.avatar}
            onError={(e) => { e.currentTarget.src = "/avatar-fallback.png"; }}
          />
          <div style={UI.username}>{displayName || username || "Anonymous"}</div>
          {username && <div style={UI.handle}>@{username}</div>}
          {!!bio && <div style={UI.bio}>{bio}</div>}

          {!!links?.length && (
            <div style={UI.links}>
              {links.map((u, i) => (
                <a key={i} href={u} target="_blank" rel="noreferrer noopener" style={UI.link}>{u}</a>
              ))}
            </div>
          )}

          <div style={UI.counts}>
            <span><strong>{followersCount || 0}</strong> Followers</span>
            <span><strong>{followingCount || 0}</strong> Following</span>
          </div>

          {/* FOLLOW / EDIT CONTROLS */}
          {!isOwnProfile ? (
            <div style={UI.row}>
              <button
                onClick={handleFollowClick}
                style={{
                  ...UI.btn,
                  ...(isFollowing ? UI.btnViolet : UI.btnPrimary),
                  minWidth: 160
                }}
              >
                {isFollowing ? "Unfollow" : "Follow"}
              </button>
            </div>
          ) : (
            !editing && (
              <div style={UI.row}>
                <button style={{ ...UI.btn, ...UI.btnPrimary }} onClick={() => setEditing(true)}>Edit Profile</button>
              </div>
            )
          )}

          {isOwnProfile && editing && (
            <div style={UI.editor}>
              {err && <div style={UI.err}>{err}</div>}

              <div className="vp-lbl" style={UI.fld}>
                <span>Profile Photo</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => { const f = e.target.files?.[0]; if (f) setFile(f); }}
                />
                {uploadPct > 0 && uploadPct < 100 && (
                  <div style={UI.progress}><div style={{ ...UI.bar, width: `${uploadPct}%` }} /></div>
                )}
              </div>

              <div style={UI.grid}>
                <label style={UI.fld}>
                  <span>Display Name</span>
                  <input style={UI.input} value={editDisplayName}
                         onChange={(e) => setEditDisplayName(e.target.value)} maxLength={60} />
                </label>
                <label style={UI.fld}>
                  <span>Username</span>
                  <input style={UI.input} value={editUsername}
                         onChange={(e) => setEditUsername(e.target.value.toLowerCase())} maxLength={20} />
                  <small style={UI.hint}>3–20: a–z 0–9 _</small>
                </label>
              </div>

              <label style={UI.fld}>
                <span>Bio</span>
                <textarea style={{ ...UI.input, resize: "vertical" }} rows={4} maxLength={280}
                          value={editBio} onChange={(e) => setEditBio(e.target.value)} />
                <small style={UI.hint}>{editBio.length}/280</small>
              </label>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <span>Links</span>
                  <button style={UI.btn} type="button"
                          onClick={() => setEditLinks((a) => (a.length < 5 ? [...a, ""] : a))}>
                    Add link
                  </button>
                </div>
                {editLinks.map((val, i) => (
                  <div key={i} style={UI.linkRow}>
                    <input style={UI.input} placeholder="https://your-link" value={val}
                           onChange={(e) => {
                             const v = e.target.value;
                             setEditLinks((arr) => arr.map((x, idx) => (idx === i ? v : x)));
                           }} />
                    <button style={{ ...UI.btn, borderColor: "rgba(255,54,94,.6)" }} type="button"
                            onClick={() => setEditLinks((arr) => arr.filter((_, idx) => idx !== i))}>
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div style={{ ...UI.row, justifyContent: "flex-end" }}>
                {saveMsg && <span style={UI.ok}>{saveMsg}</span>}
                <button style={{ ...UI.btn, ...UI.btnPrimary }} disabled={saving} onClick={saveEdits}>
                  {saving ? "Saving…" : "Save"}
                </button>
              </div>
            </div>
          )}
        </section>

        {/* PHOTOS */}
        <section style={{ ...UI.card, marginTop: 16 }}>
          <div style={UI.galleryTitle}>Photos</div>
          {photos.length === 0 ? (
            <div style={{ opacity: .85 }}>No photos yet.</div>
          ) : (
            <div style={UI.gridPhotos}>
              {photos.map((p) => <img key={p.id} src={p.url} alt="post" style={UI.photo} />)}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}



