// import { useParams } from "react-router-dom";
// import { useState, useEffect, useRef, useMemo } from "react";
// import { generateQuiz } from "../../utils/generateQuestions";
// import dataSurah from "../../data/dataSurah"; 
// import { Link } from "react-router-dom";
// // import axios from "axios";

// // audio
// import Benar from "../../assets/audio/benar.mp3";
// import Salah from "../../assets/audio/salah.mp3";


// // Komponen untuk tombol audio
// const AudioButton = ({ audioSrc }) => {
//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const playAudio = () => {
//     if (audioRef.current) {
//       if (isPlaying) {
//         audioRef.current.pause();
//         audioRef.current.currentTime = 0;
//       } else {
//         audioRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   useEffect(() => {
//     const handleEnded = () => setIsPlaying(false);
//     const audioEl = audioRef.current;
//     if (audioEl) {
//       audioEl.addEventListener('ended', handleEnded);
//     }
//     return () => {
//       if (audioEl) {
//         audioEl.removeEventListener('ended', handleEnded);
//       }
//     };
//   }, []);

//   return (
//     <>
//       <audio ref={audioRef} src={audioSrc} />
//       <button 
//         onClick={playAudio} 
//         className={`w-10 h-10 rounded-full flex items-center justify-center ${isPlaying ? 'bg-orange-500' : 'bg-purple-500'}`}
//       >
//         {isPlaying ? '■' : '▶'}
//       </button>
//     </>
//   );
// };

// // Komponen untuk menampilkan soal pilihan ganda
// const MultipleChoiceQuestion = ({ question, onAnswer }) => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isAnswered, setIsAnswered] = useState(false);
//   const correctAudioRef = useRef(null);
//   const wrongAudioRef = useRef(null);

//   useEffect(() => {
//     setSelectedOption(null);
//     setIsAnswered(false);
//   }, [question]);

//   const handleOptionClick = (option) => {
//     if (isAnswered) return;
    
//     setSelectedOption(option);
//     setIsAnswered(true);
    
//     const isCorrect = option === question.correct;
//     if (isCorrect) {
//       correctAudioRef.current?.play();
//     } else {
//       wrongAudioRef.current?.play();
//     }

//     onAnswer(isCorrect);
//   };

//   return (
//     <div className="mb-6 p-4 bg-purple-700 rounded-lg shadow-md">
//       <div className="flex justify-between items-center mb-4">
//         <p className="text-white font-semibold">{question.question}</p>
//         {question.audio && <AudioButton audioSrc={question.audio} />}
//       </div>
      
//       <ul className="space-y-2">
//         {question.options.map((opt, i) => (
//           <li
//             key={i}
//             onClick={() => handleOptionClick(opt)}
//             className={`p-3 rounded-lg cursor-pointer transition-all ${
//               isAnswered && opt === question.correct
//                 ? "bg-green-500 text-white"
//                 : isAnswered && opt === selectedOption
//                 ? "bg-red-500 text-white"
//                 : selectedOption === opt
//                 ? "bg-purple-500 text-white"
//                 : "bg-purple-600 hover:bg-purple-500 text-white"
//             }`}
//           >
//             {opt}
//           </li>
//         ))}
//       </ul>
      
//       <audio ref={correctAudioRef} src="https://assets.mixkit.co/sfx/preview/mixkit-correct-answer-tone-2870.mp3" />
//       <audio ref={wrongAudioRef} src="https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-notification-946.mp3" />
//     </div>
//   );
// };

// // Komponen untuk menampilkan soal mencocokkan kata
// const MatchQuestion = ({ question, onAnswer }) => {
//   const [selectedPair, setSelectedPair] = useState({ arab: null, meaning: null });
//   const [matchedPairs, setMatchedPairs] = useState([]);
//   const [shuffledArabs, setShuffledArabs] = useState([]);
//   const [shuffledMeanings, setShuffledMeanings] = useState([]);
  
//   const correctSoundRef = useRef(null);

//   useEffect(() => {
//     const arabItems = [...question.pairs].map(p => ({
//       arab: p.arab,
//       audio: p.audio
//     }));
    
