const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'formalis',
  password: process.env.DB_PASSWORD || 'change_me',
  database: process.env.DB_NAME || 'formalis_db',
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = pool;
