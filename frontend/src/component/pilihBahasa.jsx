import React, { useState } from "react";

const PilihBahasa = ({ onClose, onMulai }) => {
  const [selected, setSelected] = useState(null);

  const languages = ["Bahasa Melayu", "English", "Indonesia", "Malayalam"];

  return (
    <div className="absolute inset-0 flex justify-center items-center z-50">
      {/* Container ukuran mobile */}
      <div className="w-[375px] min-h-screen bg-[#210041] flex flex-col p-6 relative">
        {/* Tombol close (pojok kanan atas) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          ✕
        </button>

        {/* Judul */}
        <h2 className="text-center text-orange-400 text-2xl font-bold mt-10">
          Mari kita mulai
        </h2>
        <p className="text-center text-white mt-2 text-sm">
          Pilih bahasa yang ingin anda gunakan untuk mempelajari Al-Quran
        </p>

        {/* List Bahasa */}
        <div className="mt-8 flex flex-col space-y-4">
          {languages.map((lang, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(lang)}
              className={`w-full py-4 rounded-lg font-bold text-lg transition ${
                selected === lang
                  ? "bg-[#a020f0] text-white shadow-md" // highlight jika terpilih
                  : "bg-[#3b0066] text-white hover:bg-[#4c0080]"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Tombol Mulai */}
        <button
          onClick={() => selected && onMulai(selected)}
          disabled={!selected}
          className={`mt-auto mb-10 w-full py-4 rounded-lg font-bold text-lg transition ${
            selected
              ? "bg-orange-400 text-white hover:bg-orange-500"
              : "bg-gray-500 text-gray-300 cursor-not-allowed"
          }`}
        >
          MULAI
        </button>
      </div>
    </div>
  );
};

export default PilihBahasa;