//     const meaningItems = [...question.pairs].map(p => p.meaning);
    
//     setShuffledArabs(shuffle([...arabItems]));
//     setShuffledMeanings(shuffle([...meaningItems]));
//     setMatchedPairs([]);
//     setSelectedPair({ arab: null, meaning: null });
//   }, [question]);

//   const handleArabClick = (arab, audio) => {
//     if (matchedPairs.find(p => p.arab === arab)) return;
//     setSelectedPair({ arab, audio, meaning: selectedPair.meaning });
//   };

//   const handleMeaningClick = (meaning) => {
//     if (matchedPairs.find(p => p.meaning === meaning)) return;
//     setSelectedPair({ ...selectedPair, meaning });
//   };

//   useEffect(() => {
//     if (selectedPair.arab && selectedPair.meaning) {
//       const isCorrect = question.pairs.some(
//         p => p.arab === selectedPair.arab && p.meaning === selectedPair.meaning
//       );

//       if (isCorrect) {
//         correctSoundRef.current?.play();
//         setMatchedPairs(prev => {
//           const next = [...prev, { ...selectedPair }];
//           if (next.length === question.pairs.length) {
//             // Semua pasangan sudah dicocokkan, beri tahu parent
//             onAnswer(true);
//           }
//           return next;
//         });
//         setTimeout(() => {
//           setSelectedPair({ arab: null, meaning: null, audio: null });
//         }, 500);
//       } else {
//         setTimeout(() => {
//           setSelectedPair({ arab: null, meaning: null, audio: null });
//         }, 800);
//       }
//     }
//   }, [selectedPair, question.pairs, onAnswer]);

//   const playAudio = (audioSrc) => {
//     if (!audioSrc) return;
//     const audio = new Audio(audioSrc);
//     audio.play().catch(() => {});
//   };

//   return (
//     <div className="mb-6 p-4 bg-purple-700 rounded-lg shadow-md">
//       <p className="mb-4 text-white font-semibold">{question.question}</p>
      
//       <div className="grid grid-cols-2 gap-4">
//         <div className="space-y-2">
//           {shuffledArabs.map((item, i) => {
//             const isMatched = matchedPairs.find(p => p.arab === item.arab);
//             const isSelected = selectedPair.arab === item.arab;
            
//             return (
//               <div
//                 key={`arab-${i}`}
//                 onClick={() => !isMatched && handleArabClick(item.arab, item.audio)}
//                 className={`p-3 rounded-lg cursor-pointer text-center relative ${
//                   isMatched 
//                     ? "bg-green-500 text-white" 
//                     : isSelected
//                     ? "bg-blue-500 text-white"
//                     : "bg-purple-600 hover:bg-purple-500 text-white"
//                 }`}
//               >
//                 <div className="flex justify-between items-center">
//                   <span className="flex-grow text-center">{item.arab}</span>
//                   {item.audio && (
//                     <button 
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         playAudio(item.audio);
//                       }}
//                       className="ml-2 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center"
//                     >
//                       ▶
//                     </button>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
        
//         <div className="space-y-2">
//           {shuffledMeanings.map((meaning, i) => {
//             const isMatched = matchedPairs.find(p => p.meaning === meaning);
//             const isSelected = selectedPair.meaning === meaning;
            
//             return (
//               <div
//                 key={`meaning-${i}`}
//                 onClick={() => !isMatched && handleMeaningClick(meaning)}
//                 className={`p-3 rounded-lg cursor-pointer ${
//                   isMatched 
//                     ? "bg-green-500 text-white" 
//                     : isSelected
//                     ? "bg-blue-500 text-white"
//                     : "bg-purple-600 hover:bg-purple-500 text-white"
//                 }`}
//               >
//                 {meaning}
//               </div>
//             );
//           })}
//         </div>
//       </div>

      
//       <audio ref={correctSoundRef} src="https://assets.mixkit.co/sfx/preview/mixkit-correct-answer-tone-2870.mp3" />
//     </div>
//   );
// };

