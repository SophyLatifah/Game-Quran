// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// function Hafal() {
//   const [memorizedWords, setMemorizedWords] = useState([]);
//   const [scores, setScores] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Ambil data kata yang dihafal dan skor dari database
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         // Ganti URL dengan endpoint API backend Anda
//         const wordsResponse = await axios.get("http://localhost:5000/api/memorized-words");
//         const scoresResponse = await axios.get("http://localhost:5000/api/scores");
        
//         setMemorizedWords(wordsResponse.data);
//         setScores(scoresResponse.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching data:", err);
//         setError("Gagal mengambil data. Silakan coba lagi nanti.");
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       {/* Mobile Container */}
//       <div
//         className="w-[375px] min-h-screen flex flex-col px-4 relative bg-[#30005A]"
//         style={{
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="py-6">
//           <h1 className="text-2xl font-bold text-white text-center mb-6">Hafalan Saya</h1>
          
//           {loading ? (
//             <div className="flex justify-center">
//               <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
//             </div>
//           ) : error ? (
//             <div className="bg-red-500 text-white p-4 rounded-lg mb-4">
//               {error}
//             </div>
//           ) : (
//             <>
//               {/* Bagian Skor */}
//               <div className="bg-purple-800 rounded-lg p-4 mb-6">
//                 <h2 className="text-xl font-semibold text-white mb-3">Skor Saya</h2>
//                 {scores.length > 0 ? (
//                   <div className="space-y-2">
//                     {scores.map((score, index) => (
//                       <div key={index} className="bg-purple-700 p-3 rounded-lg flex justify-between">
//                         <span className="text-white">{score.surah}</span>
//                         <span className="text-yellow-300 font-bold">{score.score} XP</span>
//                       </div>
//                     ))}
//                   </div>
//                 ) : (
//                   <p className="text-gray-300">Belum ada skor yang tercatat.</p>
//                 )}
//               </div>

//               {/* Bagian Kata yang Dihafal */}
//               <div className="bg-purple-800 rounded-lg p-4">
//                 <h2 className="text-xl font-semibold text-white mb-3">Kata yang Dihafal</h2>
//                 {memorizedWords.length > 0 ? (
//                   <div className="grid grid-cols-1 gap-3">
//                     {memorizedWords.map((word, index) => (
//                       <div key={index} className="bg-purple-700 p-3 rounded-lg">
//                         <div className="flex justify-between items-center mb-1">
//                           <span className="text-lg font-arabic text-white">{word.arab}</span>
//                           {word.audio && (
//                             <button 
//                               onClick={() => new Audio(word.audio).play()}
//                               className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white"
//                             >
//                               ▶
//                             </button>
//                           )}
//                         </div>
//                         <p className="text-gray-300">{word.meaning}</p>
//                         <p className="text-xs text-gray-400 mt-1">Surah: {word.surah}</p>
//                       </div>
//                     ))}
//                   </div>
//                 ) : (
//                   <p className="text-gray-300">Belum ada kata yang dihafal.</p>
//                 )}
//               </div>
//             </>
//           )}
          
//           {/* Tombol Kembali */}
//           <div className="mt-6 flex justify-center">
//             <Link to="/dashboard" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full">
//               Kembali ke Dashboard
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hafal;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// API Base URL
const API_BASE = "http://localhost:5000/api";

