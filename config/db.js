import dotenv from 'dotenv';
import mysql from 'mysql2';

// Load environment variables from .env (only in local dev)
dotenv.config();

const mysqlSetting = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    multipleStatements: true,
};

const conn = mysql.createPool(mysqlSetting);

export default conn;
