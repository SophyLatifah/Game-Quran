// import React from "react";
// import { Link } from "react-router-dom";

// function Dashboard() {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h1 className="mt-16">Selamat Datang di Game Edukasi Quran!</h1>
//     </div>
//   );
// }

// export default Dashboard;


import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-[#4B0E86] text-white p-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">DEEN QUIZ</h1>
        <button className="bg-[#FF9102] px-3 py-1 rounded-full text-sm font-semibold">
          Profil
        </button>
      </header>

      {/* Progress Belajar */}
      <section className="p-4">
        <h2 className="text-lg font-bold text-gray-700">Progress Belajar</h2>
        <div className="mt-3 bg-white shadow-md rounded-xl p-4">
          <p className="text-gray-600 text-sm">Seri Hijaiyah</p>
          <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
            <div className="bg-[#FF9102] h-3 rounded-full w-2/3"></div>
          </div>
          <p className="text-xs text-right text-gray-500 mt-1">65%</p>
        </div>
      </section>

      {/* Seri Permainan */}
      <section className="p-4">
        <h2 className="text-lg font-bold text-gray-700 mb-3">
          Seri Permainan
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Card 1 */}
          <Link to="/hijaiyah" className="bg-white shadow-md p-4 rounded-xl text-center hover:scale-105 transition">
            <h3 className="font-semibold text-[#5707A4]">Hijaiyah</h3>
            <p className="text-xs text-gray-500 mt-1">Belajar huruf Al-Qur’an</p>
          </Link>

          {/* Card 2 */}
          <Link to="/tajwid" className="bg-white shadow-md p-4 rounded-xl text-center hover:scale-105 transition">
            <h3 className="font-semibold text-[#5707A4]">Tajwid</h3>
            <p className="text-xs text-gray-500 mt-1">Aturan bacaan</p>
          </Link>

          {/* Card 3 */}
          <Link to="/kisah" className="bg-white shadow-md p-4 rounded-xl text-center hover:scale-105 transition">
            <h3 className="font-semibold text-[#5707A4]">Kisah Nabi</h3>
            <p className="text-xs text-gray-500 mt-1">Inspirasi iman</p>
          </Link>

          {/* Card 4 */}
          <Link to="/daily" className="bg-white shadow-md p-4 rounded-xl text-center hover:scale-105 transition">
            <h3 className="font-semibold text-[#5707A4]">Doa Harian</h3>
            <p className="text-xs text-gray-500 mt-1">Doa & dzikir</p>
          </Link>
        </div>
      </section>

{/*
      {/* Quick Action 
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-11/12">
        <Link
          to="/quiz"
          className="block bg-[#FF9102] text-white text-center py-4 rounded-xl font-semibold shadow-lg hover:bg-amber-600 transition"
        >
          🚀 Mulai Kuis Baru
        </Link>
      </div>

      */}
    </div>
  );
}

export default Dashboard;
