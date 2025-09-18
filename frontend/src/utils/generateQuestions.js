// src/utils/quiz/quizGenerator.js
import dataSurah from "../data/dataSurah";

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

/**
 * Fungsi untuk membuat soal pilihan ganda
 * @param {Object} surahData - Data surah yang digunakan
 * @param {Number} id - ID soal
 * @returns {Object} Objek soal pilihan ganda
 */
export function generateMultipleChoiceQuestion(surahData, id) {
  // Ambil kata2 unik dari surah
  let uniqueWords = [...new Set(surahData.words.map(w => w.arab))];
  
  // Pilih kata acak dari surah
  let wordObj = surahData.words[Math.floor(Math.random() * surahData.words.length)];
  
  // Buat opsi jawaban
  let options = shuffle([
    wordObj.meaning,
    ...uniqueWords
      .filter(w => w !== wordObj.arab)
      .slice(0, 3) // ambil 3 kata random lain
      .map(w => {
        const foundWord = surahData.words.find(obj => obj.arab === w);
        return foundWord ? foundWord.meaning : "";
      })
      .filter(meaning => meaning) // filter empty meanings
  ]);

  // Pastikan ada cukup opsi
  while (options.length < 4) {
    options.push(`Opsi ${options.length + 1}`);
  }

  return {
    id,
    type: "multiple-choice",
    question: `Apa arti dari kata '${wordObj.arab}'?`,
    options,
    correct: wordObj.meaning
  };
}

/**
 * Fungsi untuk membuat soal mencocokkan kata
 * @param {Object} surahData - Data surah yang digunakan
 * @param {Number} id - ID soal
 * @returns {Object} Objek soal mencocokkan kata
 */
export function generateMatchQuestion(surahData, id) {
  // Gunakan id sebagai seed untuk memastikan soal berbeda
  const seed = id * 1000;
  
  // Ambil kata-kata dari surah dan acak dengan seed
  const shuffledWords = [...surahData.words].sort(() => {
    // Gunakan seed untuk menghasilkan pengacakan yang konsisten per id
    const random = Math.sin(seed + Math.random()) * 10000;
    return random - Math.floor(random);
  });
  
  // Ambil 4 kata acak dari surah (atau kurang jika tidak cukup)
  const pairCount = Math.min(4, surahData.words.length);
  const pairs = shuffledWords.slice(0, pairCount);
  
  return {
    id,
    type: "match",
    question: "Cocokkan kata Arab dengan artinya:",
    pairs: pairs.map(word => ({
      arab: word.arab,
      meaning: word.meaning,
      ayat: word.ayat,
      audio: word.audio // Tambahkan audio ke setiap pasangan
    }))
  };
}

/**
 * Fungsi utama untuk menghasilkan kuis
 * @param {String} surah - Nama surah yang digunakan
 * @param {Number} jumlahSoal - Jumlah soal yang diinginkan
 * @returns {Array} Array berisi soal-soal kuis
 */
export function generateQuiz(surah, jumlahSoal = 5) {
  const surahData = dataSurah[surah];
  if (!surahData) return [];

  let questions = [];

  for (let i = 0; i < jumlahSoal; i++) {
    // Tentukan jenis soal secara acak (pilihan ganda atau mencocokkan)
    const questionType = Math.random() > 0.5 ? "multiple-choice" : "match";
    
    if (questionType === "multiple-choice") {
      questions.push(generateMultipleChoiceQuestion(surahData, i + 1));
    } else {
      questions.push(generateMatchQuestion(surahData, i + 1));
    }
  }

  return questions;
}

// Fungsi untuk menghasilkan kuis khusus pilihan ganda saja
export function generateMultipleChoiceQuiz(surah, jumlahSoal = 5) {
  const surahData = dataSurah[surah];
  if (!surahData) return [];

  let questions = [];
  for (let i = 0; i < jumlahSoal; i++) {
    questions.push(generateMultipleChoiceQuestion(surahData, i + 1));
  }
  
  return questions;
}

// Fungsi untuk menghasilkan kuis khusus mencocokkan kata saja
export function generateMatchQuiz(surah, jumlahSoal = 5) {
  const surahData = dataSurah[surah];
  if (!surahData) return [];

  // Pastikan jumlah soal tidak melebihi jumlah kata yang tersedia
  const maxQuestions = Math.min(jumlahSoal, Math.floor(surahData.words.length / 4));
  const actualQuestionCount = Math.max(1, maxQuestions);
  
  let questions = [];
  for (let i = 0; i < actualQuestionCount; i++) {
    questions.push(generateMatchQuestion(surahData, i + 1));
  }
  
  return questions;
}