function Hafal() {
  const [memorizedWords, setMemorizedWords] = useState([]);
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Ambil data kata yang dihafal dan skor dari database
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const userData = JSON.parse(localStorage.getItem("userData"));
        const user_id = userData?.id || 1; // TODO: Get from auth system
        
        // Fetch scores and memorized words
        const [scoresResponse, wordsResponse] = await Promise.all([
          axios.get(`${API_BASE}/score/${user_id}`),
          axios.get(`${API_BASE}/memorized/${user_id}`)
        ]);
        
        setScores(scoresResponse.data);
        setMemorizedWords(wordsResponse.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Gagal mengambil data. Pastikan backend running di port 5000");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const removeMemorizedWord = async (wordId) => {
    try {
      const user_id = 1; // TODO: Get from auth system
      await axios.delete(`${API_BASE}/memorized/${wordId}`, {
        data: { user_id }
      });
      
      // Remove from local state
      setMemorizedWords(prev => prev.filter(word => word.id !== wordId));
    } catch (error) {
      console.error("Error removing word:", error);
      alert("Gagal menghapus kata");
    }
  };

  const getTotalWordsCount = () => {
    return memorizedWords.length;
  };

  // const getAverageScore = () => {
  //   if (scores.length === 0) return 0;
  //   const total = scores.reduce((sum, score) => sum + score.percentage, 0);
  //   return Math.round(total / scores.length);
  // };

  const getBestScore = () => {
    if (scores.length === 0) return 0;
    return Math.max(...scores.map(score => score.percentage));
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[375px] min-h-screen flex flex-col px-4 py-6 bg-[#30005A]">
        <div className="py-6">
          <h1 className="text-2xl font-bold text-white text-center mb-6">Hafalan Saya</h1>
          
          {loading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
            </div>
          ) : error ? (
            <div className="bg-red-500 text-white p-4 rounded-lg mb-4">
              {error}
              <p className="text-sm mt-2">
                Coba pastikan backend sudah jalan dengan: <code>npm run dev</code>
              </p>
            </div>
          ) : (
            <>
              {/* Statistics Summary */}
              <div className="bg-purple-800 rounded-lg p-4 mb-6">
                <h2 className="text-xl font-semibold text-white mb-3">Statistik</h2>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-yellow-300">{getTotalWordsCount()}</p>
                    <p className="text-xs text-gray-300">Kata Dihafal</p>
                  </div>
                  {/* <div className="text-center">
                    <p className="text-2xl font-bold text-blue-300">{getAverageScore()}%</p>
                    <p className="text-xs text-gray-300">Rata-rata</p>
                  </div> */}
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-300">{getBestScore()}%</p>
                    <p className="text-xs text-gray-300">Terbaik</p>
                  </div>
                </div>
              </div>

              {/* Bagian Skor */}
              <div className="bg-purple-800 rounded-lg p-4 mb-6">
                <h2 className="text-xl font-semibold text-white mb-3">Skor Saya ({scores.length})</h2>
                {scores.length > 0 ? (
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {scores.map((score, index) => (
                      <div key={index} className="bg-purple-700 p-3 rounded-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="text-white font-medium">
                              {score.surah_name || score.surah_key}
                            </span>
                            <p className="text-sm text-gray-300">
                              {score.score}/{score.max_questions} soal benar
                            </p>
                            <p className="text-xs text-gray-400">
                              {new Date(score.updated_at).toLocaleDateString('id-ID')}
                            </p>
                          </div>
                          <div className="text-right">
                            <span className={`font-bold text-lg ${
                              score.percentage >= 80 ? 'text-green-300' :
                              score.percentage >= 60 ? 'text-yellow-300' :
                              'text-red-300'
                            }`}>
                              {score.percentage}%
                            </span>
                          </div>
                        </div>
                        <div className="w-full bg-purple-600 rounded-full h-2 mt-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-300 ${
                              score.percentage >= 80 ? 'bg-green-300' :
                              score.percentage >= 60 ? 'bg-yellow-300' :
                              'bg-red-300'
                            }`}
                            style={{ width: `${score.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <p className="text-gray-300 mb-2">Belum ada skor</p>
                    <p className="text-sm text-gray-400">Yuk main game untuk mendapatkan skor!</p>
                  </div>
                )}
              </div>

              {/* Bagian Kata yang Dihafal */}
              <div className="bg-purple-800 rounded-lg p-4">
                <h2 className="text-xl font-semibold text-white mb-3">
                  Kata yang Dihafal ({memorizedWords.length})
                </h2>
                {memorizedWords.length > 0 ? (
                  <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto">
                    {memorizedWords.map((word, index) => (
                      <div key={index} className="bg-purple-700 p-3 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div className="flex-grow">
                            <span className="text-lg font-arabic text-white block">
                              {word.arab}
                            </span>
                            <p className="text-gray-300 mt-1">{word.meaning}</p>
                            <div className="flex justify-between items-center mt-2">
                              <p className="text-xs text-gray-400">
                                {word.surah_name || word.surah_key}
                              </p>
                              <p className="text-xs text-gray-500">
                                {new Date(word.created_at).toLocaleDateString('id-ID')}
                              </p>
                            </div>
                          </div>
                          <button 
                            onClick={() => removeMemorizedWord(word.id)}
                            className="text-red-400 hover:text-red-300 ml-2 transition-colors"
                            title="Hapus kata"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <p className="text-gray-300 mb-2">Belum ada kata yang dihafal</p>
                    <p className="text-sm text-gray-400">
                      Main game dengan skor ≥50% untuk menyimpan kata!
                    </p>
                    <Link to="/dashboard" className="inline-block mt-3 text-orange-400 underline">
                      Mulai Game
                    </Link>
                  </div>
                )}
              </div>
            </>
          )}
          
          {/* Tombol Kembali */}
          {/* <div className="mt-6 flex justify-center space-x-4">
            <Link 
              to="/dashboard" 
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full transition-colors"
            >
              Kembali ke Dashboard
            </Link>
            <button
              onClick={() => window.location.reload()}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition-colors"
            >
              Refresh
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Hafal;