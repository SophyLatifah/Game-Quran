// db.js (ganti seluruh file dengan ini)
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

// Debug: tampilkan lokasi file .env yang dibaca dan beberapa env kunci
console.log("Working dir:", process.cwd());
console.log(".env loaded? DB_HOST:", process.env.DB_HOST ? "YES" : "NO");

console.log("ENV CHECK:", {
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD_is_set: process.env.DB_PASSWORD ? "YES" : "NO",
  DB_NAME: process.env.DB_NAME,
  DB_PORT: process.env.DB_PORT
});

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,  // ini ambil dari .env
  database: process.env.DB_NAME,
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined
});

db.connect((err) => {
  if (err) {
    console.error("DB connect error:", err);
    return;
  }
  console.log("MySQL connected!");
});

export default db;
