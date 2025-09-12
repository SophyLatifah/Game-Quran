import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../../component/button";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

{/* Gambar */}
//import alquran from "../../assets/alquran.png";
// import picture1 from "../../assets/picture1.png";
import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";
import maskot from "../../assets/maskot.png";
import maskot1 from "../../assets/maskot1.png"

{/* Icons */}
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
    <div className="mt-16 font-sans">
    
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#1a103d] via-[#2e1a63] to-[#4b0e86] overflow-hidden min-h-screen flex">

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
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              DEEN <span className="text-[#FF9102] ">QUIZ</span>
            </h1>
            <h2 className="mt-6 text-2xl text-gray-200 font-bold ">
              Game edukasi seputar Islam, belajar jadi lebih seru!
            </h2>
            <p className="mt-4 text-gray-200 py-10">
              DEEN QUIZ menghadirkan berbagai seri kuis interaktif: dari huruf
              hijaiyah, kisah nabi dan rasul, hingga pengetahuan Islam sehari-hari.
              Cocok untuk semua usia.
            </p>

            <Button>
              <Link
                to="/login"
                className="mt-8 px-6 py-3 bg-[#FF9102] hover:bg-amber-600 text-white font-semibold rounded-full shadow-lg transition"
              >
                Mulai Belajar
              </Link>
            </Button>
          </div>

          <div className="flex-1 mt-20 lg:mt-0 flex justify-center">
          <motion.img
            src={maskot1}
            alt="Game Edukasi Quran"
            className="max-w-xs md:max-w-md drop-shadow-2xl"
            animate={{ y: [0, -20, 0] }}   // gerakan naik turun
            transition={{
              duration: 4,                  // lama sekali cycle
              repeat: Infinity,             // ulang terus
              ease: "easeInOut"
            }}
          />
          </div>
        </div>
      </section>

      {/* 1 */}
      <section className="relative bg-gradient-to-br from-[#4b0e86] via-[#2e1a63] to-[#1a103d] overflow-hidden min-h-scree flex items-center">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">

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


          {/* Gambar */}
           <div className="flex-1 mt-20 lg:mt-0 flex justify-center">
            <img
              src={maskot}
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
              <li>✅ Mudah diakses di perangkat apa pun</li>
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
            <div className="p-6 rounded-3xl shadow-2xl bg-white transform transition duration-300 hover:scale-105 flex flex-col items-center">
              <h2 className="text-center font-bold text-[#5707A4] text-xl">Seri Hijaiyah</h2>
              <br />
              <h3>Belajar huruf hijaiyah lewat kuis interaktif yang menyenangkan.</h3>

            <Lottie 
              animationData={seri1} 
              loop={true} 
              className="w-32 h-32 mt-10"
            />

            </div>

          {/* Cards 2 */}
          <div className="p-6 rounded-3xl shadow-2xl bg-white transform transition duration-300 hover:scale-105 flex flex-col items-center">
            <h2 className="text-center font-bold text-[#5707A4] text-xl">Seri Kisah Nabi & Rasul <span className="text-[#FF9102]"><br /> (Coming Soon) </span></h2>
            <h3>Kenali kisah para nabi dan rasul lewat pertanyaan seru.</h3>

            <Lottie 
              animationData={seri2} 
              loop={true} 
              className="w-32 h-32 mt-10"
            />

          </div>

          {/* Cards 3 */}
          <div className="p-6 rounded-3xl shadow-2xl bg-white transform transition duration-300 hover:scale-105 flex flex-col items-center">
            <h2 className="text-center font-bold text-[#5707A4] text-xl">Seri Tajwid <span className="text-[#FF9102]"><br />(Coming Soon)</span></h2>
            <h3>Belajar aturan membaca Al-Qur'an dengan kuis singkat dan mudah dipahami.</h3>

          <Lottie 
            animationData={seri3} 
            loop={true} 
            className="w-32 h-32 mt-10"
          />

          </div>
        </div>
        </div>
      </section>

      {/* 3 */}
      <section className="flex bg-[#4B0E86] py-20 px-10 ">
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

          <h3 className="mt-10 text-center font-bold">“Ajak keluarga belajar bersama, karena ilmu adalah warisan terbaik.”</h3>

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
