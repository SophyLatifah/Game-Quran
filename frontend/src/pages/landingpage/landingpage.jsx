import React from "react";
import { useNavigate } from "react-router-dom";

{/* import gambar */}
import heroImage from "../../assets/hero_image.png"; 
import factImage from "../../assets/robot_hp.png"; 
import phonesImage from "../../assets/hp.png"; // gambar HP
import bgPattern from "../../assets/bg1.png"; // background pattern

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-purple-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center">
          {/* Kiri: Teks */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-snug">
              Cara mudah mempelajari bahasa Arab al-Quran.
            </h1>

            <ul className="space-y-3 text-lg">
              <li className="flex items-center">
                <span className="text-orange-400 mr-2">✦</span> Dalam 15 menit sehari.
              </li>
              <li className="flex items-center">
                <span className="text-orange-400 mr-2">✦</span> Tanpa dasar bahasa Arab.
              </li>
              <li className="flex items-center">
                <span className="text-orange-400 mr-2">✦</span> Cocok untuk segala usia.
              </li>
            </ul>

            <button 
            onClick={() => navigate("/daftar2")}
            className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-xl font-semibold text-lg shadow-md">
              Mulai belajar
            </button>
          </div>

          {/* Kanan: Gambar */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src={heroImage}
              alt="Belajar Quran"
              className="max-h-[420px] object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Fact Section */}
      <section className="py-20 bg-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-10">
          {/* Kiri: Gambar */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={factImage}
              alt="Tahukah Anda"
              className="max-h-[420px] object-contain drop-shadow-lg"
            />
          </div>

          {/* Kanan: Teks */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Tahukah Anda?
            </h2>
            <p className="text-lg leading-relaxed">
              Al-Quran terdiri dari kata-kata yang diulang-ulang.
            </p>
            <p className="text-2xl md:text-3xl font-bold">
              Ingat <span className="text-orange-400">900 kata</span>, <br />
              Pahami <span className="text-orange-400">80% al-Quran</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative flex flex-col items-center justify-center text-center text-white py-28 px-6"
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gambar HP */}
        <div className="mb-12">
          <img
            src={phonesImage}
            alt="Aplikasi Quran"
            className="max-h-[320px] mx-auto object-contain"
          />
        </div>

        {/* Teks */}
        <h2 className="text-3xl md:text-4xl font-extrabold max-w-3xl mx-auto leading-snug">
          Coba sesi pertama Anda secara gratis dan nikmati pembelajaran bahasa
          al-Quran.
        </h2>

        {/* Tombol */}
        <button 
        onClick={() => navigate("/daftar2")}
        className="mt-8 bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-xl font-semibold text-lg shadow-md">
          Mulai belajar
        </button>
      </section>
    </>
  );
};

export default LandingPage;
