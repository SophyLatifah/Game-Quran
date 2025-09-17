import React from "react";
import robotImg from "../assets/robot_hp.png"; // ganti sesuai path gambarmu

const IntroSoleh = ({ onMulai }) => {
  return (
    <div className="fixed inset-0  flex items-center justify-center z-50">
      {/* Mobile Container */}
      <div className="w-[375px] min-h-screen flex flex-col items-center justify-center px-6 bg-[#30005A] relative">
        
        {/* Card ucapan */}
        <div className="bg-purple-800/90 p-4 rounded-2xl w-full text-center text-white mb-6 border-2 border-purple-400 shadow-lg">
          <p className="text-base sm:text-lg leading-relaxed">
            Salam Teman, <br />
            Aku <span className="font-bold">Soleh</span> — teman belajarmu! <br />
            Yuk belajar seru dan jadi lebih bijak, <br />
            satu kata setiap kali 🚀
          </p>
        </div>

        {/* Robot */}
        <img
          src={robotImg}
          alt="Soleh Robot"
          className="w-40 sm:w-48 mb-6 drop-shadow-lg"
        />

        {/* Tombol mulai */}
        <button
          onClick={onMulai}
          className="w-full max-w-xs bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg transition"
        >
          AYO MULAI
        </button>
      </div>
    </div>
  );
};

export default IntroSoleh;
