// import React from "react";
// import { Link } from "react-router-dom";

// function LandingPage() {
//   return (
//     <div style={{ padding: "20px" }}>
//     {/*HERO SECTION*/}
//     <section className="bg-[#4B0E86] min-h-screen flex items-center">
//       <div>

//       </div>
//       <h1 className="">Selamat Datang di Game Edukasi Quran!</h1>
//       <p>Cara mudah dan interaktif untuk mempelajari bacaan Al-Quran</p>
//         <Link to="/login">
//           <button className="">
//             Mulai Belajar
//           </button>
//         </Link>
//     </section>
      
//     <section>
//       <h2>Tahukah Anda?</h2>
//       <h2>Al-Qur'an terdiri dari banyak kata yang dibangun dari huruf <b>Hijaiyah</b>. 
//       Mari kita pelajari huruf-hurufnya sebagai langkah pertama!</h2>
//     </section>

//     <section>
//       <h2>Mulailah perjalanan Anda dengan mempelajari huruf-huruf hijaiyah, pondasi pertama dalam membaca Al-Qur’an.</h2>
//       <Link to="/login">
//           <button>Mulai Belajar
//           </button>
//       </Link>
//     </section>

//     <section>
//       <h2>Dalam 15 menit, Anda bisa merasakan kegembiraan.</h2>
//     </section>
  
//     <section>
//       <h2>Perubahan positif yang tidak biasa setelah Anda memahami al-Quran:</h2>
//     </section>

//     </div>
//   );
// }

// export default LandingPage;

import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../../component/button";
// import { motion } from "framer-motion";

{/* Gambar */}
import alquran from "../../assets/alquran.png";
import picture1 from "../../assets/picture1.png";
import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";



