
// FILE: src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ViewProfile from "./pages/ViewProfile.jsx";
import UniversePage from "./pages/UniversePage.jsx";

// NEW: extra pages
import MessagesPage from "./pages/MessagesPage.jsx";
import NotificationsPage from "./pages/NotificationsPage.jsx";
import VerifyPage from "./pages/VerifyPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/profile/:uid" element={<ViewProfile />} />
      <Route path="/universe" element={<UniversePage />} />

      {/* NEW ROUTES */}
      <Route path="/messages" element={<MessagesPage />} />
      <Route path="/notifications" element={<NotificationsPage />} />
      <Route path="/verify" element={<VerifyPage />} />
      <Route path="/settings" element={<SettingsPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
