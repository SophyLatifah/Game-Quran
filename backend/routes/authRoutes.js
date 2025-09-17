import express from "express";
import db from "../db.js";

const router = express.Router();

// login admin
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const sql = "SELECT * FROM admin WHERE username = ? AND password = ?";
  db.query(sql, [username, password], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    if (results.length > 0) {
      res.json({ success: true, user: results[0] });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  });
});

export default router;
