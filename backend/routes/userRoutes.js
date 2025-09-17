import express from "express";
import db from "../db.js";

const router = express.Router();

// daftar peserta baru
router.post("/register", (req, res) => {
  const { nama, email } = req.body;

  const sql = "INSERT INTO peserta (nama, email) VALUES (?, ?)";
  db.query(sql, [nama, email], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    res.json({ success: true, id: result.insertId });
  });
});

// ambil semua peserta
router.get("/", (req, res) => {
  const sql = "SELECT * FROM peserta";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    res.json(results);
  });
});

export default router;
