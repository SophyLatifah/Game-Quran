// src/utils/quiz/quizGenerator.js
import dataSurah from "../data/dataSurah";

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

export function generateQuiz(surah, jumlahSoal = 5) {
  const surahData = dataSurah[surah];
  if (!surahData) return [];

  // Ambil kata2 unik dari surah
  let uniqueWords = [...new Set(surahData.words.map(w => w.arab))];

  let questions = [];

  for (let i = 0; i < jumlahSoal; i++) {
    let randomType = ["multiple-choice", "match", "underline"][Math.floor(Math.random() * 3)];
    let wordObj = surahData.words[Math.floor(Math.random() * surahData.words.length)];

    if (randomType === "multiple-choice") {
      // buat opsi jawaban
      let options = shuffle([
        wordObj.meaning,
        ...uniqueWords
          .filter(w => w !== wordObj.arab)
          .slice(0, 3) // ambil 3 kata random lain
          .map(w => surahData.words.find(obj => obj.arab === w).meaning)
      ]);

      questions.push({
        id: i + 1,
        type: "multiple-choice",
        question: `Apa arti dari kata '${wordObj.arab}'?`,
        options,
        correct: wordObj.meaning
      });
    }

    if (randomType === "match") {
      // Matching arab <-> arti
      questions.push({
        id: i + 1,
        type: "match",
        question: "Cocokkan kata Arab dengan artinya:",
        pairs: shuffle(surahData.words.slice(0, 4)) // ambil 4 kata acak
      });
    }

    if (randomType === "underline") {
      questions.push({
        id: i + 1,
        type: "underline",
        question: `Pilih arti kata yang digarisbawahi dalam ayat: ${wordObj.ayat.replace(wordObj.arab, "__" + wordObj.arab + "__")}`,
        correct: wordObj.meaning,
        options: shuffle([
          wordObj.meaning,
          ...surahData.words
            .filter(w => w.arab !== wordObj.arab)
            .slice(0, 3)
            .map(w => w.meaning)
        ])
      });
    }
  }

  return questions;
}
