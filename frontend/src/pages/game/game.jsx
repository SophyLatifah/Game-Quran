import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { generateQuiz } from "../../utils/generateQuestions";
import dataSurah from "../../data/dataSurah"; 

// Komponen untuk menampilkan soal pilihan ganda
const MultipleChoiceQuestion = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionClick = (option) => {
    if (isAnswered) return;
    
    setSelectedOption(option);
    setIsAnswered(true);
    
    // Beri waktu untuk animasi sebelum pindah ke soal berikutnya
    setTimeout(() => {
      onAnswer(option === question.correct);
    }, 1000);
  };

  return (
    <div className="mb-6 p-4 bg-purple-700 rounded-lg shadow-md">
      <p className="mb-4 text-white font-semibold">{question.question}</p>
      <ul className="space-y-2">
        {question.options.map((opt, i) => (
          <li
            key={i}
            onClick={() => handleOptionClick(opt)}
            className={`p-3 rounded-lg cursor-pointer transition-all ${
              isAnswered && opt === question.correct
                ? "bg-green-500 text-white"
                : isAnswered && opt === selectedOption
                ? "bg-red-500 text-white"
                : selectedOption === opt
                ? "bg-purple-500 text-white"
                : "bg-purple-600 hover:bg-purple-500 text-white"
            }`}
          >
            {opt}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Komponen untuk menampilkan soal mencocokkan kata
const MatchQuestion = ({ question, onAnswer }) => {
  const [selectedPair, setSelectedPair] = useState({ arab: null, meaning: null });
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [shuffledArabs, setShuffledArabs] = useState([]);
  const [shuffledMeanings, setShuffledMeanings] = useState([]);

  useEffect(() => {
    // Acak urutan kata Arab dan artinya
    setShuffledArabs([...question.pairs].map(p => p.arab));
    setShuffledMeanings([...question.pairs].map(p => p.meaning).sort(() => Math.random() - 0.5));
    setMatchedPairs([]);
    setSelectedPair({ arab: null, meaning: null });
  }, [question]);

  const handleArabClick = (arab) => {
    if (matchedPairs.find(p => p.arab === arab)) return;
    setSelectedPair(prev => ({ ...prev, arab }));
  };

  const handleMeaningClick = (meaning) => {
    if (matchedPairs.find(p => p.meaning === meaning)) return;
    setSelectedPair(prev => ({ ...prev, meaning }));
  };

  useEffect(() => {
    // Cek jika keduanya sudah dipilih
    if (selectedPair.arab && selectedPair.meaning) {
      // Cek apakah pasangan benar
      const isCorrect = question.pairs.some(
        p => p.arab === selectedPair.arab && p.meaning === selectedPair.meaning
      );

      if (isCorrect) {
        // Tambahkan ke pasangan yang sudah cocok
        setMatchedPairs(prev => [...prev, { ...selectedPair }]);
      }

      // Reset pilihan
      setTimeout(() => {
        setSelectedPair({ arab: null, meaning: null });
      }, 500);

      // Jika semua sudah dicocokkan, lanjut ke soal berikutnya
      if (matchedPairs.length + (isCorrect ? 1 : 0) === question.pairs.length) {
        setTimeout(() => {
          onAnswer(true);
        }, 1000);
      }
    }
  }, [selectedPair]);

  return (
    <div className="mb-6 p-4 bg-purple-700 rounded-lg shadow-md">
      <p className="mb-4 text-white font-semibold">{question.question}</p>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          {shuffledArabs.map((arab, i) => {
            const isMatched = matchedPairs.find(p => p.arab === arab);
            return (
              <div
                key={`arab-${i}`}
                onClick={() => !isMatched && handleArabClick(arab)}
                className={`p-3 rounded-lg cursor-pointer text-center ${
                  isMatched 
                    ? "bg-green-500 text-white" 
                    : selectedPair.arab === arab
                    ? "bg-blue-500 text-white"
                    : "bg-purple-600 hover:bg-purple-500 text-white"
                }`}
              >
                {arab}
              </div>
            );
          })}
        </div>
        
        <div className="space-y-2">
          {shuffledMeanings.map((meaning, i) => {
            const isMatched = matchedPairs.find(p => p.meaning === meaning);
            return (
              <div
                key={`meaning-${i}`}
                onClick={() => !isMatched && handleMeaningClick(meaning)}
                className={`p-3 rounded-lg cursor-pointer ${
                  isMatched 
                    ? "bg-green-500 text-white" 
                    : selectedPair.meaning === meaning
                    ? "bg-blue-500 text-white"
                    : "bg-purple-600 hover:bg-purple-500 text-white"
                }`}
              >
                {meaning}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Game = () => {
  const { surah } = useParams();
  const [questions, setQuestions] = useState([]);
  const [visibleWords, setVisibleWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLearningDone, setIsLearningDone] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);

  const surahData = dataSurah[surah];
  const words = surahData?.words || [];

  useEffect(() => {
    if (words.length > 0) {
      setVisibleWords([{ arabic: words[0].arab, arti: words[0].meaning }]);
    }
    const quiz = generateQuiz(surah, 10);
    setQuestions(quiz);
    setCurrentQuestion(0);
    setScore(0);
    setGameCompleted(false);
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

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setGameCompleted(true);
    }
  };

  const resetGame = () => {
    setIsLearningDone(false);
    setCurrentIndex(0);
    setVisibleWords([{ arabic: words[0].arab, arti: words[0].meaning }]);
    setCurrentQuestion(0);
    setScore(0);
    setGameCompleted(false);
  };

  if (!surahData) {
    return (
      <div className="p-6 text-white">
        Surah <b>{surah}</b> tidak ditemukan di dataSurah.js
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Mobile container */}
      <div className="w-[375px] min-h-screen flex flex-col px-4 py-6 bg-[#30005A]">
        {!isLearningDone ? (
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold text-orange-400 mb-6">
              Cobalah untuk mengingat
            </h1>

            {/* list kata */}
            {visibleWords.map((w, idx) => (
              <div
                key={idx}
                className="bg-purple-700 rounded-xl p-4 w-full mb-4 text-center relative shadow-lg"
              >
                <p className="text-3xl mb-2">{w.arabic}</p>
                <p className="bg-purple-500 py-2 rounded text-lg">{w.arti}</p>
                <button className="absolute right-4 top-4 text-white">▶</button>
              </div>
            ))}

            <button
              onClick={handleNext}
              className={`mt-4 w-full py-3 rounded-lg text-white text-lg font-semibold shadow-md ${
                currentIndex < words.length - 1
                  ? "bg-sky-400"
                  : "bg-orange-500"
              }`}
            >
              {currentIndex < words.length - 1 ? "BERIKUTNYA" : "MULAI KUIS"}
            </button>
          </div>
        ) : gameCompleted ? (
          <div className="text-white text-center">
            <h1 className="text-2xl font-bold mb-4">Kuis Selesai!</h1>
            <div className="bg-purple-700 rounded-xl p-6 mb-6">
              <p className="text-xl mb-2">Skor Kamu:</p>
              <p className="text-4xl font-bold text-yellow-400">{score} / {questions.length}</p>
              <p className="mt-4">
                {score === questions.length 
                  ? "Sempurna! Kamu hebat!" 
                  : score >= questions.length / 2 
                  ? "Bagus! Terus berlatih ya!" 
                  : "Jangan menyerah, coba lagi!"}
              </p>
            </div>
            <button
              onClick={resetGame}
              className="mt-4 w-full py-3 rounded-lg bg-orange-500 text-white text-lg font-semibold shadow-md"
            >
              ULANGI LAGI
            </button>
          </div>
        ) : (
          <div className="text-white">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold">
                Kuis Surah {surahData.title}
              </h1>
              <p className="bg-purple-600 px-3 py-1 rounded-full">
                {currentQuestion + 1}/{questions.length}
              </p>
            </div>
            
            {questions.length > 0 && currentQuestion < questions.length && (
              <>
                {questions[currentQuestion].type === "multiple-choice" && (
                  <MultipleChoiceQuestion 
                    question={questions[currentQuestion]} 
                    onAnswer={handleAnswer} 
                  />
                )}
                
                {questions[currentQuestion].type === "match" && (
                  <MatchQuestion 
                    question={questions[currentQuestion]} 
                    onAnswer={handleAnswer} 
                  />
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