// const Game = () => {
//   const { surah } = useParams();
//   const [questions, setQuestions] = useState([]);
//   const [visibleWords, setVisibleWords] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isLearningDone, setIsLearningDone] = useState(false);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [gameCompleted, setGameCompleted] = useState(false);
//   const [canProceed, setCanProceed] = useState(false);
//   const successAudioRef = useRef(null);

//   const surahData = dataSurah[surah];
//   const words = useMemo(() => surahData?.words || [], [surahData]);

//   useEffect(() => {
//     if (words.length > 0) {
//       setVisibleWords([{ 
//         arabic: words[0].arab, 
//         arti: words[0].meaning,
//         audio: words[0].audio
//       }]);
//     } else {
//       setVisibleWords([]);
//     }
//     const quiz = generateQuiz(surah, 10);
//     setQuestions(quiz);
//     setCurrentQuestion(0);
//     setScore(0);
//     setGameCompleted(false);
//     setCanProceed(false);
//   }, [surah, words]);

//   const handleNext = () => {
//     if (currentIndex < words.length - 1) {
//       const nextIndex = currentIndex + 1;
//       setCurrentIndex(nextIndex);
//       setVisibleWords(
//         words.slice(0, nextIndex + 1).map((w) => ({
//           arabic: w.arab,
//           arti: w.meaning,
//           audio: w.audio
//         }))
//       );
//     } else {
//       setIsLearningDone(true);
//       successAudioRef.current?.play();
//     }
//   };

//   const handleAnswer = (isCorrect) => {
//     if (isCorrect) {
//       setScore(score + 1);
//     }
//     setCanProceed(true);
//   };

//   const goToNextQuestion = () => {
//     if (!canProceed) return;
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//       setCanProceed(false);
//     } else {
//       setGameCompleted(true);
//       successAudioRef.current?.play();
//     }
//   };

//   const resetGame = () => {
//     setIsLearningDone(false);
//     setCurrentIndex(0);
//     setVisibleWords([{ 
//       arabic: words[0].arab, 
//       arti: words[0].meaning,
//       audio: words[0].audio
//     }]);
//     setCurrentQuestion(0);
//     setScore(0);
//     setGameCompleted(false);
//   };

//   if (!surahData) {
//     return (
//       <div className="p-6 text-white">
//         Surah <b>{surah}</b> tidak ditemukan di dataSurah.js
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="w-[375px] min-h-screen flex flex-col px-4 py-6 bg-[#30005A]">
//         {!isLearningDone ? (
//           <div className="flex flex-col items-center">
//             <h1 className="text-xl font-bold text-orange-400 mb-6">
//               Cobalah untuk mengingat
//             </h1>

//             {visibleWords.map((w, idx) => (
//               <div
//                 key={idx}
//                 className="bg-purple-700 rounded-xl p-4 w-full mb-4 text-center relative shadow-lg
//                 text-white"
//               >
//                 <p className="text-3xl mb-2">{w.arabic}</p>
//                 <p className="bg-purple-500 py-2 rounded text-lg">{w.arti}</p>
//                 {w.audio && (
//                   <div className="absolute right-4 top-4">
//                     <AudioButton audioSrc={w.audio} />
//                   </div>
//                 )}
//               </div>
//             ))}

