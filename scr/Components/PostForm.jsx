import React, { useState } from 'react';
import './postForm.css';
import { auth, db, storage } from '../firebase/firebase';
import { ref as dbRef, push } from 'firebase/database';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

const PostForm = () => {
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');

  const handleImage = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  };

  const handlePost = async () => {
    const uid = auth.currentUser?.uid;
    if (!uid) return alert('Not logged in');

    let imageUrl = '';
    if (file) {
      const imgRef = storageRef(storage, `posts/${Date.now()}_${file.name}`);
      await uploadBytes(imgRef, file);
      imageUrl = await getDownloadURL(imgRef);
    }

    const post = {
      uid,
      text,
      imageUrl,
      timestamp: Date.now()
    };

    await push(dbRef(db, 'posts'), post);
    setText('');
    setFile(null);
    setPreview('');
  };

  return (
    <div className="post-form">
      <textarea placeholder="What's on your mind?" value={text} onChange={(e) => setText(e.target.value)} />
      <input type="file" onChange={handleImage} />
      {preview && <img src={preview} alt="preview" id="imagePreview" />}
      <button onClick={handlePost}>Post</button>
    </div>
  );
};

export default PostForm;
