import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { generateQuiz } from "../../utils/generateQuestions";
import dataSurah from "../../data/dataSurah";

const Game = () => {
  const { surah } = useParams();
  const [questions, setQuestions] = useState([]);
  const [visibleWords, setVisibleWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLearningDone, setIsLearningDone] = useState(false);

  const surahData = dataSurah[surah]; // misalnya "an-nas" atau "al-falaq"
  const words = surahData?.words || [];

  useEffect(() => {
    if (words.length > 0) {
      // mapping biar konsisten dengan yang lama (arabic, arti)
      setVisibleWords([
        { arabic: words[0].arab, arti: words[0].meaning },
      ]);
    }
    const quiz = generateQuiz(surah, 5);
    setQuestions(quiz);
  }, [surah]);

  const handleNext = () => {
    if (currentIndex < words.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setVisibleWords(
        words.slice(0, nextIndex + 1).map((w) => ({
          arabic: w.arab,
          arti: w.meaning,
        }))
      );
    } else {
      setIsLearningDone(true);
    }
  };

  if (!surahData) {
    return (
      <div className="p-6 text-white">
        Surah <b>{surah}</b> tidak ditemukan di dataSurah.js
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#30005A]">
      <div className="w-[375px] min-h-screen flex flex-col px-4 py-6">
        {!isLearningDone ? (
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold text-orange-400 mb-6">
              Cobalah untuk mengingat
            </h1>

            {/* list kata yang sudah muncul */}
            {visibleWords.map((w, idx) => (
              <div
                key={idx}
                className="bg-purple-700 rounded-xl p-4 w-full mb-4 text-center relative"
              >
                <p className="text-3xl mb-2">{w.arabic}</p>
                <p className="bg-purple-500 py-2 rounded text-lg">{w.arti}</p>
                <button className="absolute right-4 top-4 text-white">▶</button>
              </div>
            ))}

            <button
              onClick={handleNext}
              className={`mt-4 w-full py-3 rounded-lg text-white text-lg font-semibold ${
                currentIndex < words.length - 1
                  ? "bg-sky-400"
                  : "bg-orange-500"
              }`}
            >
              {currentIndex < words.length - 1
                ? "BERIKUTNYA"
                : "MULAI KUIS"}
            </button>
          </div>
        ) : (
          <div className="text-white">
            <h1 className="text-xl font-bold mb-4">
              Kuis Surah {surahData.title}
            </h1>
            {questions.map((q) => (
              <div key={q.id} className="mb-6 p-4 bg-purple-700 rounded-lg">
                <p className="mb-2">{q.question}</p>
                {q.type === "multiple-choice" && (
                  <ul>
                    {q.options.map((opt, i) => (
                      <li
                        key={i}
                        className="hover:bg-purple-500 cursor-pointer p-2 rounded"
                      >
                        {opt}
                      </li>
                    ))}
                  </ul>
                )}

                {q.type === "underline" && (
                  <ul>
                    {q.options.map((opt, i) => (
                      <li
                        key={i}
                        className="hover:bg-purple-500 cursor-pointer p-2 rounded"
                      >
                        {opt}
                      </li>
                    ))}
                  </ul>
                )}

                {q.type === "match" && (
                  <div>
                    <p>[Tampilan matching Arab ↔ arti nanti kita kembangkan]</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
