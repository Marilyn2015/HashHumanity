// Feed.jsx
import React, { useEffect, useState } from 'react';
import './feed.css';
import { db } from '../firebase/firebase';
import { ref, onChildAdded } from 'firebase/database';
import Post from './Post';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const feedRef = ref(db, 'posts');
    onChildAdded(feedRef, snap => {
      setPosts(prev => [snap.val(), ...prev]);
    });
  }, []);

  return (
    <div className="feed">
      {posts.map((post, idx) => <Post key={idx} data={post} />)}
    </div>
  );
};

export default Feed;
