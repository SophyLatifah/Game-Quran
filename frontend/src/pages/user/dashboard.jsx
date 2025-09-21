// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";  

// import PilihBahasa from "../../component/pilihBahasa"; 
// import IntroSoleh from "../../component/introSoleh"; 
// import PopupMateri from "../../component/popupMateri"; // ✅ import popup materi

// // import background
// import bgBeranda from "../../assets/bg_beranda.png";

// const Dashboard = () => {
//   const [showMateri, setShowMateri] = useState(false); // ✅ popup materi
//   const [showPopup, setShowPopup] = useState(false);   // popup pilih bahasa
//   const [showIntro, setShowIntro] = useState(false);   // popup intro soleh
//   const [selectedSurah, setSelectedSurah] = useState("an-nas"); // Surah yang dipilih
//   const navigate = useNavigate(); 

//   // Data surah
//   const surahs = [
//     { id: "an-nas", name: "An-Nas", icon: "👳‍♂️", color: "bg-orange-500" },
//     { id: "al-falaq", name: "Al-Falaq", icon: "🌤️", color: "bg-purple-600" },
//     { id: "al-ikhlas", name: "Al-Ikhlas", icon: "☝️", color: "bg-blue-600" },
//     { id: "al-lahab", name: "Al-Lahab", icon: "📖", color: "bg-green-600" }
//   ];

//   // Fungsi untuk memilih surah dan menampilkan popup materi
//   const handleSurahSelect = (surah) => {
//     setSelectedSurah(surah);
//     setShowMateri(true);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       {/* Mobile Container */}
//       <div
//         className="w-[375px] min-h-screen flex flex-col px-4 relative bg-[#30005A]"
//         style={{
//           backgroundImage: `url(${bgBeranda})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Header */}
//         <div className="mt-8 mb-4">
//           <h1 className="text-2xl font-bold text-white text-center">Belajar Surah</h1>
//         </div>

//         {/* Cards dengan pola 1-2-1 */}
//         <div className="flex flex-col gap-5 mt-4">
//           {/* Card 1 (Atas) */}
//           <div className="flex justify-center">
//             <div
//               onClick={() => handleSurahSelect(surahs[0].id)}
//               className="w-full max-w-[240px] bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-5 text-center shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
//             >
//               <div className="bg-white/20 rounded-full p-4 mx-auto mb-3 w-20 h-20 flex items-center justify-center backdrop-blur-sm">
//                 <span className="text-white text-4xl">{surahs[0].icon}</span>
//               </div>
//               <p className="text-white font-bold text-lg">{surahs[0].name}</p>
//             </div>
//           </div>

//           {/* Cards 2-3 (Tengah) */}
//           <div className="grid grid-cols-2 gap-4">
//             {surahs.slice(1, 3).map((surah) => (
//               <div
//                 key={surah.id}
//                 onClick={() => handleSurahSelect(surah.id)}
//                 className={`bg-gradient-to-br from-${surah.color.split('-')[1]}-500 to-${surah.color.split('-')[1]}-700 rounded-2xl p-4 text-center shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
//               >
//                 <div className="bg-white/20 rounded-full p-3 mx-auto mb-2 w-16 h-16 flex items-center justify-center backdrop-blur-sm">
//                   <span className="text-white text-3xl">{surah.icon}</span>
//                 </div>
//                 <p className="text-white font-bold">{surah.name}</p>
//               </div>
//             ))}
//           </div>

//           {/* Card 4 (Bawah) */}
//           <div className="flex justify-center">
//             <div
//               onClick={() => handleSurahSelect(surahs[3].id)}
//               className="w-full max-w-[240px] bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-5 text-center shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
//             >
//               <div className="bg-white/20 rounded-full p-4 mx-auto mb-3 w-20 h-20 flex items-center justify-center backdrop-blur-sm">
//                 <span className="text-white text-4xl">{surahs[3].icon}</span>
//               </div>
//               <p className="text-white font-bold text-lg">{surahs[3].name}</p>
//             </div>
//           </div>
//         </div>

//         {/* Spacer untuk bottom navbar */}
//         <div className="mt-auto mb-20"></div>

//         {/* Popup Materi */}
//         {showMateri && (
//           <PopupMateri 
//             onClose={() => setShowMateri(false)} 
//             onMulai={() => {
//               setShowMateri(false);
//               setShowPopup(true); // ✅ lanjut ke pilih bahasa
//             }} 
//           />
//         )}

//         {/* Popup pilih bahasa */}
//         {showPopup && (
//           <PilihBahasa 
//             onClose={() => setShowPopup(false)}   
//             onMulai={() => {                     
//               setShowPopup(false);
//               setShowIntro(true);
//             }}
//           />
//         )}

//         {/* Popup intro soleh */}
//         {showIntro && (
//           <IntroSoleh 
//             onMulai={() => {
//               setShowIntro(false); 
//               navigate(`/game/${selectedSurah}`); // masuk game dengan surah yang dipilih
//             }} 
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

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
    { id: "al-lahab", name: "Al-Lahab", icon: "📖", gradient: "from-green-500 to-green-700" }
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
