import React from "react";
import { Link } from "react-router-dom";
import Button from "../../component/button";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";
//import maskot from "../../assets/maskot.png";
import maskot1 from "../../assets/maskot1.png";
import maskot2 from "../../assets/maskot2.png";

import seri2 from "../../assets/icons/seri2.json";
import seri1 from "../../assets/icons/seri1.json";
import seri3 from "../../assets/icons/seri3.json";

function LandingPage() {
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 3,
  }));

  return (
    <div className="mt-16 font-sans bg-gradient-to-br from-[#1a103d] via-[#2e1a63] to-[#4b0e86]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Bintang */}
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

        {/* Glow bulat */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>

        {/* Konten */}
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center relative z-10 gap-12">
          <div className="flex-1 text-center lg:text-left max-w-xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-wide">
              DEEN <span className="text-[#FF9102]">QUIZ</span>
            </h1>
            <h2 className="mt-6 text-3xl text-gray-200 font-semibold tracking-wide">
              Game edukasi seputar Islam, belajar jadi lebih seru!
            </h2>
            <p className="mt-6 text-gray-300 leading-relaxed text-lg">
              DEEN QUIZ menghadirkan berbagai seri kuis interaktif: dari huruf
              hijaiyah, kisah nabi dan rasul, hingga pengetahuan Islam sehari-hari.
              Cocok untuk semua usia.
            </p>

            <Button>
              <Link
                to="/login"
                className="inline-block mt-10 px-8 py-4 bg-[#FF9102] hover:bg-amber-600 text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105"
              >
                Mulai Belajar
              </Link>
            </Button>
          </div>

          <div className="flex-1 mt-12 lg:mt-0 flex justify-center">
            <motion.img
              src={maskot1}
              alt="Game Edukasi Quran"
              className="max-w-xs md:max-w-md drop-shadow-2xl rounded-3xl"
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </section>

      {/* Kenapa DEEN QUIZ */}
      <section className="relative bg-gradient-to-br from-[#4b0e86] via-[#2e1a63] to-[#1a103d] overflow-hidden min-h-screen flex items-center">
        {/* Bintang */}
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

        {/* Glow bulat */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>

        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">

          {/* Gambar */}
          <div className="flex-1 mt-12 lg:mt-0 flex justify-center">
            <motion.img
              src={maskot2}
              alt="Game Edukasi Quran"
              className="max-w-xs md:max-w-md drop-shadow-2xl rounded-3xl"
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Teks */}
          <div className="flex-1 max-w-lg text-center lg:text-left">
            <h1 className="text-5xl font-extrabold text-white leading-tight tracking-wide">
              Kenapa <span className="text-[#FF9102]">DEEN QUIZ?</span>
            </h1>
            <ul className="mt-8 space-y-4 text-gray-200 text-lg list-inside list-disc">
              <li>Belajar sambil bermain</li>
              <li>Konten islami yang terpercaya</li>
              <li>Mudah diakses di perangkat apa pun</li>
              <li>Cocok untuk anak-anak dan dewasa</li>
            </ul>
          </div>

          
        </div>
      </section>

      {/* Seri Permainan */}
      <section className="min-h-screen bg-gray-100 py-16">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#5707A4] leading-tight text-center max-w-3xl">
            Mulai Belajar dengan Seri Permainan Favoritmu
          </h1>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full px-5">
            {/* Card 1 */}
            <div className="p-8 rounded-3xl shadow-2xl bg-white transform transition duration-300 hover:scale-105 flex flex-col items-center text-center">
              <h2 className="font-bold text-[#5707A4] text-2xl">Seri Hijaiyah</h2>
              <p className="mt-20 text-gray-700 text-base leading-relaxed">
                Belajar huruf hijaiyah lewat kuis interaktif yang menyenangkan.
              </p>
              <Lottie animationData={seri1} loop={true} className="w-36 h-36 mt-8" />
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-3xl shadow-2xl bg-white transform transition duration-300 hover:scale-105 flex flex-col items-center text-center">
              <h2 className="font-bold text-[#5707A4] text-2xl">
                Seri Kisah Nabi & Rasul <span className="text-[#FF9102] block text-lg">(Coming Soon)</span>
              </h2>
              <p className="mt-4 text-gray-700 text-base leading-relaxed">
                Kenali kisah para nabi dan rasul lewat pertanyaan seru.
              </p>
              <Lottie animationData={seri2} loop={true} className="w-36 h-36 mt-8" />
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-3xl shadow-2xl bg-white transform transition duration-300 hover:scale-105 flex flex-col items-center text-center">
              <h2 className="font-bold text-[#5707A4] text-2xl">
                Seri Tajwid <span className="text-[#FF9102] block text-lg mt-6">(Coming Soon)</span>
              </h2>
              <p className="mt-4 text-gray-700 text-base leading-relaxed">
                Belajar aturan membaca Al-Qur'an dengan kuis singkat dan mudah dipahami.
              </p>
              <Lottie animationData={seri3} loop={true} className="w-36 h-36 mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="bg-[#4B0E86] py-20 px-6">
        <h2 className="text-white text-3xl text-center font-bold max-w-3xl mx-auto">
          Apa Kata Mereka?
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mt-12">
          {/* testi 1 */}
          <div className="bg-white shadow-lg p-8 rounded-2xl flex flex-col justify-between">
            <p className="text-gray-700 italic leading-relaxed">
              "Anak saya jadi lebih semangat mengenal huruf hijaiyah. Belajar sambil main game."
            </p>
            <div className="mt-6 flex items-center space-x-4">
              <img src={user1} alt="user" className="w-12 h-12 rounded-full object-cover" />
              <span className="font-semibold text-gray-900">Ibu Rani, Bandung</span>
            </div>
          </div>

          {/* testi 2 */}
          <div className="bg-white shadow-lg p-8 rounded-2xl flex flex-col justify-between">
            <p className="text-gray-700 italic leading-relaxed">
              "Asyik banget! Bisa belajar Islam sambil kuis bareng teman-teman."
            </p>
            <div className="mt-6 flex items-center space-x-4">
              <img src={user2} alt="user" className="w-12 h-12 rounded-full object-cover" />
              <span className="font-semibold text-gray-900">Caca, Cimahi</span>
            </div>
          </div>

          {/* testi 3 */}
          <div className="bg-white shadow-lg p-8 rounded-2xl flex flex-col justify-between">
            <p className="text-gray-700 italic leading-relaxed">
              "Kontennya sederhana tapi bermanfaat. Saya jadi bisa belajar bareng keluarga."
            </p>
            <div className="mt-6 flex items-center space-x-4">
              <img src={user3} alt="user" className="w-12 h-12 rounded-full object-cover" />
              <span className="font-semibold text-gray-900">Keysa, Bandung Barat</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quote & CTA */}
      <section
        className="flex items-center py-20 justify-center bg-cover bg-center min-h-screen"
        style={{ backgroundImage: "url('/src/assets/bg.jpg')" }}
      >
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center text-center max-w-4xl">
          <div className="flex-1 text-white px-6">
            <h2 className="font-bold text-3xl md:text-4xl leading-snug">
              “Dengan bismillah, mari jadikan belajar Islam lebih menyenangkan melalui kuis interaktif yang seru dan mudah diakses.”
            </h2>

            <h3 className="mt-10 text-xl font-semibold">
              “Ajak keluarga belajar bersama, karena ilmu adalah warisan terbaik.”
            </h3>

            <Link to="/login">
              <button className="mt-12 px-10 py-4 bg-[#FF9102] hover:bg-amber-600 text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105">
                Bismillah Mulai
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FF9102] py-4">
        <p className="text-center text-white text-sm select-none">
          © {new Date().getFullYear()} DEEN QUIZ. Semua Hak Dilindungi.
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;