function LandingPage() {
  return (
    <div className="mt-16 font-sans">
      {/* HERO SECTION */}
      <section className="bg-[#4B0E86] min-h-screen flex">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl   md:text-5xl font-extrabold text-white leading-tight">
              DEEN <span className="text-[#FF9102]">QUIZ</span>
            </h1>
            <h2 className="mt-6 text-2xl text-gray-200 font-bold ">
              Game edukasi seputar Islam, belajar jadi lebih seru!
            </h2>
            <p className="mt-4 text-gray-200 py-10">
              DEEN QUIZ menghadirkan berbagai seri kuis interaktif: dari huruf hijaiyah, sejarah nabi dan rasul, hingga pengetahuan Islam sehari-hari. Cocok untuk semua usia.
            </p>

          <Button>
            <Link to="/login" className="mt-8 px-6 py-3 bg-[#FF9102] hover:bg-amber-600 text-white font-semibold rounded-full shadow-lg transition">
                Mulai Belajar
            </Link>
          </Button>
          </div>

          {/* Hero Image */}
          <div className="flex-1 mt-20 lg:mt-0 flex justify-center">
            <img
              src={alquran}
              alt="Game Edukasi Quran"
              className="max-w-xs md:max-w-md drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* 1 */}
      <section className="bg-[#5707A4] min-h-scree flex items-center">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
          {/* Gambar */}
           <div className="flex-1 mt-20 lg:mt-0 flex justify-center">
            <img
              src={picture1}
              alt="Game Edukasi Quran"
              className="max-w-xs md:max-w-md drop-shadow-2xl"
            />
          </div>

          {/* Teks */}
          <div className="flex-1  lg:text-left">
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">Kenapa <span className="text-[#FF9102]">DEEN QUIZ?</span></h1>
            <ul className="mt-6 space-y-3 text-gray-200">
              <li>✅ Belajar sambil bermain</li>
              <li>✅ Konten islami yang terpercaya</li>
              <li>✅ Mudah diakses di perangkat apa pu</li>
              <li>✅ Cocok untuk anak-anak dan dewasa</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2 */}
      <section className="min-h-scree flex bg-gray-100 ">
        <div className="container mx-auto px-6 flex flex-col items-center mt-10">
          {/* Teks */}
            <div>
              <h1 className="text-xl md:text-4xl font-extrabold text-[#5707A4] leading-tight text-center">Mulai Belajar dengan Seri Permainan Favoritmu</h1>
            </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 max-w-6xl px-5 pb-12 mx-auto">
          {/* cards 1 */}
            <div className="p-6 rounded-lg shadow-2xl bg-white transform transition duration-300 hover:scale-105">
              <h2 className="text-center font-bold text-[#5707A4] text-xl">Seri Hijaiyah</h2>
              <br />
              <h3>Belajar huruf hijaiyah lewat kuis interaktif yang menyenangkan.</h3>
            </div>

          {/* Cards 2 */}
          <div className="p-6 rounded-lg shadow-2xl bg-white transform transition duration-300 hover:scale-105">
            <h2 className="text-center font-bold text-[#5707A4] text-xl">Seri Kisah Nabi & Rasul <span className="text-[#FF9102]"><br /> (Coming Soon) </span></h2>
            <h3>Kenali kisah para nabi dan rasul lewat pertanyaan seru.</h3>
          </div>

          {/* Cards 3 */}
          <div className="p-6 rounded-lg shadow-2xl bg-white transform transition duration-300 hover:scale-105">
            <h2 className="text-center font-bold text-[#5707A4] text-xl">Seri Tajwid <span className="text-[#FF9102]"><br />(Coming Soon)</span></h2>
            <h3>Belajar aturan membaca Al-Qur'an dengan kuis singkat dan mudah dipahami.</h3>
          </div>
        </div>
        </div>
      </section>

      {/* 3 */}
      <section className="flex bg-[#4B0E86] py-20 px-10">
        <div>
        <h2 className="text-white text-3xl text-center font-bold">Apa Kata Mereka?</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 mt-10">

          {/* testi 1 */}
          <div className="bg-white shadow-md p-6 rounded-xl">
            <p className="text-gray-600 italic">
            "Anak saya jadi lebih semangat mengenal huruf hijaiyah. Belajar sambil main game."
            </p>
            <div className="mt-4 flex items-center space-x-3">
              <img src={user1} alt="user" className="w-10 h-10 rounded-full"/>
              <span className="font-semibold">Ibu Rani, Bandung</span>
            </div>
          </div>

          {/* testi 2 */}
          <div className="bg-white shadow-md p-6 rounded-xl">
            <p className="text-gray-600 italic">"Asyik banget! Bisa belajar Islam sambil kuis bareng teman-teman."</p>
            <div className="mt-4 flex items-center space-x-3">
              <img src={user2} alt="user" className="w-10 h-10 rounded-full"/>
              <span className="font-semibold ">Caca, Cimahi</span>
            </div>
          </div>

          {/* testi 3 */}
          <div className="bg-white shadow-md p-6 rounded-xl">
            <p className="text-gray-600 italic">"Kontennya sederhana tapi bermanfaat. Saya jadi bisa belajar bareng keluarga."</p>
            <div className="mt-4 flex items-center space-x-3">
              <img src={user3} alt="user" className="w-10 h-10 rounded-full"/>
              <span className="font-semibold ">Keysa, Bandung Barat</span>
            </div>
          </div>
        </div>
        </div>
      </section>

    {/* 4 */}
      <section className="flex items-center py-20 justify-center bg-[url('/src/assets/bg.jpg')] bg-cover bg-center min-h-screen">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center text-center ">
        <div className="flex-1 text-center">
          <h2 className="font-bold text-2xl text-center text-white">“Dengan bismillah, mari jadikan belajar Islam lebih menyenangkan melalui kuis interaktif yang seru dan mudah diakses.”</h2>

          <h3 className="mt-10 text-center">“Ajak keluarga belajar bersama, karena ilmu adalah warisan terbaik.”</h3>

          <Link to="/login">
              <button className="mt-8 px-6 py-3 bg-[#FF9102] hover:bg-amber-600 text-white font-semibold rounded-full shadow-lg transition">
                Bismillah Mulai
              </button>
            </Link>
        </div>
        
        </div>
      </section>

    {/* Footter */}
    <section className="bg-[#FF9102]">
    <p className="text-center text-white">© {new Date().getFullYear()} DEEN QUIZ. Semua Hak Dilindungi.</p>
    </section>
    </div>
  );
}

export default LandingPage;
