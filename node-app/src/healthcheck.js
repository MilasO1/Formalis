const mysql = require('mysql2/promise');

(async () => {
  try {
    const pool = await mysql.createPool({
      host: process.env.DB_HOST || 'db',
      user: process.env.DB_USER || 'formalis',
      password: process.env.DB_PASSWORD || 'change_me',
      database: process.env.DB_NAME || 'formalis_db',
      waitForConnections: true,
      connectionLimit: 1,
      connectTimeout: 5000
    });
    await pool.query('SELECT 1');
    await pool.end();
    process.exit(0);
  } catch (err) {
    console.error('healthcheck failed', err.message);
    process.exit(1);
  }
})();
