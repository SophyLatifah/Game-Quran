// import {React, useEffect, useState} from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function Dashboard() {

//   const Navigate = useNavigate();
//   const [Name, setName] = useState ("");

//     // Animasi bintang
//   const stars = Array.from({ length: 50 }, (_, i) => ({
//     id: i,
//     top: Math.random() * 100,
//     left: Math.random() * 100,
//     size: Math.random() * 3 + 1,
//     delay: Math.random() * 3,
//   }));

//   useEffect(() => {
//     // mengambil username dari localstorage
//     const currentUser = JSON.parse(localStorage.getItem("currentUser"));
//     if (currentUser && currentUser.name) {
//       setName(currentUser.name);
//     }
//   }, []);


//   return (

//     <div className="min-h-screen font-sans bg-gradient-to-br from-[#1a103d] via-[#2e1a63] to-[#4b0e86] relative overflow-hidden text-white pb-28">

//       {/* Animasi Bintang */}
//       {stars.map((star) => (
//         <motion.div
//           key={star.id}
//           className="absolute bg-white rounded-full"
//           style={{
//             top: `${star.top}%`,
//             left: `${star.left}%`,
//             width: star.size,
//             height: star.size,
//           }}
//           animate={{ opacity: [1, 0.2, 1] }}
//           transition={{
//             duration: 2 + Math.random() * 2,
//             repeat: Infinity,
//             delay: star.delay,
//           }}
//         />
//       ))}

//             {/* Glow Bulat */}
//       <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-30"></div>
//       <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>

     
//       {/* Cards sapaan */}
//       <section>
//         <div className="bg-[#5707A4]">
//         <h2 className="text-white font-bold px-5 py-3">Hai, {Name}</h2>
//         <p className="text-white px-5 py-3">Siap memulai pembelajaran sambil bermain hari ini?</p>
//         </div>
//       </section>

//       {/* Progress Belajar */}
//       <section className="p-4">
//         <h2 className="text-lg font-bold text-gray-700">Progress Belajar</h2>
//         <div className="mt-3 bg-white shadow-md rounded-xl p-4">
//           <p className="text-gray-600 text-sm">Seri Hijaiyah</p>
//           <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
//             <div className="bg-[#FF9102] h-3 rounded-full w-2/3"></div>
//           </div>
//           <p className="text-xs text-right text-gray-500 mt-1">65%</p>
//         </div>
//       </section>

//       {/* Seri Permainan */}
//       <section className="p-4">
//         <h2 className="text-lg font-bold text-gray-700 mb-3">
//           Seri Pembelajaran & Permainan
//         </h2>
//         <div className="grid grid-cols-2 gap-4">
//           {/* Card 1 */}
//           <Link to="/hijaiyah" className="bg-white shadow-md p-4 rounded-xl text-center hover:scale-105 transition">
//             <h3 className="font-semibold text-[#5707A4]">Hijaiyah</h3>
//             <p className="text-xs text-gray-500 mt-1">Belajar huruf Al-Qur’an</p>
//           </Link>

//           {/* Card 2 */}
//           <Link to="" className="bg-white shadow-md p-4 rounded-xl text-center hover:scale-105 transition">
//             <h3 className="font-semibold text-[#5707A4]">Tajwid</h3>
//             <h2 className="font-bold text-[#FF9102]">(Coming Soon)</h2>
//             <p className="text-xs text-gray-500 mt-1">Aturan bacaan</p>
//           </Link>

//           {/* Card 3 */}
//           <Link to="" className="bg-white shadow-md p-4 rounded-xl text-center hover:scale-105 transition">
//             <h3 className="font-semibold text-[#5707A4]">Kisah Nabi</h3>
//             <h2 className="font-bold text-[#FF9102]">(Coming Soon)</h2>
//             <p className="text-xs text-gray-500 mt-1">Inspirasi iman</p>
//           </Link>

//           {/* Card 4 */}
//           <Link to="" className="bg-white shadow-md p-4 rounded-xl text-center hover:scale-105 transition">
//             <h3 className="font-semibold text-[#5707A4]">Doa Harian</h3>
//             <h2 className="font-bold text-[#FF9102]">(Coming Soon)</h2>
//             <p className="text-xs text-gray-500 mt-1">Doa & dzikir</p>
//           </Link>
//         </div>
//       </section>

// {/*
//       {/* Quick Action 
//       <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-11/12">
//         <Link
//           to="/quiz"
//           className="block bg-[#FF9102] text-white text-center py-4 rounded-xl font-semibold shadow-lg hover:bg-amber-600 transition"
//         >
//           🚀 Mulai Kuis Baru
//         </Link>
//       </div>

