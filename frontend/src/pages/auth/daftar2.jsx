import React from "react";
import bgPattern from "../../assets/bg2.svg";
//import robot from "../../assets/robot.png"; // ganti sesuai file robot kamu
import { useNavigate } from "react-router-dom";

const Daftar2 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Mobile Container */}
      <div
        className="w-[375px] min-h-screen flex flex-col items-center justify-center px-6 relative text-center"
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Tombol English */}
        <button className="absolute top-3 right-3 text-white border px-3 py-1 rounded text-sm hover:bg-white hover:text-black transition">
          🌐 ENGLISH
        </button>

        {/* Gambar Robot */}
        {/* <img src={robot} alt="robot" className="w-40 mb-6 mx-auto" /> */}

        {/* Judul */}
        <h1 className="text-purple-400 text-2xl font-bold mb-2">Think Quran</h1>
        <p className="text-white mb-8">
          Berikut adalah cara mudah untuk memahami Al-Quran.
        </p>

        {/* Tombol */}
        <button
          onClick={() => navigate("/login")} // kalau ada halaman login
          className="w-full bg-purple-700 text-white py-3 rounded-md mb-4 border border-orange-400 hover:bg-purple-800 transition"
        >
          SAYA SUDAH PUNYA AKUN
        </button>
        <button
          onClick={() => navigate("/daftar")}
          className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition"
        >
          DAFTAR
        </button>
      </div>
    </div>
  );
};

export default Daftar2;
