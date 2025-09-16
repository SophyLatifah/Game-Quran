import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // 👈 import navigate

// import background
import bgBeranda from "../../assets/bg_beranda.png";

const Dashboard = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate(); // 👈 inisialisasi navigate

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      {/* Mobile Container */}
      <div
        className="w-[375px] min-h-screen flex flex-col px-4 relative bg-[#30005A]"
        style={{
          backgroundImage: `url(${bgBeranda})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Bagian atas - Surah utama */}
        <div className="flex flex-col items-center mt-10">
          <div
            className="relative bg-orange-500 rounded-full p-6 w-28 h-28 flex items-center justify-center shadow-lg cursor-pointer"
            onClick={() => setShowPopup(true)} // klik untuk munculin popup
          >
            <span className="text-white text-4xl">👳‍♂️</span>
            <div className="absolute -top-5 bg-blue-500 text-white text-sm px-3 py-1 rounded-full shadow">
              Mulai
            </div>
          </div>
          <h2 className="mt-3 text-lg font-bold text-white">An-Nas</h2>
        </div>

        {/* Surah lainnya */}
        <div className="grid grid-cols-2 gap-6 justify-items-center mt-10 px-4">
          <div className="bg-purple-800/90 rounded-xl p-4 w-32 text-center text-white shadow-md">
            🌤️
            <p className="mt-2 font-semibold">Al-Falaq</p>
          </div>
          <div className="bg-purple-800/90 rounded-xl p-4 w-32 text-center text-white shadow-md">
            ☝️
            <p className="mt-2 font-semibold">Al-Ikhlas</p>
          </div>
          <div className="col-span-2 bg-purple-800/90 rounded-xl p-4 w-32 text-center text-white shadow-md">
            📖
            <p className="mt-2 font-semibold">Al-Fatihah</p>
          </div>
        </div>

        {/* Spacer untuk bottom navbar */}
        <div className="mt-auto mb-20"></div>

        {/* Popup */}
        {showPopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-[#3a0073] w-[320px] p-6 rounded-xl shadow-lg text-center border-2 border-purple-400">
              {/* Icon bintang / ornamen */}
              <div className="text-purple-400 text-3xl mb-3">✸</div>

              {/* Judul */}
              <h2 className="text-orange-400 text-xl font-bold mb-2">An-Nas</h2>

              {/* Deskripsi */}
              <p className="text-white text-sm mb-6">
                Learn new words from this lesson.
              </p>

              {/* Tombol START */}
              <button
                onClick={() => navigate("/game/an-nas")} // 👈 arahkan ke game An-Nas
                className="w-full bg-orange-400 text-white py-3 rounded-lg font-bold shadow hover:bg-orange-500 transition mb-4 flex items-center justify-center"
              >
                START{" "}
                <span className="ml-2 bg-orange-600 px-2 py-1 rounded text-xs">
                  20XP ⚡
                </span>
              </button>

              {/* Tombol Close */}
              <button
                className="text-white text-sm underline hover:text-orange-300"
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
