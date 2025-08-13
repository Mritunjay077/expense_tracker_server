// db.js

import dotenv from 'dotenv';
import pg from 'pg';

// Load environment variables from .env (only in local dev)
dotenv.config();

// The pg package uses a Pool object
const { Pool } = pg;

// Render provides a single DATABASE_URL environment variable
// that includes all the connection details.
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // This is required for connecting to Render's database
  // from outside their internal network.
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;