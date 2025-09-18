import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
        // Ganti URL dengan endpoint API backend Anda
        const wordsResponse = await axios.get("http://localhost:5000/api/memorized-words");
        const scoresResponse = await axios.get("http://localhost:5000/api/scores");
        
        setMemorizedWords(wordsResponse.data);
        setScores(scoresResponse.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Gagal mengambil data. Silakan coba lagi nanti.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Mobile Container */}
      <div
        className="w-[375px] min-h-screen flex flex-col px-4 relative bg-[#30005A]"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="py-6">
          <h1 className="text-2xl font-bold text-white text-center mb-6">Hafalan Saya</h1>
          
          {loading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
            </div>
          ) : error ? (
            <div className="bg-red-500 text-white p-4 rounded-lg mb-4">
              {error}
            </div>
          ) : (
            <>
              {/* Bagian Skor */}
              <div className="bg-purple-800 rounded-lg p-4 mb-6">
                <h2 className="text-xl font-semibold text-white mb-3">Skor Saya</h2>
                {scores.length > 0 ? (
                  <div className="space-y-2">
                    {scores.map((score, index) => (
                      <div key={index} className="bg-purple-700 p-3 rounded-lg flex justify-between">
                        <span className="text-white">{score.surah}</span>
                        <span className="text-yellow-300 font-bold">{score.score} XP</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-300">Belum ada skor yang tercatat.</p>
                )}
              </div>

              {/* Bagian Kata yang Dihafal */}
              <div className="bg-purple-800 rounded-lg p-4">
                <h2 className="text-xl font-semibold text-white mb-3">Kata yang Dihafal</h2>
                {memorizedWords.length > 0 ? (
                  <div className="grid grid-cols-1 gap-3">
                    {memorizedWords.map((word, index) => (
                      <div key={index} className="bg-purple-700 p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-lg font-arabic text-white">{word.arab}</span>
                          {word.audio && (
                            <button 
                              onClick={() => new Audio(word.audio).play()}
                              className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white"
                            >
                              ▶
                            </button>
                          )}
                        </div>
                        <p className="text-gray-300">{word.meaning}</p>
                        <p className="text-xs text-gray-400 mt-1">Surah: {word.surah}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-300">Belum ada kata yang dihafal.</p>
                )}
              </div>
            </>
          )}
          
          {/* Tombol Kembali */}
          <div className="mt-6 flex justify-center">
            <Link to="/dashboard" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full">
              Kembali ke Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hafal;