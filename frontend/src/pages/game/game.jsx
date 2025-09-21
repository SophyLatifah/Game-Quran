import { useParams } from "react-router-dom";
import { useState, useEffect, useRef, useMemo } from "react";
import { generateQuiz } from "../../utils/generateQuestions";
import dataSurah from "../../data/dataSurah"; 
import { Link } from "react-router-dom";
// import axios from "axios";

// audio
import Benar from "../../assets/audio/benar.mp3";
import Salah from "../../assets/audio/salah.mp3";


// Komponen untuk tombol audio
const AudioButton = ({ audioSrc }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const handleEnded = () => setIsPlaying(false);
    const audioEl = audioRef.current;
    if (audioEl) {
      audioEl.addEventListener('ended', handleEnded);
    }
    return () => {
      if (audioEl) {
        audioEl.removeEventListener('ended', handleEnded);
      }
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} src={audioSrc} />
      <button 
        onClick={playAudio} 
        className={`w-10 h-10 rounded-full flex items-center justify-center ${isPlaying ? 'bg-orange-500' : 'bg-purple-500'}`}
      >
        {isPlaying ? '■' : '▶'}
      </button>
    </>
  );
};

// Komponen untuk menampilkan soal pilihan ganda
const MultipleChoiceQuestion = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const correctAudioRef = useRef(null);
  const wrongAudioRef = useRef(null);

  useEffect(() => {
    setSelectedOption(null);
    setIsAnswered(false);
  }, [question]);

  const handleOptionClick = (option) => {
    if (isAnswered) return;
    
    setSelectedOption(option);
    setIsAnswered(true);
    
    const isCorrect = option === question.correct;
    if (isCorrect) {
      correctAudioRef.current?.play();
    } else {
      wrongAudioRef.current?.play();
    }

    onAnswer(isCorrect);
  };

  return (
    <div className="mb-6 p-4 bg-purple-700 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <p className="text-white font-semibold">{question.question}</p>
        {question.audio && <AudioButton audioSrc={question.audio} />}
      </div>
      
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
      
      <audio ref={correctAudioRef} src="https://assets.mixkit.co/sfx/preview/mixkit-correct-answer-tone-2870.mp3" />
      <audio ref={wrongAudioRef} src="https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-notification-946.mp3" />
    </div>
  );
};

