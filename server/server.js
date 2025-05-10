// server.js
require('dotenv').config();

const express = require('express');
const cors    = require('cors');
const jwt     = require('jsonwebtoken');
const { Pool } = require('pg');         

const app  = express();
const PORT = process.env.PORT || 5000;

/* ─── Secrets ────────────────────────────────────────────────────────────── */
const { DATABASE_URL, JWT_SECRET, CORRECT_PASSWORD } = process.env;

if (!JWT_SECRET || !CORRECT_PASSWORD) {
  console.error('❌ JWT_SECRET or CORRECT_PASSWORD missing');  // DATABASE_URL may be optional in dev
  process.exit(1);
}

/* ─── Middleware ─────────────────────────────────────────────────────────── */
app.use(cors());
app.use(express.json());

/* ─── Database connection ────────────────────────────────────────────────── */
let pool = null;

if (DATABASE_URL) {
  pool = new Pool({
    connectionString: DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' && {
      rejectUnauthorized: false
    }
  });

  pool.connect()
      .then(() => console.log('✔️  Connected to Heroku Postgres'))
      .catch(err => console.error('DB connection error:', err));
} else {
  console.log('⚠️  DATABASE_URL not set – database features disabled');
}

/* ─── RSVP route (enabled only when pool exists) ─────────────────────────── */
app.post('/rsvp', async (req, res) => {
  if (!pool) return res.status(503).send('Database not configured');

  const { firstName, lastName, response, foodOption, allergyInfo, guestFoodOptions = [] } = req.body;

  const guest2 = guestFoodOptions[0] || null;
  const guest3 = guestFoodOptions[1] || null;
  const guest4 = guestFoodOptions[2] || null;

  try {
    const result = await pool.query(
      `INSERT INTO rsvp
         (full_name, guest, response, food_option, allergy_info, guest_food_option_2, guest_food_option_3, guest_food_option_4)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING *`,
      [firstName, lastName, response, foodOption, allergyInfo, guest2, guest3, guest4]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error('RSVP error:', err);
    res.status(500).send('Service Error');
  }
});

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
