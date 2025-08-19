import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

document.addEventListener('DOMContentLoaded', () => {
    const createProfileBtn = document.getElementById('createProfileBtn');

    if (createProfileBtn) {
        createProfileBtn.addEventListener('click', () => {
            const username = document.getElementById('profileName').value.trim();
            const bio = document.getElementById('profileBio').value.trim();
            const github = document.getElementById('githubLink').value.trim();
            const website = document.getElementById('websiteLink').value.trim();

            if (!username) {
                alert('Username is required!');
                return;
            }

            const auth = getAuth();
            onAuthStateChanged(auth, user => {
                if (user) {
                    const db = getDatabase();
                    const profileRef = ref(db, 'profiles/' + user.uid);

                    set(profileRef, {
                        username,
                        bio,
                        github,
                        website,
                        uid: user.uid
                    })
                    .then(() => {
                        alert('Profile saved successfully.');
                        window.location.href = 'universe.html';
                    })
                    .catch(error => {
                        console.error('Error saving profile:', error);
                        alert('Failed to save profile. Check console.');
                    });
                } else {
                    alert('No authenticated user found.');
                }
            });
        });
    }
});
