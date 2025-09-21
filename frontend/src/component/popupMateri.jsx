import React from "react";

const PopupMateri = ({ onClose, onMulai }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Container mobile */}
      <div className="w-[375px] px-4">
        <div className="bg-[#30005A] border-2 border-purple-600 rounded-2xl p-6 text-center shadow-lg text-white">
          {/* Ikon atas */}
          <div className="text-purple-400 text-3xl mb-2">✦</div>

          {/* Judul */}
          <h2 className="text-lg font-bold text-orange-400 mb-2">
            
          </h2>  
          <p className="text-sm mb-6">
            Pelajari kosakata baru dari materi ini.
          </p>

          {/* Tombol mulai */}
          <button
            onClick={onMulai}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-3 transition"
          >
            MULAI
            <span className="bg-orange-400 text-white text-sm px-3 py-1 rounded-md shadow">
              20XP ⚡
            </span>
          </button>

          {/* Tombol kembali */}
          <button
            onClick={onClose}
            className="mt-4 text-sm underline hover:text-orange-300"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupMateri;
