// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: '/',                       // << CRITICAL for Firebase Hosting + local
  server: {
    port: 5190,
    host: true,
    open: '/'
  },
  preview: {
    port: 5190,
    host: true,
    open: '/'
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
}));
