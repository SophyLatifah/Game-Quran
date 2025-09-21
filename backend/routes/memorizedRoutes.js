// ============= routes/memorizedRoutes.js (NEW - Dedicated file) =============
import express from "express";
import db from "../db.js";

const router = express.Router();

// GET /api/memorized/:user_id - Get all memorized words
router.get("/:user_id", (req, res) => {
  const user_id = req.params.user_id;
  const sql = `
    SELECT 
      m.*,
      sm.surah_name,
      sm.surah_number
    FROM memorized_words m 
    LEFT JOIN surah_mapping sm ON m.surah_key = sm.surah_key
    WHERE m.user_id = ? 
    ORDER BY m.created_at DESC
  `;
  
  db.query(sql, [user_id], (err, results) => {
    if (err) return res.status(500).json({ message: "Error DB", error: err });
    res.json(results);
  });
});

// POST /api/memorized/ - Add memorized word
router.post("/", (req, res) => {
  const { user_id, surah_key, arab, meaning } = req.body;
  
  if (!user_id || !surah_key || !arab || !meaning) {
    return res.status(400).json({ message: "Data tidak lengkap" });
  }

  // Check duplicate
  const checkSql = "SELECT id FROM memorized_words WHERE user_id = ? AND surah_key = ? AND arab = ?";
  db.query(checkSql, [user_id, surah_key, arab], (err, existing) => {
    if (err) return res.status(500).json({ message: "Error DB", error: err });
    
    if (existing.length > 0) {
      return res.json({ message: "Kata sudah pernah dihafal", duplicate: true });
    }

    const sql = "INSERT INTO memorized_words (user_id, surah_key, arab, meaning) VALUES (?, ?, ?, ?)";
    db.query(sql, [user_id, surah_key, arab, meaning], (err, result) => {
      if (err) return res.status(500).json({ message: "Error DB", error: err });
      res.json({ message: "Kata berhasil disimpan", id: result.insertId });
    });
  });
});

// DELETE /api/memorized/:id - Remove memorized word
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const { user_id } = req.body; // for security check
  
  const sql = "DELETE FROM memorized_words WHERE id = ? AND user_id = ?";
  db.query(sql, [id, user_id], (err, result) => {
    if (err) return res.status(500).json({ message: "Error DB", error: err });
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Kata tidak ditemukan atau bukan milik user" });
    }
    
    res.json({ message: "Kata berhasil dihapus" });
  });
});

// GET /api/memorized/stats/:user_id - Get memorization stats
router.get("/stats/:user_id", (req, res) => {
  const user_id = req.params.user_id;
  const sql = `
    SELECT 
      COUNT(*) as total_words,
      COUNT(DISTINCT surah_key) as surah_count,
      surah_key,
      sm.surah_name,
      COUNT(*) as words_per_surah
    FROM memorized_words m
    LEFT JOIN surah_mapping sm ON m.surah_key = sm.surah_key  
    WHERE m.user_id = ?
    GROUP BY surah_key, sm.surah_name
    ORDER BY words_per_surah DESC
  `;
  
  db.query(sql, [user_id], (err, results) => {
    if (err) return res.status(500).json({ message: "Error DB", error: err });
    
    const totalWords = results.reduce((sum, item) => sum + item.words_per_surah, 0);
    
    res.json({
      total_words: totalWords,
      surah_count: results.length,
      breakdown: results
    });
  });
});

export default router;