//             <button
//               onClick={handleNext}
//               className={`mt-4 w-full py-3 rounded-lg text-white text-lg font-semibold shadow-md ${
//                 currentIndex < words.length - 1
//                   ? "bg-sky-400"
//                   : "bg-orange-500"
//               }`}
//             >
//               {currentIndex < words.length - 1 ? "BERIKUTNYA" : "MULAI KUIS"}
//             </button>
//           </div>
//         ) : gameCompleted ? (
//           <div className="text-white text-center">
//             <h1 className="text-2xl font-bold mb-4">Kuis Selesai!</h1>
//             <div className="bg-purple-700 rounded-xl p-6 mb-6">
//               <p className="text-xl mb-2">Skor Kamu:</p>
//               <p className="text-4xl font-bold text-yellow-400">{score} / {questions.length}</p>
//               <p className="mt-4">
//                 {score === questions.length 
//                   ? "Sempurna! Kamu hebat!" 
//                   : score >= questions.length / 2 
//                   ? "Bagus! Terus berlatih ya!" 
//                   : "Jangan menyerah, coba lagi!"}
//               </p>
//             </div>
//             <button
//               onClick={resetGame}
//               className="mt-4 w-full py-3 rounded-lg bg-orange-500 text-white text-lg font-semibold shadow-md"
//             >
//               ULANGI LAGI
//             </button>
//             <Link to="/dashboard">
//               <button className="mt-4 w-full py-3 rounded-lg bg-orange-500 text-white text-lg font-semibold shadow-md">
//                 SELESAI
//               </button>
//             </Link>
//           </div>
//         ) : (
//           <div className="text-white">
//             <div className="flex justify-between items-center mb-4">
//               <h1 className="text-xl font-bold">
//                 Kuis Surah {surahData.title}
//               </h1>
//               <p className="bg-purple-600 px-3 py-1 rounded-full">
//                 {currentQuestion + 1}/{questions.length}
//               </p>
//             </div>
            
//             {questions.length > 0 && currentQuestion < questions.length && (
//               <>
//                 {questions[currentQuestion].type === "multiple-choice" && (
//                   <MultipleChoiceQuestion 
//                     key={`mcq-${questions[currentQuestion].id}`}
//                     question={questions[currentQuestion]} 
//                     onAnswer={handleAnswer} 
//                   />
//                 )}
                
//                 {questions[currentQuestion].type === "match" && (
//                   <MatchQuestion 
//                     key={`match-${questions[currentQuestion].id}`}
//                     question={questions[currentQuestion]} 
//                     onAnswer={handleAnswer} 
//                   />
//                 )}

//                 {canProceed && (
//                   <button
//                     onClick={goToNextQuestion}
//                     className="mt-4 w-full py-3 rounded-lg bg-orange-500 text-white text-lg font-semibold shadow-md"
//                   >
//                     LANJUTKAN
//                   </button>
//                 )}
//               </>
//             )}
//           </div>
//         )}
//       </div>
      
//       <audio ref={successAudioRef} src="https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3" />
//     </div>
//   );
// };

// export default Game;

// function shuffle(array) {
//   const newArray = [...array];
//   return newArray.sort(() => Math.random() - 0.5);
// }

import { useParams } from "react-router-dom";
import { useState, useEffect, useRef, useMemo } from "react";
import { generateQuiz } from "../../utils/generateQuestions";
import dataSurah from "../../data/dataSurah"; 
import { Link } from "react-router-dom";
import axios from "axios";

// Import local audio files
import correctSound from "../../assets/audio/benar.mp3";
import wrongSound from "../../assets/audio/salah.mp3";
import successSound from "../../assets/audio/berhasil.mp3";

