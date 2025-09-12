import React, { useState } from "react";

// import audio
import alif from "../../assets/audio/hijaiyah/alif.mp3";
import ba from "../../assets/audio/hijaiyah/ba.mp3";
import ta from "../../assets/audio/hijaiyah/ta.mp3";
import tsa from "../../assets/audio/hijaiyah/tsa.mp3";
import jim from "../../assets/audio/hijaiyah/jim.mp3";
import ha from "../../assets/audio/hijaiyah/Ḥāʼ.mp3";

// data huruf
const hijaiyahData = [
  { huruf: "ا", nama: "Alif", audio: alif },
  { huruf: "ب", nama: "Ba", audio: ba },
  { huruf: "ت", nama: "Ta", audio: ta },
  { huruf: "ث", nama: "Tsa", audio: tsa },
  { huruf: "ج", nama: "Jim", audio: jim },
  { huruf: "ح", nama: "Ḥāʼ", audio: ha },
];

function Hijaiyah() {
  const [audio] = useState(new Audio());
  const [mode, setMode] = useState("belajar"); // belajar | game
  const [soal, setSoal] = useState(null);
  const [skor, setSkor] = useState(0);

  const playAudio = (src) => {
    audio.src = src;
    audio.play();
  };

  const mulaiGame = () => {
    setSkor(0);
    nextSoal();
    setMode("game");
  };

  const nextSoal = () => {
    const random = hijaiyahData[Math.floor(Math.random() * hijaiyahData.length)];
    setSoal(random);
    playAudio(random.audio);
  };

  const jawab = (item) => {
    if (item.huruf === soal.huruf) {
      setSkor(skor + 1);
      alert("✅ Benar!");
    } else {
      alert("❌ Salah!");
    }
    nextSoal();
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] px-4 py-6">
      <h2 className="text-2xl font-bold text-center text-[#4B0E86] mb-6">
        Belajar Huruf Hijaiyah
      </h2>

      {mode === "belajar" && (
        <>
          <div className="grid grid-cols-3 gap-4">
            {hijaiyahData.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-lg transition"
              >
                <span className="text-5xl font-bold text-[#4B0E86]">{item.huruf}</span>
                <p className="mt-2 text-gray-600">{item.nama}</p>
                <button
                  onClick={() => playAudio(item.audio)}
                  className="mt-3 bg-[#FF9102] text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition"
                >
                  🔊 Dengarkan
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={mulaiGame}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Mulai Game
            </button>
          </div>
        </>
      )}

      {mode === "game" && soal && (
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Pilih huruf yang sesuai dengan audio</h3>
          <p className="mb-4">Skor: {skor}</p>

          <div className="grid grid-cols-3 gap-4">
            {hijaiyahData.map((item, index) => (
              <button
                key={index}
                onClick={() => jawab(item)}
                className="bg-white shadow-md rounded-xl p-6 text-4xl font-bold text-[#4B0E86] hover:shadow-lg transition"
              >
                {item.huruf}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Hijaiyah;
