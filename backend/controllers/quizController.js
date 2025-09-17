import db from "../db.js";
import { generateSoal } from "../utils/generateSoal.js";

export const getQuiz = (req, res) => {
  const { surat, jumlah } = req.params;

  db.query("SELECT kata FROM perkata WHERE surat = ?", [surat], (err, rows) => {
    if (err) return res.status(500).json({ error: err });
    const kataArray = rows.map(r => r.kata);
    const soal = generateSoal(surat, parseInt(jumlah), kataArray);
    res.json(soal);
  });
};

export const saveResult = (req, res) => {
  const { peserta_id, skor } = req.body;
  db.query("INSERT INTO jawaban (peserta_id, soal_id, jawaban_user, benar) VALUES ?", [], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Result saved" });
  });
};
