import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  

import PilihBahasa from "../../component/pilihBahasa"; 
import IntroSoleh from "../../component/introSoleh"; 
import PopupMateri from "../../component/popupMateri"; 

import bgBeranda from "../../assets/bg_beranda.png";

const Dashboard = () => {
  const [showMateri, setShowMateri] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [selectedSurah, setSelectedSurah] = useState("an-nas");
  const navigate = useNavigate();

  const surahs = [
    { id: "an-nas", name: "An-Nas", icon: "👳‍♂️", gradient: "from-orange-500 to-orange-700" },
    { id: "al-falaq", name: "Al-Falaq", icon: "🌤️", gradient: "from-purple-500 to-purple-700" },
    { id: "al-ikhlas", name: "Al-Ikhlas", icon: "☝️", gradient: "from-blue-500 to-blue-700" },
    { id: "al-lahab", name: "Al-Lahab", icon: "📖", gradient: "from-green-500 to-green-700" },
    
  ];

  const handleSurahSelect = (surah) => {
    setSelectedSurah(surah);
    setShowMateri(true);
  };

  const Card = ({ surah }) => (
    <div
      onClick={() => handleSurahSelect(surah.id)}
      className="flex flex-col items-center justify-center cursor-pointer transform transition-all duration-300 hover:scale-110"
    >
      <div className={`rounded-full p-5 mb-2 w-20 h-20 flex items-center justify-center bg-gradient-to-br ${surah.gradient} text-white text-4xl`}>
        {surah.icon}
      </div>
      <p className="text-white font-bold text-lg">{surah.name}</p>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        className="w-[375px] min-h-screen flex flex-col px-4 relative bg-[#30005A]"
        style={{
          backgroundImage: `url(${bgBeranda})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mt-8 mb-4">
          <h1 className="text-2xl font-bold text-white text-center">Belajar Surah</h1>
        </div>

        {/* Pola 1-2-1-2 */}
        <div className="flex flex-col gap-5 mt-4">
          {/* 1 */}
          <div className="flex justify-center">
            <Card surah={surahs[0]} />
          </div>
          {/* 2 */}
          <div className="grid grid-cols-2 gap-4">
            <Card surah={surahs[1]} />
            <Card surah={surahs[2]} />
          </div>
          {/* 1 */}
          <div className="flex justify-center">
            <Card surah={surahs[3]} />
          </div>
          {/* 2 */}
          {/* <div className="grid grid-cols-2 gap-4">
            <Card surah={surahs[1]} />
            <Card surah={surahs[2]} />
          </div> */}
        </div>

        <div className="mt-auto mb-20"></div>

        {showMateri && (
          <PopupMateri 
            onClose={() => setShowMateri(false)} 
            onMulai={() => {
              setShowMateri(false);
              setShowPopup(true);
            }} 
          />
        )}

        {showPopup && (
          <PilihBahasa 
            onClose={() => setShowPopup(false)}   
            onMulai={() => {                     
              setShowPopup(false);
              setShowIntro(true);
            }}
          />
        )}

        {showIntro && (
          <IntroSoleh 
            onMulai={() => {
              setShowIntro(false); 
              navigate(`/game/${selectedSurah}`);
            }} 
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
