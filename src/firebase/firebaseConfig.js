// src/firebase/firebaseConfig.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// ---- Your Firebase project config (keep these values) ----
const firebaseConfig = {
  apiKey: "AIzaSyBT7P7DAfV-I9ESe6f9Jdp5ioCyGIK0d9A",
  authDomain: "hashhumanity-58b9a.firebaseapp.com",
  databaseURL: "https://hashhumanity-58b9a-default-rtdb.firebaseio.com",
  projectId: "hashhumanity-58b9a",
  // IMPORTANT: domainized bucket (NOT appspot)
  storageBucket: "hashhumanity-58b9a.firebasestorage.app",
  messagingSenderId: "886745899016",
  appId: "1:886745899016:web:2b0f7e043c2434379d71bd",
  measurementId: "G-3ZTCXL4374",
};

// Avoid double-init on HMR
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Export ONE canonical instance of each service
export const auth = getAuth(app);
export const db = getDatabase(app);

// Pin Storage to your GS bucket so it never falls back to appspot
export const storage = getStorage(app, "gs://hashhumanity-58b9a.firebasestorage.app");

// Optional: load Analytics only when supported (prevents black screen in dev/SSR)
export let analytics = null;
if (typeof window !== "undefined") {
  import("firebase/analytics").then(async ({ getAnalytics, isSupported }) => {
    try {
      if (await isSupported()) analytics = getAnalytics(app);
    } catch {
      // ignore analytics failures in dev
    }
  });
}

// Dev sanity check: should print "gs://hashhumanity-58b9a.firebasestorage.app/"
if (import.meta?.env?.DEV) {
  import("firebase/storage").then(({ ref }) => {
    console.log("Storage root =", ref(storage).toString());
  });
}
