import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { ref as dbRef, set } from 'firebase/database';
import { auth, db, storage } from '../firebase';
import './RegisterForm.css';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { ref as dbRef, set } from 'firebase/database';
import { auth, db, storage } from '../firebase';
import './RegisterForm.css';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await c
function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      let avatarUrl = '';
      if (avatar) {
        const avatarStorageRef = storageRef(storage, `avatars/${uid}`);
        await uploadBytes(avatarStorageRef, avatar);
        avatarUrl = await getDownloadURL(avatarStorageRef);
      }

      await set(dbRef(db, `users/${uid}`), {
        email,
        username,
        avatarUrl,
        createdAt: new Date().toISOString()
      });

      alert('Account created successfully!');
      setEmail('');
      setPassword('');
      setUsername('');
      setAvatar(null);
    } catch (error) {
      console.error('Registration error:', error);
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="register-form" onSubmit={handleRegister}>
      <h2>Create Account</h2>
      <label>
        Email:
        <input type="email" value={email} required onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label>
        Username:
        <input type="text" value={username} required onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Avatar (optional):
        <input type="file" accept="image/*" onChange={(e) => setAvatar(e.target.files[0])} />
      </label>
      <button type="submit" disabled={loading}>
        {loading ? 'Creating account...' : 'Register'}
      </button>
    </form>
  );
}

export default RegisterForm;
