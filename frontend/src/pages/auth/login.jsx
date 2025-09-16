import React from "react";
import bgPattern from "../../assets/bg2.svg";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center ">
      {/* Mobile Container */}
      <div
        className="w-[375px] min-h-screen flex items-center justify-center px-4 relative"
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Card */}
        <div className="bg-[#2d0052]/90 w-full p-6 rounded-lg relative shadow-lg">
          {/* Tombol close */}
          <button
            onClick={() => navigate("/daftar2")}
            className="absolute top-3 right-3 text-white text-2xl hover:text-orange-400 transition"
          >
            <IoClose />
          </button>

          {/* Judul */}
          <h1 className="text-orange-400 text-2xl font-bold mb-6 text-center">
            Masukkan perincian (detail) anda
          </h1>

          {/* Input Email */}
          <label className="block text-white mb-2">
            Alamat email / nomor telepon
          </label>
          <input
            type="text"
            placeholder=""
            className="w-full px-4 py-3 rounded-md bg-purple-700 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4"
          />

          {/* Input Password */}
          <label className="block text-white mb-2">Kata sandi</label>
          <input
            type="password"
            placeholder=""
            className="w-full px-4 py-3 rounded-md bg-purple-700 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-2"
          />

          {/* Tombol Masuk */}
          <button 
          onClick={() => navigate("/dashboard")}
          className="w-full bg-[#9b4d3d] text-gray-200 py-3 rounded-md font-semibold mb-4 hover:bg-[#b85e4f] transition">
            MASUK
          </button>

            

          {/* Link Lupa Sandi */}
          <p className="text-center text-blue-400 underline mb-6 cursor-pointer">
            LUPA KATA SANDI
          </p>

          {/* Tombol Facebook */}
          <button className="w-full flex items-center justify-center bg-purple-700 text-white py-3 rounded-md mb-3 border border-orange-400 hover:bg-purple-800 transition">
            <FaFacebook className="mr-2 text-blue-400" /> Masuk Melalui Facebook
          </button>

          {/* Tombol Google */}
          <button className="w-full flex items-center justify-center bg-purple-700 text-white py-3 rounded-md border border-orange-400 hover:bg-purple-800 transition">
            <FcGoogle className="mr-2" /> Sign In With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
