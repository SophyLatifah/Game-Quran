import express from "express";
import db from "../db.js";

const router = express.Router();

// POST /api/score/ - Save/Update user score
router.post("/", (req, res) => {
  const { user_id, surah_key, score, max_questions } = req.body;
  
  if (!user_id || !surah_key || score == null) {
    return res.status(400).json({ message: "Data tidak lengkap" });
  }

  const checkSql = "SELECT * FROM scores WHERE user_id = ? AND surah_key = ?";
  
  db.query(checkSql, [user_id, surah_key], (err, results) => {
    if (err) return res.status(500).json({ message: "Error DB", error: err });

    if (results.length > 0) {
      if (score > results[0].score) {
        const updateSql = "UPDATE scores SET score = ?, max_questions = ?, updated_at = NOW() WHERE user_id = ? AND surah_key = ?";
        db.query(updateSql, [score, max_questions || 10, user_id, surah_key], (err2) => {
          if (err2) return res.status(500).json({ message: "Error update skor", error: err2 });
          res.json({ 
            message: "Skor berhasil diperbarui", 
            newHighScore: true,
            score,
            percentage: Math.round((score / (max_questions || 10)) * 100)
          });
        });
      } else {
        res.json({ 
          message: "Skor tidak diperbarui", 
          newHighScore: false,
          currentBest: results[0].score
        });
      }
    } else {
      const insertSql = "INSERT INTO scores (user_id, surah_key, score, max_questions) VALUES (?, ?, ?, ?)";
      db.query(insertSql, [user_id, surah_key, score, max_questions || 10], (err3) => {
        if (err3) return res.status(500).json({ message: "Error insert skor", error: err3 });
        res.json({ 
          message: "Skor berhasil disimpan", 
          newHighScore: true,
          score,
          percentage: Math.round((score / (max_questions || 10)) * 100)
        });
      });
    }
  });
});

// GET /api/score/:user_id - Get all user scores
router.get("/:user_id", (req, res) => {
  const user_id = req.params.user_id;
  const sql = `
    SELECT 
      s.*,
      ROUND((s.score / s.max_questions) * 100) as percentage,
      sm.surah_name,
      sm.surah_number
    FROM scores s 
    LEFT JOIN surah_mapping sm ON s.surah_key = sm.surah_key
    WHERE s.user_id = ? 
    ORDER BY s.score DESC, s.updated_at DESC
  `;
  
  db.query(sql, [user_id], (err, results) => {
    if (err) return res.status(500).json({ message: "Error DB", error: err });
    res.json(results);
  });
});

export default router;