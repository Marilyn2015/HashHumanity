// LoginForm.jsx

import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set, get, child } from 'firebase/database';
import { initializeApp } from 'firebase/app';

// Put your Firebase config here:
const firebaseConfig = {
  apiKey: "AIzaSyBT7P7DAfV-I9ESe6f9Jdp5ioCyGIK0d9A",
  authDomain: "hashhumanity-58b9a.firebaseapp.com",
  databaseURL: "https://hashhumanity-58b9a-default-rtdb.firebaseio.com",
  projectId: "hashhumanity-58b9a",
  storageBucket: "hashhumanity-58b9a.appspot.com",
  messagingSenderId: "886745899016",
  appId: "1:886745899016:web:2b0f7e043c2434379d71bd"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export default function LoginForm({ onLogin }) {
  const [mode, setMode] = useState('login'); // login, register, reset
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); setError(''); setMessage('');
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const userId = userCred.user.uid;
      const dbRef = ref(database);
      const snapshot = await get(child(dbRef, `users/${userId}`));
      if (!snapshot.exists()) {
        await set(ref(database, 'users/' + userId), {
          email,
          initializedAt: new Date().toISOString()
        });
      }
      setMessage("Logged in!");
      onLogin && onLogin();
      // Redirect if you want: window.location.href = '/universe'
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true); setError(''); setMessage('');
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const userId = userCred.user.uid;
      await set(ref(database, 'users/' + userId), {
        email,
        createdAt: new Date().toISOString()
      });
      setMessage("Registration successful! Now set up your profile.");
      // Redirect if you want: window.location.href = '/create_profile'
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true); setError(''); setMessage('');
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent.');
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div style={{
      background: "#18181b",
      borderRadius: 18,
      maxWidth: 380,
      width: "100%",
      padding: "40px 36px 30px 36px",
      margin: "32px auto",
      boxShadow: "0 4px 32px #14faff77, 0 1px 24px #000c",
      border: "2px solid #fff",
      textAlign: "center"
    }}>
      <h1 style={{
        fontSize: "2.1rem",
        fontWeight: 700,
        marginBottom: 28,
        color: "#fff",
        letterSpacing: "1.5px",
        textShadow: "0 2px 16px #fff4, 0 0 2px #0ef8"
      }}>
        Sign in to #HUMANITY
      </h1>
      <form onSubmit={
        mode === 'login' ? handleLogin :
        mode === 'register' ? handleRegister :
        handleReset
      }>
        <input
          type="email"
          placeholder="Email Address"
          required
          autoComplete="username"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            margin: "16px 0 10px 0",
            border: "1.5px solid #fff",
            borderRadius: 8,
            background: "#21212b",
            color: "#fff",
            fontSize: "1.03rem",
            boxShadow: "0 2px 14px #fff2, 0 0 4px #00e4fa33",
            outline: "none"
          }}
        />
        {mode !== 'reset' && (
          <input
            type="password"
            placeholder="Password"
            required
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "14px",
              margin: "14px 0 8px 0",
              border: "1.5px solid #fff",
              borderRadius: 8,
              background: "#21212b",
              color: "#fff",
              fontSize: "1.03rem",
              boxShadow: "0 2px 14px #fff2, 0 0 4px #00e4fa33",
              outline: "none"
            }}
          />
        )}
        {error && <div style={{ color: "#ff6870", margin: "16px 0 0 0", fontWeight: 600 }}>{error}</div>}
        {message && <div style={{ color: "#35ff70", margin: "14px 0 0 0", fontWeight: 600 }}>{message}</div>}
        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            background: "linear-gradient(90deg, #fff 0%, #ededed 100%)",
            color: "#080c19",
            border: "none",
            padding: "13px",
            fontSize: "1.04rem",
            fontWeight: 700,
            borderRadius: 8,
            margin: "18px 0 8px 0",
            boxShadow: "0 0 22px 5px #fff8, 0 2px 10px #0007",
            cursor: "pointer",
            letterSpacing: "1px",
            transition: "background 0.23s, color 0.18s, box-shadow 0.21s, transform 0.16s",
            outline: "none"
          }}
        >
          {mode === 'login' && "Login"}
          {mode === 'register' && "Register"}
          {mode === 'reset' && "Reset Password"}
        </button>
      </form>
      <button
        className="btn secondary"
        style={{
          width: "100%",
          background: "transparent",
          color: "#fff",
          border: "2px solid #fff",
          boxShadow: "0 0 18px 6px #fff5, 0 1px 4px #0008",
          margin: "7px 0",
          borderRadius: 8,
          padding: "13px",
          fontWeight: 700,
          fontSize: "1.04rem",
          cursor: "pointer",
          letterSpacing: "1px"
        }}
        disabled={loading}
        onClick={() => setMode(mode === 'register' ? 'login' : 'register')}
      >
        {mode === 'register' ? "Back to Login" : "Need an account? Register"}
      </button>
      <button
        className="btn secondary"
        style={{
          width: "100%",
          background: "transparent",
          color: "#fff",
          border: "2px solid #fff",
          boxShadow: "0 0 18px 6px #fff5, 0 1px 4px #0008",
          margin: "7px 0",
          borderRadius: 8,
          padding: "13px",
          fontWeight: 700,
          fontSize: "1.04rem",
          cursor: "pointer",
          letterSpacing: "1px"
        }}
        disabled={loading}
        onClick={() => setMode(mode === 'reset' ? 'login' : 'reset')}
      >
        {mode === 'reset' ? "Back to Login" : "Forgot Password?"}
      </button>
    </div>
  );
}
