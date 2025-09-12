import {React, useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {

  const Navigate = useNavigate();
  const [Name, setName] = useState ("");

  useEffect(() => {
    // mengambil username dari localstorage
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && currentUser.name) {
      setName(currentUser.name);
    }
  }, []);


  return (

    <div className="min-h-screen bg-gray-100 font-sans">
     
      {/* Cards sapaan */}
      <section>
        <div className="bg-[#5707A4]">
        <h2 className="text-white font-bold px-5 py-3">Hai, {Name}</h2>
        <p className="text-white px-5 py-3">Siap memulai pembelajaran sambil bermain hari ini?</p>
        </div>
      </section>

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
          <Link to="" className="bg-white shadow-md p-4 rounded-xl text-center hover:scale-105 transition">
            <h3 className="font-semibold text-[#5707A4]">Tajwid</h3>
            <h2 className="font-bold text-[#FF9102]">(Coming Soon)</h2>
            <p className="text-xs text-gray-500 mt-1">Aturan bacaan</p>
          </Link>

          {/* Card 3 */}
          <Link to="" className="bg-white shadow-md p-4 rounded-xl text-center hover:scale-105 transition">
            <h3 className="font-semibold text-[#5707A4]">Kisah Nabi</h3>
            <h2 className="font-bold text-[#FF9102]">(Coming Soon)</h2>
            <p className="text-xs text-gray-500 mt-1">Inspirasi iman</p>
          </Link>

          {/* Card 4 */}
          <Link to="" className="bg-white shadow-md p-4 rounded-xl text-center hover:scale-105 transition">
            <h3 className="font-semibold text-[#5707A4]">Doa Harian</h3>
            <h2 className="font-bold text-[#FF9102]">(Coming Soon)</h2>
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