//       */}
//     </div>
//   );
// }

import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Dashboard() {
  const Navigate = useNavigate();
  const [Name, setName] = useState("");

  // Animasi bintang
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 3,
  }));

  useEffect(() => {
    // mengambil username dari localstorage
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && currentUser.name) {
      setName(currentUser.name);
    }
  }, []);


  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-[#1a103d] via-[#2e1a63] to-[#4b0e86] relative overflow-hidden text-white pb-28">
      {/* Animasi Bintang */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}

      {/* Glow Bulat */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Sapaan */}
        <section className="mb-12 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold tracking-wide">
            Hai, <span className="text-[#FF9102]">{Name || "Teman"}</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Siap memulai pembelajaran sambil bermain hari ini?
          </p>
        </section>

        {/* Progress Belajar */}
        <section className="max-w-3xl mx-auto mb-16 bg-white bg-opacity-10 rounded-3xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold text-[#FF9102] mb-4">Progress Belajar</h3>
          <p className="text-gray-300 text-sm">Seri Hijaiyah</p>
          <div className="w-full bg-gray-700 rounded-full h-4 mt-2 overflow-hidden">
            <div className="bg-[#FF9102] h-4 rounded-full w-2/3 transition-all duration-500"></div>
          </div>
          <p className="text-xs text-right text-gray-400 mt-1">65%</p>
        </section>

        {/* Seri Pembelajaran & Permainan */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#FF9102] mb-8 text-center">
            Seri Pembelajaran & Permainan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Card 1 */}
            <Link
              to="/hijaiyah"
              className="bg-white bg-opacity-10 rounded-3xl p-8 shadow-2xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <h3 className="font-bold text-[#FF9102] text-2xl mb-2">Hijaiyah</h3>
              <p className="text-gray-300 text-sm">Belajar huruf Al-Qur’an</p>
            </Link>

            {/* Card 2 */}
            <div className="bg-white bg-opacity-10 rounded-3xl p-8 shadow-2xl flex flex-col items-center text-center opacity-70 cursor-not-allowed">
              <h3 className="font-bold text-[#FF9102] text-2xl mb-1">Tajwid</h3>
              <span className="font-extrabold text-[#FF9102] text-lg mb-2">(Coming Soon)</span>
              <p className="text-gray-300 text-sm">Aturan bacaan</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white bg-opacity-10 rounded-3xl p-8 shadow-2xl flex flex-col items-center text-center opacity-70 cursor-not-allowed">
              <h3 className="font-bold text-[#FF9102] text-2xl mb-1">Kisah Nabi</h3>
              <span className="font-extrabold text-[#FF9102] text-lg mb-2">(Coming Soon)</span>
              <p className="text-gray-300 text-sm">Inspirasi iman</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white bg-opacity-10 rounded-3xl p-8 shadow-2xl flex flex-col items-center text-center opacity-70 cursor-not-allowed">
              <h3 className="font-bold text-[#FF9102] text-2xl mb-1">Doa Harian</h3>
              <span className="font-extrabold text-[#FF9102] text-lg mb-2">(Coming Soon)</span>
              <p className="text-gray-300 text-sm">Doa & dzikir</p>
            </div>
          </div>
        </section>
      </div>

      {/* Tombol Mulai Kuis - fixed di atas navbar */}
      <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 w-11/12 max-w-md z-30">
        <Link
          to="/quiz"
          className="block bg-[#FF9102] text-white text-center py-4 rounded-full font-semibold shadow-lg hover:bg-amber-600 transition-transform transform hover:scale-105"
        >
          🚀 Mulai Kuis Baru
        </Link>
      </div>

      {/* Navbar Game - fixed di bawah */}
      <nav className="fixed bottom-0 left-0 w-full bg-[#5707A4] shadow-lg flex justify-around py-3 z-40">
        <Link to="/dashboard" className="text-white font-semibold hover:text-[#FF9102] transition">
          Dashboard
        </Link>
        <Link to="/hijaiyah" className="text-white font-semibold hover:text-[#FF9102] transition">
          Hijaiyah
        </Link>
        <Link to="/quiz" className="text-white font-semibold hover:text-[#FF9102] transition">
          Kuis
        </Link>
        <Link to="/profile" className="text-white font-semibold hover:text-[#FF9102] transition">
          Profile
        </Link>
      </nav>
    </div>
  );
}

