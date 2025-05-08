// server.js
require('dotenv').config();

const express = require('express');
const cors    = require('cors');
const jwt     = require('jsonwebtoken');
// const { Pool } = require('pg');           // ⬅ uncomment when a DB is ready

const app  = express();
const PORT = process.env.PORT || 5000;

/* ─── Config from env ─────────────────────────────────────────────────────── */
const {
  DB_HOST,
  DB_DATABASE,
  DB_USER,
  DB_PASS,
  JWT_SECRET,
  CORRECT_PASSWORD
} = process.env;

if (!JWT_SECRET || !CORRECT_PASSWORD) {
  console.error('❌ Missing JWT_SECRET or CORRECT_PASSWORD in env vars');
  process.exit(1);
}

/* ─── Middleware ─────────────────────────────────────────────────────────── */
app.use(cors());
app.use(express.json());

/* ─── Database connection (disabled for now) ─────────────────────────────── */
// let pool = null;
// if (DB_HOST && DB_HOST !== 'localhost') {
//   pool = new Pool({
//     user:     DB_USER,
//     password: DB_PASS,
//     host:     DB_HOST,
//     database: DB_DATABASE
//   });
//
//   pool.connect()
//       .then(() => console.log(`✔️  Connected to DB: ${DB_DATABASE}`))
//       .catch(err => console.error('DB connection error:', err));
// } else {
//   console.log('⚠️  No remote DB configured – skipping Postgres connection');
// }

/* ─── RSVP route (disabled until DB is live) ─────────────────────────────── */
// app.post('/rsvp', async (req, res) => {
//   if (!pool) return res.status(503).send('Database not configured');
//   const { firstName, lastName, response, foodOption, allergyInfo } = req.body;
//   try {
//     const result = await pool.query(
//       `INSERT INTO rsvp
//          (full_name, guest, response, food_option, allergy_info)
//        VALUES ($1,$2,$3,$4,$5)
//        RETURNING *`,
//       [firstName, lastName, response, foodOption, allergyInfo]
//     );
//     res.json(result.rows[0]);
//   } catch (err) {
//     console.error('RSVP error:', err);
//     res.status(500).send('Service Error');
//   }
// });

/* ─── LOGIN route ────────────────────────────────────────────────────────── */
app.post('/login', (req, res) => {
  const { password } = req.body;

  if (password === CORRECT_PASSWORD) {
    const token = jwt.sign({ authenticated: true }, JWT_SECRET, {
      expiresIn: '30m'
    });
    return res.json({ token });
  }

  res.status(401).json({ error: 'Invalid password' });
});

/* ─── Start server ───────────────────────────────────────────────────────── */
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
