const express = require('express');
const router = express.Router();
const pool = require('../db');

// Endpoint untuk mengambil kata-kata yang dihafal
router.get('/api/memorized-words', async (req, res) => {
  try {
    // Ganti dengan user_id yang sesuai (dari autentikasi)
    const userId = req.user?.id || 1; 
    
    const query = `
      SELECT m.*, s.name as surah
      FROM memorized_words m
      JOIN surahs s ON m.surah_id = s.id
      WHERE m.user_id = $1
      ORDER BY m.created_at DESC
    `;
    
    const result = await pool.query(query, [userId]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Endpoint untuk mengambil skor
router.get('/api/scores', async (req, res) => {
  try {
    // Ganti dengan user_id yang sesuai (dari autentikasi)
    const userId = req.user?.id || 1;
    
    const query = `
      SELECT s.name as surah, sc.score
      FROM scores sc
      JOIN surahs s ON sc.surah_id = s.id
      WHERE sc.user_id = $1
      ORDER BY sc.score DESC
    `;
    
    const result = await pool.query(query, [userId]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Endpoint untuk menyimpan kata yang dihafal
router.post('/api/memorized-words', async (req, res) => {
  try {
    const { arab, meaning, surah_id, audio } = req.body;
    const userId = req.user?.id || 1;
    
    const query = `
      INSERT INTO memorized_words (user_id, surah_id, arab, meaning, audio)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `;
    
    const result = await pool.query(query, [userId, surah_id, arab, meaning, audio]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Endpoint untuk menyimpan skor
router.post('/api/scores', async (req, res) => {
  try {
    const { surah_id, score } = req.body;
    const userId = req.user?.id || 1;
    
    // Cek apakah sudah ada skor untuk surah ini
    const checkQuery = `
      SELECT * FROM scores
      WHERE user_id = $1 AND surah_id = $2
    `;
    
    const checkResult = await pool.query(checkQuery, [userId, surah_id]);
    
    if (checkResult.rows.length > 0) {
      // Update skor jika lebih tinggi dari yang ada
      const updateQuery = `
        UPDATE scores
        SET score = GREATEST(score, $1)
        WHERE user_id = $2 AND surah_id = $3
        RETURNING *
      `;
      
      const updateResult = await pool.query(updateQuery, [score, userId, surah_id]);
      res.json(updateResult.rows[0]);
    } else {
      // Tambahkan skor baru
      const insertQuery = `
        INSERT INTO scores (user_id, surah_id, score)
        VALUES ($1, $2, $3)
        RETURNING *
      `;
      
      const insertResult = await pool.query(insertQuery, [userId, surah_id, score]);
      res.status(201).json(insertResult.rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
