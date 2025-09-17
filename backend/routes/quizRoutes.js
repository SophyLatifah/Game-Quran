import express from "express";
import { generateQuiz } from "../utils/generateSoal.js";

const router = express.Router();

// Route generate soal
router.get("/:surat/:jumlah", (req, res) => {
  const { surat, jumlah } = req.params;

  try {
    const soal = generateQuiz(surat, parseInt(jumlah, 10));
    res.json(soal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
