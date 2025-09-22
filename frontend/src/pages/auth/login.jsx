// import React from "react";
// import bgPattern from "../../assets/bg2.svg";
// import { FaFacebook } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import { IoClose } from "react-icons/io5";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen flex items-center justify-center ">
//       {/* Mobile Container */}
//       <div
//         className="w-[375px] min-h-screen flex items-center justify-center px-4 relative"
//         style={{
//           backgroundImage: `url(${bgPattern})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Card */}
//         <div className="bg-[#2d0052]/90 w-full p-6 rounded-lg relative shadow-lg">
//           {/* Tombol close */}
//           <button
//             onClick={() => navigate("/daftar2")}
//             className="absolute top-3 right-3 text-white text-2xl hover:text-orange-400 transition"
//           >
//             <IoClose />
//           </button>

//           {/* Judul */}
//           <h1 className="text-orange-400 text-2xl font-bold mb-6 text-center">
//             Masukkan perincian (detail) anda
//           </h1>

//           {/* Input Email */}
//           <label className="block text-white mb-2">
//             Alamat email / nomor telepon
//           </label>
//           <input
//             type="text"
//             placeholder=""
//             className="w-full px-4 py-3 rounded-md bg-purple-700 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4"
//           />

//           {/* Input Password */}
//           <label className="block text-white mb-2">Kata sandi</label>
//           <input
//             type="password"
//             placeholder=""
//             className="w-full px-4 py-3 rounded-md bg-purple-700 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-2"
//           />

//           {/* Tombol Masuk */}
//           <button 
//           onClick={() => navigate("/dashboard")}
//           className="w-full bg-[#9b4d3d] text-gray-200 py-3 rounded-md font-semibold mb-4 hover:bg-[#b85e4f] transition">
//             MASUK
//           </button>

            

//           {/* Link Lupa Sandi */}
//           <p className="text-center text-blue-400 underline mb-6 cursor-pointer">
//             LUPA KATA SANDI
//           </p>

//           {/* Tombol Facebook */}
//           <button className="w-full flex items-center justify-center bg-purple-700 text-white py-3 rounded-md mb-3 border border-orange-400 hover:bg-purple-800 transition">
//             <FaFacebook className="mr-2 text-blue-400" /> Masuk Melalui Facebook
//           </button>

//           {/* Tombol Google */}
//           <button className="w-full flex items-center justify-center bg-purple-700 text-white py-3 rounded-md border border-orange-400 hover:bg-purple-800 transition">
//             <FcGoogle className="mr-2" /> Sign In With Google
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import bgPattern from "../../assets/bg2.svg";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// API Base URL
const API_BASE = "http://localhost:5000/api";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phone: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (error) setError(""); // Clear error saat user input
  };

  const validateForm = () => {
    if (!formData.phone.trim()) {
      setError("Nomor telepon/email tidak boleh kosong");
      return false;
    }

    if (!formData.password) {
      setError("Password tidak boleh kosong");
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    setError("");

    try {
      // Format phone number untuk login
      let formattedPhone = formData.phone.trim();
      
      // Jika input adalah nomor telepon, format sesuai database
      if (/^\d/.test(formattedPhone)) {
        if (formattedPhone.startsWith('+62')) {
          formattedPhone = '0' + formattedPhone.substring(3);
        } else if (!formattedPhone.startsWith('0') && formattedPhone.length >= 10) {
          formattedPhone = '0' + formattedPhone;
        }
      }

      const response = await axios.post(`${API_BASE}/auth/login`, {
        phone: formattedPhone,
        password: formData.password
      });

      console.log("Login successful:", response.data);

      // Simpan user data ke localStorage
      const userData = {
        id: response.data.user.id,
        nama: response.data.user.nama,
        phone: response.data.user.phone,
        loginTime: new Date().toISOString()
      };
      localStorage.setItem("userData", JSON.stringify(userData));

      // Navigate ke dashboard
      navigate("/dashboard");

    } catch (error) {
      console.error("Login error:", error);
      
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else if (error.response?.status === 401) {
        setError("Nomor telepon atau password salah");
      } else if (error.response?.status >= 500) {
        setError("Server sedang bermasalah. Coba lagi nanti.");
      } else {
        setError("Tidak dapat terhubung ke server. Periksa koneksi internet Anda.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
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
            disabled={loading}
          >
            <IoClose />
          </button>

          {/* Judul */}
          <h1 className="text-orange-400 text-2xl font-bold mb-6 text-center">
            Masukkan perincian (detail) anda
          </h1>

          {/* Input Email/Phone */}
          <label className="block text-white mb-2">
            Alamat email / nomor telepon
          </label>
          <input
            type="text"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="08123456789 atau email@domain.com"
            className={`w-full px-4 py-3 rounded-md bg-purple-700 text-white placeholder-purple-300 focus:outline-none focus:ring-2 mb-4 ${
              error && error.includes("telepon") ? 'focus:ring-red-400' : 'focus:ring-purple-400'
            }`}
            disabled={loading}
          />

          {/* Input Password */}
          <label className="block text-white mb-2">Kata sandi</label>
          <div className="relative mb-2">
            <input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Masukkan password"
              className={`w-full px-4 py-3 rounded-md bg-purple-700 text-white placeholder-purple-300 focus:outline-none focus:ring-2 ${
                error && error.includes("Password") ? 'focus:ring-red-400' : 'focus:ring-purple-400'
              }`}
              disabled={loading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-purple-300 hover:text-white"
              disabled={loading}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-400 rounded-lg">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {/* Tombol Masuk */}
          <button 
            onClick={handleSubmit}
            disabled={loading || !formData.phone || !formData.password}
            className={`w-full py-3 rounded-md font-semibold mb-4 transition ${
              loading || !formData.phone || !formData.password
                ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
                : 'bg-[#9b4d3d] text-gray-200 hover:bg-[#b85e4f]'
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                MASUK...
              </div>
            ) : (
              "MASUK"
            )}
          </button>

          {/* Link Lupa Sandi */}
          <p className="text-center text-blue-400 underline mb-6 cursor-pointer hover:text-blue-300">
            LUPA KATA SANDI
          </p>

          {/* Tombol Facebook */}
          <button 
            disabled={loading}
            className="w-full flex items-center justify-center bg-purple-700 text-white py-3 rounded-md mb-3 border border-orange-400 hover:bg-purple-800 transition disabled:opacity-50"
          >
            <FaFacebook className="mr-2 text-blue-400" /> Masuk Melalui Facebook
          </button>

          {/* Tombol Google */}
          <button 
            disabled={loading}
            className="w-full flex items-center justify-center bg-purple-700 text-white py-3 rounded-md border border-orange-400 hover:bg-purple-800 transition disabled:opacity-50"
          >
            <FcGoogle className="mr-2" /> Sign In With Google
          </button>

          {/* Link ke Register */}
          <p className="text-center mt-4">
            <span className="text-purple-300 text-sm">Belum punya akun? </span>
            <button
              onClick={() => navigate("/daftar")}
              className="text-orange-400 underline text-sm hover:text-orange-300"
              disabled={loading}
            >
              Daftar sekarang
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;