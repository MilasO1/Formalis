const express = require('express');
const mysql = require('mysql2/promise');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

app.get('/api/health', async (req, res) => {
  try {
    const pool = await mysql.createPool({
      host: process.env.DB_HOST || 'db',
      user: process.env.DB_USER || 'formalis',
      password: process.env.DB_PASSWORD || 'change_me',
      database: process.env.DB_NAME || 'formalis_db',
      waitForConnections: true,
      connectionLimit: 5
    });
    await pool.query('SELECT 1');
    await pool.end();
    res.json({ status: 'ok', db: 'connected' });
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
});

app.get('/', (req, res) => res.send('Formalis platform placeholder'));

app.listen(PORT, () => console.log(`API listening on port ${PORT}`));