// Komponen untuk menampilkan soal mencocokkan kata
const MatchQuestion = ({ question, onAnswer }) => {
  const [selectedPair, setSelectedPair] = useState({ arab: null, meaning: null });
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [shuffledArabs, setShuffledArabs] = useState([]);
  const [shuffledMeanings, setShuffledMeanings] = useState([]);
  
  const correctSoundRef = useRef(null);

  useEffect(() => {
    const arabItems = [...question.pairs].map(p => ({
      arab: p.arab,
      audio: p.audio
    }));
    
    const meaningItems = [...question.pairs].map(p => p.meaning);
    
    setShuffledArabs(shuffle([...arabItems]));
    setShuffledMeanings(shuffle([...meaningItems]));
    setMatchedPairs([]);
    setSelectedPair({ arab: null, meaning: null });
  }, [question]);

  const handleArabClick = (arab, audio) => {
    if (matchedPairs.find(p => p.arab === arab)) return;
    setSelectedPair({ arab, audio, meaning: selectedPair.meaning });
  };

  const handleMeaningClick = (meaning) => {
    if (matchedPairs.find(p => p.meaning === meaning)) return;
    setSelectedPair({ ...selectedPair, meaning });
  };

  useEffect(() => {
    if (selectedPair.arab && selectedPair.meaning) {
      const isCorrect = question.pairs.some(
        p => p.arab === selectedPair.arab && p.meaning === selectedPair.meaning
      );

      if (isCorrect) {
        correctSoundRef.current?.play();
        setMatchedPairs(prev => {
          const next = [...prev, { ...selectedPair }];
          if (next.length === question.pairs.length) {
            // Semua pasangan sudah dicocokkan, beri tahu parent
            onAnswer(true);
          }
          return next;
        });
        setTimeout(() => {
          setSelectedPair({ arab: null, meaning: null, audio: null });
        }, 500);
      } else {
        setTimeout(() => {
          setSelectedPair({ arab: null, meaning: null, audio: null });
        }, 800);
      }
    }
  }, [selectedPair, question.pairs, onAnswer]);

  const playAudio = (audioSrc) => {
    if (!audioSrc) return;
    const audio = new Audio(audioSrc);
    audio.play().catch(() => {});
  };

  return (
    <div className="mb-6 p-4 bg-purple-700 rounded-lg shadow-md">
      <p className="mb-4 text-white font-semibold">{question.question}</p>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          {shuffledArabs.map((item, i) => {
            const isMatched = matchedPairs.find(p => p.arab === item.arab);
            const isSelected = selectedPair.arab === item.arab;
            
            return (
              <div
                key={`arab-${i}`}
                onClick={() => !isMatched && handleArabClick(item.arab, item.audio)}
                className={`p-3 rounded-lg cursor-pointer text-center relative ${
                  isMatched 
                    ? "bg-green-500 text-white" 
                    : isSelected
                    ? "bg-blue-500 text-white"
                    : "bg-purple-600 hover:bg-purple-500 text-white"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="flex-grow text-center">{item.arab}</span>
                  {item.audio && (
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        playAudio(item.audio);
                      }}
                      className="ml-2 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center"
                    >
                      ▶
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="space-y-2">
          {shuffledMeanings.map((meaning, i) => {
            const isMatched = matchedPairs.find(p => p.meaning === meaning);
            const isSelected = selectedPair.meaning === meaning;
            
            return (
              <div
                key={`meaning-${i}`}
                onClick={() => !isMatched && handleMeaningClick(meaning)}
                className={`p-3 rounded-lg cursor-pointer ${
                  isMatched 
                    ? "bg-green-500 text-white" 
                    : isSelected
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

      
      <audio ref={correctSoundRef} src="https://assets.mixkit.co/sfx/preview/mixkit-correct-answer-tone-2870.mp3" />
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
  const [canProceed, setCanProceed] = useState(false);
  const successAudioRef = useRef(null);

  const surahData = dataSurah[surah];
  const words = useMemo(() => surahData?.words || [], [surahData]);

  useEffect(() => {
    if (words.length > 0) {
      setVisibleWords([{ 
        arabic: words[0].arab, 
        arti: words[0].meaning,
        audio: words[0].audio
      }]);
    } else {
      setVisibleWords([]);
    }
    const quiz = generateQuiz(surah, 10);
    setQuestions(quiz);
    setCurrentQuestion(0);
    setScore(0);
    setGameCompleted(false);
    setCanProceed(false);
  }, [surah, words]);

  const handleNext = () => {
    if (currentIndex < words.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setVisibleWords(
        words.slice(0, nextIndex + 1).map((w) => ({
          arabic: w.arab,
          arti: w.meaning,
          audio: w.audio
        }))
      );
    } else {
      setIsLearningDone(true);
      successAudioRef.current?.play();
    }
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCanProceed(true);
  };

  const goToNextQuestion = () => {
    if (!canProceed) return;
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setCanProceed(false);
    } else {
      setGameCompleted(true);
      successAudioRef.current?.play();
    }
  };

  const resetGame = () => {
    setIsLearningDone(false);
    setCurrentIndex(0);
    setVisibleWords([{ 
      arabic: words[0].arab, 
      arti: words[0].meaning,
      audio: words[0].audio
    }]);
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
      <div className="w-[375px] min-h-screen flex flex-col px-4 py-6 bg-[#30005A]">
        {!isLearningDone ? (
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold text-orange-400 mb-6">
              Cobalah untuk mengingat
            </h1>

            {visibleWords.map((w, idx) => (
              <div
                key={idx}
                className="bg-purple-700 rounded-xl p-4 w-full mb-4 text-center relative shadow-lg
                text-white"
              >
                <p className="text-3xl mb-2">{w.arabic}</p>
                <p className="bg-purple-500 py-2 rounded text-lg">{w.arti}</p>
                {w.audio && (
                  <div className="absolute right-4 top-4">
                    <AudioButton audioSrc={w.audio} />
                  </div>
                )}
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
            <Link to="/dashboard">
              <button className="mt-4 w-full py-3 rounded-lg bg-orange-500 text-white text-lg font-semibold shadow-md">
                SELESAI
              </button>
            </Link>
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
                    key={`mcq-${questions[currentQuestion].id}`}
                    question={questions[currentQuestion]} 
                    onAnswer={handleAnswer} 
                  />
                )}
                
                {questions[currentQuestion].type === "match" && (
                  <MatchQuestion 
                    key={`match-${questions[currentQuestion].id}`}
                    question={questions[currentQuestion]} 
                    onAnswer={handleAnswer} 
                  />
                )}

                {canProceed && (
                  <button
                    onClick={goToNextQuestion}
                    className="mt-4 w-full py-3 rounded-lg bg-orange-500 text-white text-lg font-semibold shadow-md"
                  >
                    LANJUTKAN
                  </button>
                )}
              </>
            )}
          </div>
        )}
      </div>
      
      <audio ref={successAudioRef} src="https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3" />
    </div>
  );
};

export default Game;

function shuffle(array) {
  const newArray = [...array];
  return newArray.sort(() => Math.random() - 0.5);
}
