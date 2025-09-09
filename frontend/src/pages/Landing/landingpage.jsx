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
import { Link } from "react-router-dom";

import alquran from "../../assets/alquran.png";


function LandingPage() {
  return (
    <div className="font-sans">
      {/* HERO SECTION */}
      <section className="bg-[#4B0E86] min-h-screen flex">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Cara Mudah Belajar <br /> <span className="text-[#FF9102]">Al-Qur’an</span>
            </h1>
            <p className="mt-6 text-lg text-gray-200">
              Belajar membaca huruf hijaiyah dan kata dalam Al-Qur’an dengan cara yang interaktif dan menyenangkan.
            </p>
            <ul className="mt-6 space-y-3 text-gray-200">
              <li>✅ Belajar hanya 15 menit sehari</li>
              <li>✅ Cocok untuk semua umur</li>
              <li>✅ Interaktif tanpa harus paham bahasa Arab dulu</li>
            </ul>
            <Link to="/login">
              <button className="mt-8 px-6 py-3 bg-[#FF9102] hover:bg-amber-600 text-white font-semibold rounded-full shadow-lg transition">
                Mulai Belajar
              </button>
            </Link>
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
      <section className="bg-[#5707A4] min-h-screen flex items-cente">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
          {/* Gambar */}
          <div>

          </div>

          {/* Teks */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">Tahukah Anda?</h1>
            <h2 className="mt-6 text-lg text-gray-200 font-bold">
              Al-Qur'an terdiri dari banyak kata yang dibangun dari huruf <b className="text-[#FF9102]">Hijaiyah</b>. Mari kita pelajari huruf-hurufnya sebagai langkah pertama!
            </h2>
      
          </div>
        </div>
      </section>

      {/* 2 */}
      <section>
        <div>
          {/* Teks */}
            <div>

              
            </div>
          {/* Gambar */}

        </div>
      </section>
    </div>
  );
}

export default LandingPage;
