import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./db.js"; // <-- import koneksi

dotenv.config();
console.log("ENV TEST PASSWORD:", process.env.DB_PASSWORD); // 🔍 debug

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Quran Quiz Backend running...");
});

// contoh test koneksi
app.get("/api/test-db", (req, res) => {
  db.query("SELECT 1 + 1 AS hasil", (err, rows) => {
    if (err) return res.status(500).json({ error: err });
    res.json(rows);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
