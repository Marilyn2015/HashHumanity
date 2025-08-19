// server.js
const express = require('express');
const cors = require('cors');

const app = express();

// enable CORS
app.use(cors({
  origin: [
    'http://localhost:5173',     // Vite
    'http://localhost:3000',     // CRA
    'https://hashhumanity-58b9a.web.app',   // your hosted app (example)
  ],
  credentials: true              // only if you use cookies/auth headers
}));

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ ok: true });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`API running at http://localhost:${PORT}`));
