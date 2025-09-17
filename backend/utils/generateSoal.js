// utils/generateSoal.js
export function generateQuiz(surat, jumlah) {
  const soal = [];
  for (let i = 1; i <= jumlah; i++) {
    soal.push({
      id: i,
      tipe: "pilihan_ganda",
      pertanyaan: `Apa arti kata dalam surat ${surat}, soal ke-${i}?`,
      pilihan: ["A", "B", "C", "D"],
      jawaban: "A"
    });
  }
  return soal;
}
