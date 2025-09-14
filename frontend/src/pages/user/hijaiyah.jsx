// import React, { useState } from "react";

// // import audio
// import alif from "../../assets/audio/hijaiyah/alif.mp3";
// import ba from "../../assets/audio/hijaiyah/ba.mp3";
// import ta from "../../assets/audio/hijaiyah/ta.mp3";
// import tsa from "../../assets/audio/hijaiyah/tsa.mp3";
// import jim from "../../assets/audio/hijaiyah/jim.mp3";
// import ha from "../../assets/audio/hijaiyah/Ḥāʼ.mp3";

// // data huruf
// const hijaiyahData = [
//   { huruf: "ا", nama: "Alif", audio: alif },
//   { huruf: "ب", nama: "Ba", audio: ba },
//   { huruf: "ت", nama: "Ta", audio: ta },
//   { huruf: "ث", nama: "Tsa", audio: tsa },
//   { huruf: "ج", nama: "Jim", audio: jim },
//   { huruf: "ح", nama: "Ḥāʼ", audio: ha },
// ];

// function Hijaiyah() {
//   const [audio] = useState(new Audio());
//   const [mode, setMode] = useState("belajar"); // belajar | game
//   const [soal, setSoal] = useState(null);
//   const [skor, setSkor] = useState(0);

//   const playAudio = (src) => {
//     audio.src = src;
//     audio.play();
//   };

//   const mulaiGame = () => {
//     setSkor(0);
//     nextSoal();
//     setMode("game");
//   };

//   const nextSoal = () => {
//     const random = hijaiyahData[Math.floor(Math.random() * hijaiyahData.length)];
//     setSoal(random);
//     playAudio(random.audio);
//   };

//   const jawab = (item) => {
//     if (item.huruf === soal.huruf) {
//       setSkor(skor + 1);
//       alert("✅ Benar!");
//     } else {
//       alert("❌ Salah!");
//     }
//     nextSoal();
//   };

//   return (
//     <div className="min-h-screen bg-[#F9FAFB] px-4 py-6">
//       <h2 className="text-2xl font-bold text-center text-[#4B0E86] mb-6">
//         Belajar Huruf Hijaiyah
//       </h2>

//       {mode === "belajar" && (
//         <>
//           <div className="grid grid-cols-3 gap-4">
//             {hijaiyahData.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-lg transition"
//               >
//                 <span className="text-5xl font-bold text-[#4B0E86]">{item.huruf}</span>
//                 <p className="mt-2 text-gray-600">{item.nama}</p>
//                 <button
//                   onClick={() => playAudio(item.audio)}
//                   className="mt-3 bg-[#FF9102] text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition"
//                 >
//                   🔊 Dengarkan
//                 </button>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-8">
//             <button
//               onClick={mulaiGame}
//               className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
//             >
//               Mulai Game
//             </button>
//           </div>
//         </>
//       )}

//       {mode === "game" && soal && (
//         <div className="text-center">
//           <h3 className="text-xl font-semibold mb-4">Pilih huruf yang sesuai dengan audio</h3>
//           <p className="mb-4">Skor: {skor}</p>

//           <div className="grid grid-cols-3 gap-4">
//             {hijaiyahData.map((item, index) => (
//               <button
//                 key={index}
//                 onClick={() => jawab(item)}
//                 className="bg-white shadow-md rounded-xl p-6 text-4xl font-bold text-[#4B0E86] hover:shadow-lg transition"
//               >
//                 {item.huruf}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Hijaiyah;


import React, { useState, useEffect, useRef } from "react";

// import audio
import alif from "../../assets/audio/hijaiyah/alif.mp3";
import ba from "../../assets/audio/hijaiyah/ba.mp3";
import ta from "../../assets/audio/hijaiyah/ta.mp3";
import tsa from "../../assets/audio/hijaiyah/tsa.mp3";
import jim from "../../assets/audio/hijaiyah/jim.mp3";
import ha from "../../assets/audio/hijaiyah/Ḥāʼ.mp3";