// API Base URL
const API_BASE = "http://localhost:5000/api";

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

  // untuk mereset state saat soal berubah
  useEffect(() => {
    setSelectedOption(null);
    setIsAnswered(false);
  }, [question]);

  //
  const handleOptionClick = (option) => {
    if (isAnswered) return;
    
    setSelectedOption(option); // unutk menyimpan opsi yang dipilih
    setIsAnswered(true); // menandai bahwa soal sudah dijawab
    
    // cek jawaban benar atau salah
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
      
      {/* Local audio files */}
      <audio ref={correctAudioRef} src={correctSound} preload="auto" />
      <audio ref={wrongAudioRef} src={wrongSound} preload="auto" />
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
      
      {/* Local audio for match correct */}
      <audio ref={correctSoundRef} src={correctSound} preload="auto" />
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
  const [savingData, setSavingData] = useState(false);
  const [saveStatus, setSaveStatus] = useState("");
  const [memorizedWordsCount, setMemorizedWordsCount] = useState(0);
  
  // Audio refs for game events
  const successAudioRef = useRef(null);
  const learningCompleteAudioRef = useRef(null);

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
    setSavingData(false);
    setSaveStatus("");
    setMemorizedWordsCount(0);
  }, [surah, words]);

  // Play click sound for buttons - REMOVED (no click sound needed)

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
      // Play learning complete sound
      if (learningCompleteAudioRef.current) {
        learningCompleteAudioRef.current.play().catch(() => {});
      }
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
      // Play game complete success sound
      if (successAudioRef.current) {
        successAudioRef.current.play().catch(() => {});
      }
      handleGameComplete();
    }
  };

  // Handle game completion - save score and memorized words
  const handleGameComplete = async () => {
    try {
      setSavingData(true);
      setSaveStatus("Menyimpan hasil...");
      
      // Save score first
      await saveScore();
      
      // Save memorized words if score >= 50%
      if (score >= questions.length / 2) {
        const savedCount = await saveMemorizedWords();
        setMemorizedWordsCount(savedCount);
        
        if (savedCount > 0) {
          setSaveStatus(`Skor dan ${savedCount} kata baru berhasil disimpan!`);
        } else {
          setSaveStatus("Skor disimpan. Semua kata sudah tersimpan sebelumnya.");
        }
      } else {
        setSaveStatus("Skor disimpan. Score < 50%, kata tidak disimpan.");
      }
    } catch (error) {
      console.error('Error saving game data:', error);
      setSaveStatus("Error menyimpan data. Cek koneksi backend.");
    } finally {
      setSavingData(false);
      // Clear status after 5 seconds
      setTimeout(() => setSaveStatus(""), 5000);
    }
  };

  // Save score to backend
  const saveScore = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("userData"));
      const user_id = userData?.id || 1; // TODO: Get from auth system
      
      const surah_key = surah;
      
      const response = await axios.post(`${API_BASE}/score`, {
        user_id,
        surah_key,
        score,
        max_questions: questions.length
      });
      
      console.log('Score saved:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error saving score:', error);
      throw error;
    }
  };

  // Save memorized words to backend
  const saveMemorizedWords = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("userData"));
      const user_id = userData?.id || 1; // TODO: Get from auth system
      const surah_key = surah;
      
      // Save words that were shown in learning phase (up to 5 words)
      const wordsToSave = words.slice(0, Math.min(5, words.length));
      let savedCount = 0;
      
      for (const word of wordsToSave) {
        try {
          const response = await axios.post(`${API_BASE}/memorized`, {
            user_id,
            surah_key,
            arab: word.arab,
            meaning: word.meaning
          });
          
          // Count only if not duplicate
          if (!response.data.duplicate) {
            savedCount++;
          }
          
          console.log(`Saved word: ${word.arab} -> ${word.meaning}`);
        } catch (err) {
          console.error('Error saving individual word:', word.arab, err);
        }
      }
      
      console.log(`Total new memorized words saved: ${savedCount}`);
      return savedCount;
    } catch (error) {
      console.error('Error in saveMemorizedWords:', error);
      return 0;
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
    setCanProceed(false);
    setSaveStatus("");
    setMemorizedWordsCount(0);
  };

  if (!surahData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#30005A]">
        <div className="p-6 text-white text-center">
          <h1 className="text-xl font-bold mb-4">Surah Tidak Ditemukan</h1>
          <p className="mb-4">Surah <b>"{surah}"</b> tidak ditemukan di data.</p>
          {/* <p className="text-sm text-gray-300 mb-4">
            Pastikan nama surah sesuai dengan yang ada di dataSurah.js
          </p> */}
          <Link 
            to="/dashboard" 
            className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Kembali ke Dashboard
          </Link>
        </div>
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
                className="bg-purple-700 rounded-xl p-4 w-full mb-4 text-center relative shadow-lg text-white animate-fadeIn"
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
              className={`mt-4 w-full py-3 rounded-lg text-white text-lg font-semibold shadow-md transition-all transform hover:scale-105 active:scale-95 ${
                currentIndex < words.length - 1
                  ? "bg-sky-400 hover:bg-sky-500"
                  : "bg-orange-500 hover:bg-orange-600"
              }`}
            >
              {currentIndex < words.length - 1 ? "BERIKUTNYA" : "MULAI KUIS"}
            </button>
            
            {/* Learning Progress */}
            <div className="mt-4 w-full">
              <div className="flex justify-between text-white text-sm mb-2">
                <span>Progress Belajar</span>
                <span>{currentIndex + 1}/{words.length}</span>
              </div>
              <div className="w-full bg-purple-600 rounded-full h-2">
                <div 
                  className="bg-orange-400 h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${((currentIndex + 1) / words.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        ) : gameCompleted ? (
          <div className="text-white text-center animate-fadeIn">
            <h1 className="text-2xl font-bold mb-4">Kuis Selesai!</h1>
            
            {/* Score Display */}
            <div className="bg-purple-700 rounded-xl p-6 mb-6 transform transition-all duration-500 hover:scale-105">
              <p className="text-xl mb-2">Skor Kamu:</p>
              <p className="text-4xl font-bold text-yellow-400">{score} / {questions.length}</p>
              <p className="text-lg mt-2 text-gray-300">
                {Math.round((score / questions.length) * 100)}%
              </p>
              
              {/* Performance message */}
              <div className="mt-4 p-3 bg-purple-600 rounded-lg">
                <p className="mb-2">
                  {score === questions.length 
                    ? "Sempurna! Kamu luar biasa!" 
                    : score >= questions.length / 2 
                    ? "Bagus! Kata berhasil disimpan untuk hafalan!" 
                    : "Jangan menyerah! Coba lagi untuk menyimpan kata."}
                </p>
                
                {memorizedWordsCount > 0 && (
                  <p className="text-yellow-300 text-sm animate-pulse">
                    {memorizedWordsCount} kata baru ditambahkan ke hafalan
                  </p>
                )}
              </div>
              
              {/* Save Status */}
              {(savingData || saveStatus) && (
                <div className="mt-4 p-3 bg-purple-800 rounded-lg">
                  {savingData && (
                    <div className="flex items-center justify-center mb-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                      <span className="text-sm">Menyimpan data...</span>
                    </div>
                  )}
                  {saveStatus && (
                    <p className="text-sm text-yellow-300">{saveStatus}</p>
                  )}
                </div>
              )}
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={resetGame}
                disabled={savingData}
                className="w-full py-3 rounded-lg bg-orange-500 hover:bg-orange-600 disabled:bg-gray-500 text-white text-lg font-semibold shadow-md transition-all transform hover:scale-105 active:scale-95"
              >
                ULANGI LAGI
              </button>
              
              <Link to="/hafal">
                <button 
                  className="w-full py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white text-lg font-semibold shadow-md transition-all transform hover:scale-105 active:scale-95"
                >
                  LIHAT HAFALAN SAYA
                </button>
              </Link>
              
              <Link to="/dashboard">
                <button 
                  className="mt-3 w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold shadow-md transition-all transform hover:scale-105 active:scale-95"
                >
                  KEMBALI KE MENU
                </button>
              </Link>
            </div>
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
            
            {/* Quiz Progress Bar */}
            <div className="mb-4">
              <div className="w-full bg-purple-600 rounded-full h-2">
                <div 
                  className="bg-yellow-400 h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
            
            {/* Current Score */}
            <div className="mb-4 text-center">
              <p className="text-sm text-gray-300">
                Skor sementara: <span className="text-yellow-400 font-bold">{score}/{currentQuestion + 1}</span>
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
                    className="mt-4 w-full py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold shadow-md transition-all transform hover:scale-105 active:scale-95"
                  >
                    {currentQuestion < questions.length - 1 ? "LANJUTKAN" : "SELESAI"}
                  </button>
                )}
              </>
            )}
          </div>
        )}
        
        {/* Audio elements for game events */}
        <audio ref={successAudioRef} src={successSound} preload="auto" />
        <audio ref={learningCompleteAudioRef} src={successSound} preload="auto" />
      </div>
    </div>
  );
};

export default Game;

function shuffle(array) {
  const newArray = [...array];
  return newArray.sort(() => Math.random() - 0.5);
}

// Add CSS animation classes (put this in your global CSS or add to index.css)
/*
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-out;
}
*/
