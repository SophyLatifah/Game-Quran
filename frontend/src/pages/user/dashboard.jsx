import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  

import PilihBahasa from "../../component/pilihBahasa"; 
import IntroSoleh from "../../component/introSoleh"; 
import PopupMateri from "../../component/popupMateri"; // ✅ import popup materi

// import background
import bgBeranda from "../../assets/bg_beranda.png";

const Dashboard = () => {
  const [showMateri, setShowMateri] = useState(false); // ✅ popup materi
  const [showPopup, setShowPopup] = useState(false);   // popup pilih bahasa
  const [showIntro, setShowIntro] = useState(false);   // popup intro soleh
  const [selectedSurah, setSelectedSurah] = useState("an-nas"); // Surah yang dipilih
  const navigate = useNavigate(); 

  // Fungsi untuk memilih surah dan menampilkan popup materi
  const handleSurahSelect = (surah) => {
    setSelectedSurah(surah);
    setShowMateri(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
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
            onClick={() => handleSurahSelect("an-nas")}
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
          <div 
            className="bg-purple-800/90 rounded-xl p-4 w-32 text-center text-white shadow-md cursor-pointer hover:bg-purple-700/90 transition-colors"
            onClick={() => handleSurahSelect("al-falaq")}
          >
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

        {/* Popup Materi */}
        {showMateri && (
          <PopupMateri 
            onClose={() => setShowMateri(false)} 
            onMulai={() => {
              setShowMateri(false);
              setShowPopup(true); // ✅ lanjut ke pilih bahasa
            }} 
          />
        )}

        {/* Popup pilih bahasa */}
        {showPopup && (
          <PilihBahasa 
            onClose={() => setShowPopup(false)}   
            onMulai={() => {                     
              setShowPopup(false);
              setShowIntro(true);
            }}
          />
        )}

        {/* Popup intro soleh */}
        {showIntro && (
          <IntroSoleh 
            onMulai={() => {
              setShowIntro(false); 
              navigate(`/game/${selectedSurah}`); // masuk game dengan surah yang dipilih
            }} 
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