const hijaiyahData = [
  { huruf: "ا", nama: "Alif", audio: alif },
  { huruf: "ب", nama: "Ba", audio: ba },
  { huruf: "ت", nama: "Ta", audio: ta },
  { huruf: "ث", nama: "Tsa", audio: tsa },
  { huruf: "ج", nama: "Jim", audio: jim },
  { huruf: "ح", nama: "Ḥāʼ", audio: ha },
];

function Hijaiyah() {
  const [mode, setMode] = useState("belajar"); // belajar | pilihGame | gameSuara | gameHuruf | pencapaian
  const [currentIndex, setCurrentIndex] = useState(0);
  const [soal, setSoal] = useState(null);
  const [skor, setSkor] = useState(0);
  const [totalSoal, setTotalSoal] = useState(0);
  const audioRef = useRef(new Audio());

  // Load skor dari localStorage
  useEffect(() => {
    const savedScore = JSON.parse(localStorage.getItem("skorHijaiyah")) || {
      gameSuara: 0,
      gameHuruf: 0,
    };
    setSkor(savedScore);
  }, []);

  // Simpan skor ke localStorage
  const saveScore = (newScore) => {
    localStorage.setItem("skorHijaiyah", JSON.stringify(newScore));
    setSkor(newScore);
  };

  const playAudio = (src) => {
    if (!src) return;
    audioRef.current.pause();
    audioRef.current.src = src;
    audioRef.current.play();
  };

  // Sesi belajar: tampilkan huruf satu per satu
  const nextBelajar = () => {
    if (currentIndex < hijaiyahData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setMode("pilihGame");
    }
  };

  // Mulai game tebak suara
  const mulaiGameSuara = () => {
    setTotalSoal(0);
    setSoal(null);
    setMode("gameSuara");
    nextSoalSuara();
  };

  // Mulai game tebak huruf
  const mulaiGameHuruf = () => {
    setTotalSoal(0);
    setSoal(null);
    setMode("gameHuruf");
    nextSoalHuruf();
  };

  // Game tebak suara: pilih huruf sesuai audio
  const nextSoalSuara = () => {
    const random = hijaiyahData[Math.floor(Math.random() * hijaiyahData.length)];
    setSoal(random);
    playAudio(random.audio);
    setTotalSoal((prev) => prev + 1);
  };

  // Game tebak huruf: putar audio huruf, pilih nama huruf yang benar
  const nextSoalHuruf = () => {
    const random = hijaiyahData[Math.floor(Math.random() * hijaiyahData.length)];
    setSoal(random);
    playAudio(random.audio);
    setTotalSoal((prev) => prev + 1);
  };

  // Jawab game tebak suara
  const jawabSuara = (item) => {
    let newScore = { ...skor };
    if (item.huruf === soal.huruf) {
      alert("✅ Benar!");
      newScore.gameSuara = (newScore.gameSuara || 0) + 1;
    } else {
      alert(`❌ Salah! Jawaban benar: ${soal.huruf} (${soal.nama})`);
    }
    saveScore(newScore);
    if (totalSoal >= 10) {
      alert(`Game selesai! Skor kamu: ${newScore.gameSuara}/10`);
      setMode("pencapaian");
    } else {
      nextSoalSuara();
    }
  };

  // Jawab game tebak huruf
  const jawabHuruf = (item) => {
    let newScore = { ...skor };
    if (item.nama === soal.nama) {
      alert("✅ Benar!");
      newScore.gameHuruf = (newScore.gameHuruf || 0) + 1;
    } else {
      alert(`❌ Salah! Jawaban benar: ${soal.nama}`);
    }
    saveScore(newScore);
    if (totalSoal >= 10) {
      alert(`Game selesai! Skor kamu: ${newScore.gameHuruf}/10`);
      setMode("pencapaian");
    } else {
      nextSoalHuruf();
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] px-4 py-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#4B0E86] mb-8">
        Belajar Huruf Hijaiyah
      </h2>

      {/* Mode Belajar */}
      {mode === "belajar" && (
        <div className="bg-white shadow-md rounded-xl p-8 flex flex-col items-center">
          <span className="text-9xl font-bold text-[#4B0E86] select-none">
            {hijaiyahData[currentIndex].huruf}
          </span>
          <p className="mt-4 text-2xl font-semibold">{hijaiyahData[currentIndex].nama}</p>
          <button
            onClick={() => playAudio(hijaiyahData[currentIndex].audio)}
            className="mt-6 bg-[#FF9102] text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition"
          >
            🔊 Dengarkan
          </button>
          <button
            onClick={nextBelajar}
            className="mt-8 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition"
          >
            {currentIndex === hijaiyahData.length - 1 ? "Selesai Belajar" : "Huruf Selanjutnya"}
          </button>
        </div>
      )}

      {/* Pilih Game */}
      {mode === "pilihGame" && (
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6 text-[#4B0E86]">Pilih Game</h3>
          <div className="flex justify-center gap-8">
            <button
              onClick={mulaiGameSuara}
              className="bg-[#FF9102] text-white px-8 py-4 rounded-lg hover:bg-amber-600 transition"
            >
              🎧 Tebak Suara
            </button>
            <button
              onClick={mulaiGameHuruf}
              className="bg-[#4B0E86] text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition"
            >
              🔤 Tebak Huruf
            </button>
          </div>
          <button
            onClick={() => setMode("belajar")}
            className="mt-8 text-gray-600 underline"
          >
            Kembali ke Belajar
          </button>
        </div>
      )}

      {/* Game Tebak Suara */}
      {mode === "gameSuara" && soal && (
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4 text-[#4B0E86]">
            Pilih huruf yang sesuai dengan audio
          </h3>
          <p className="mb-4 font-semibold">Skor: {skor.gameSuara || 0} / 10</p>
          <button
            onClick={() => playAudio(soal.audio)}
            className="mb-6 bg-[#FF9102] text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition"
          >
            🔊 Putar Ulang Audio
          </button>
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            {hijaiyahData.map((item, index) => (
              <button
                key={index}
                onClick={() => jawabSuara(item)}
                className="bg-white shadow-md rounded-xl p-6 text-5xl font-bold text-[#4B0E86] hover:shadow-lg transition"
              >
                {item.huruf}
              </button>
            ))}
          </div>
          <button
            onClick={() => setMode("pilihGame")}
            className="mt-8 text-gray-600 underline"
          >
            Kembali ke Pilihan Game
          </button>
        </div>
      )}

      {/* Game Tebak Huruf */}
      {mode === "gameHuruf" && soal && (
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4 text-[#4B0E86]">
            Pilih nama huruf yang sesuai dengan audio
          </h3>
          <p className="mb-4 font-semibold">Skor: {skor.gameHuruf || 0} / 10</p>
          <button
            onClick={() => playAudio(soal.audio)}
            className="mb-6 bg-[#4B0E86] text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            🔊 Putar Ulang Audio
          </button>
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            {hijaiyahData.map((item, index) => (
              <button
                key={index}
                onClick={() => jawabHuruf(item)}
                className="bg-white shadow-md rounded-xl p-4 text-lg font-semibold text-[#4B0E86] hover:shadow-lg transition"
              >
                {item.nama}
              </button>
            ))}
          </div>
          <button
            onClick={() => setMode("pilihGame")}
            className="mt-8 text-gray-600 underline"
          >
            Kembali ke Pilihan Game
          </button>
        </div>
      )}

      {/* Pencapaian / Statistik */}
      {mode === "pencapaian" && (
        <div className="text-center max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-[#4B0E86]">Pencapaian Belajar</h3>
          <p className="mb-4 text-lg">
            Skor Tebak Suara: <span className="font-semibold">{skor.gameSuara || 0}</span>
          </p>
          <p className="mb-6 text-lg">
            Skor Tebak Huruf: <span className="font-semibold">{skor.gameHuruf || 0}</span>
          </p>
          <button
            onClick={() => {
              setMode("pilihGame");
            }}
            className="bg-[#FF9102] text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition"
          >
            Mainkan Game Lagi
          </button>
          <button
            onClick={() => {
              setMode("belajar");
              setCurrentIndex(0);
            }}
            className="mt-4 text-gray-600 underline"
          >
            Kembali ke Belajar
          </button>
        </div>
      )}
    </div>
  );
}

export default Hijaiyah;
