// index.js
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 5000;

// —– Config from .env —–
const DB_HOST     = process.env.DB_HOST;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_USER     = process.env.DB_USER || '';
const DB_PASS     = process.env.DB_PASS || '';
const JWT_SECRET  = process.env.JWT_SECRET;
const CORRECT_PASSWORD = process.env.CORRECT_PASSWORD;

if (!DB_HOST || !DB_DATABASE || !JWT_SECRET || !CORRECT_PASSWORD) {
  console.error(
    '❌ Missing one of DB_HOST, DB_DATABASE, JWT_SECRET, or CORRECT_PASSWORD in .env'
  );
  process.exit(1);
}

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const pool = new Pool({
  user:     DB_USER,
  password: DB_PASS,
  host:     DB_HOST,
  database: DB_DATABASE
});

pool
  .connect()
  .then(() => console.log(`✔️ Connected to DB: ${DB_DATABASE}`))
  .catch(err => {
    console.error('DB connection error:', err);
    process.exit(1);
  });

// —– RSVP ROUTE —–
app.post('/rsvp', async (req, res) => {
  const { firstName, lastName, response, foodOption, allergyInfo } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO rsvp
         (full_name, guest, response, food_option, allergy_info)
       VALUES ($1,$2,$3,$4,$5)
       RETURNING *`,
      [ firstName, lastName, response, foodOption, allergyInfo ]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error('RSVP error:', err);
    res.status(500).send('Service Error');
  }
});

// —– LOGIN ROUTE —–
app.post('/login', (req, res) => {
  const { password } = req.body;
  if (password === CORRECT_PASSWORD) {
    const token = jwt.sign(
      { authenticated: true },
      JWT_SECRET,
      { expiresIn: '30m' }
    );
    return res.json({ token });
  }
  return res.status(401).json({ error: 'Invalid password' });
});

// —– START SERVER —–
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
