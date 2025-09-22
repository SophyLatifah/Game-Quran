// import React from "react";

// // import gambar
// import bgPattern from "../../assets/bg2.svg";
// import { FaFacebook } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import { IoClose } from "react-icons/io5";
// import { useNavigate } from "react-router-dom";

// const Daftar3 = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen flex items-center justify-center">
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
//             onClick={() => navigate("/")}
//             className="absolute top-3 right-3 text-white text-2xl hover:text-orange-400 transition"
//           >
//             <IoClose />
//           </button>

//           {/* Judul */}
//           <h1 className="text-orange-400 text-3xl font-bold mb-6 text-center">
//             Informasi Masuk
//           </h1>

//           {/* Input Nomor Telepon */}
//           <label className="block text-white mb-2">
//             Masukkan nomor telepon anda
//           </label>
//           <div className="flex mb-4">
//             <select className="bg-[#ec4899] text-white px-3 py-2 rounded-l-md outline-none">
//               <option value="+62">+62</option>
//             </select>
//             <input
//               type="tel"
//               placeholder=""
//               className="flex-1 px-4 py-2 rounded-r-md bg-[#a855f7] text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
//             />
//           </div>

//           {/* Atau Gunakan Email */}
//           <p className="text-center text-white text-sm underline mb-6 cursor-pointer">
//             gunakan alamat email saya
//           </p>

//           {/* Input Password */}
//           <label className="block text-white mb-2">Kata sandi</label>
//           <input
//             type="password"
//             placeholder="Masukkan kata sandi"
//             className="w-full px-4 py-3 rounded-md bg-purple-700 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-6"
//           />

//         {/* Tombol Lanjutkan */}
//       <button
//         onClick={() => navigate("/dashboard")}
//         className="w-full bg-[#9b4d3d] text-white py-3 rounded-md font-semibold mb-6 hover:bg-[#b85e4f] transition"
//       >
//         BUAT AKUN
//       </button>

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

// export default Daftar3;

// // import React, { useState } from "react";
// // import bgPattern from "../../assets/bg2.svg";
// // import { FaFacebook } from "react-icons/fa";
// // import { FcGoogle } from "react-icons/fc";
// // import { IoClose } from "react-icons/io5";
// // import { useNavigate } from "react-router-dom";

// // const Daftar3 = () => {
// //   const navigate = useNavigate();
// //   const [phone, setPhone] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleSubmit = async () => {
// //     try {
// //       const res = await fetch("http://localhost:5000/api/register-step2", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ phone, password }),
// //       });

// //       if (res.ok) {
// //         navigate("/dashboard"); // selesai daftar
// //       } else {
// //         alert("Gagal menyimpan data.");
// //       }
// //     } catch (error) {
// //       console.error(error);
// //       alert("Terjadi kesalahan.");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center">
// //       <div
// //         className="w-[375px] min-h-screen flex items-center justify-center px-4 relative"
// //         style={{
// //           backgroundImage: `url(${bgPattern})`,
// //           backgroundSize: "cover",
// //           backgroundPosition: "center",
// //         }}
// //       >
// //         <div className="bg-[#2d0052]/90 w-full p-6 rounded-lg relative shadow-lg">
// //           <button
// //             onClick={() => navigate("/")}
// //             className="absolute top-3 right-3 text-white text-2xl hover:text-orange-400 transition"
// //           >
// //             <IoClose />
// //           </button>

// //           <h1 className="text-orange-400 text-3xl font-bold mb-6 text-center">
// //             Informasi Masuk
// //           </h1>

// //           <label className="block text-white mb-2">
// //             Masukkan nomor telepon anda
// //           </label>
// //           <div className="flex mb-4">
// //             <select className="bg-[#ec4899] text-white px-3 py-2 rounded-l-md outline-none">
// //               <option value="+62">+62</option>
// //             </select>
// //             <input
// //               type="tel"
// //               value={phone}
// //               onChange={(e) => setPhone(e.target.value)}
// //               className="flex-1 px-4 py-2 rounded-r-md bg-[#a855f7] text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
// //             />
// //           </div>

// //           <p className="text-center text-white text-sm underline mb-6 cursor-pointer">
// //             gunakan alamat email saya
// //           </p>

// //           <label className="block text-white mb-2">Kata sandi</label>
// //           <input
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             placeholder="Masukkan kata sandi"
// //             className="w-full px-4 py-3 rounded-md bg-purple-700 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-6"
// //           />

// //           <button
// //             onClick={handleSubmit}
// //             className="w-full bg-[#9b4d3d] text-white py-3 rounded-md font-semibold mb-6 hover:bg-[#b85e4f] transition"
// //           >
// //             BUAT AKUN
// //           </button>

// //           <button className="w-full flex items-center justify-center bg-purple-700 text-white py-3 rounded-md mb-3 border border-orange-400 hover:bg-purple-800 transition">
// //             <FaFacebook className="mr-2 text-blue-400" /> Masuk Melalui Facebook
// //           </button>

// //           <button className="w-full flex items-center justify-center bg-purple-700 text-white py-3 rounded-md border border-orange-400 hover:bg-purple-800 transition">
// //             <FcGoogle className="mr-2" /> Sign In With Google
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Daftar3;

import React, { useState, useEffect } from "react";
import bgPattern from "../../assets/bg2.svg";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// API Base URL
const API_BASE = "http://localhost:5000/api";

const Daftar3 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nama: "",
    phone: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // Ambil data nama dari step 1
    const registrationData = localStorage.getItem("registrationData");
    if (registrationData) {
      const data = JSON.parse(registrationData);
      setFormData(prev => ({ ...prev, nama: data.nama }));
    } else {
      // Jika tidak ada data nama, redirect ke step 1
      navigate("/daftar");
    }
  }, [navigate]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (error) setError(""); // Clear error saat user input
  };

  const validateForm = () => {
    if (!formData.phone.trim()) {
      setError("Nomor telepon tidak boleh kosong");
      return false;
    }

    if (formData.phone.length < 10) {
      setError("Nomor telepon minimal 10 digit");
      return false;
    }

    if (!formData.password) {
      setError("Password tidak boleh kosong");
      return false;
    }

    if (formData.password.length < 6) {
      setError("Password minimal 6 karakter");
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    setError("");

    try {
      // Format phone number (pastikan dimulai dengan 0)
      let formattedPhone = formData.phone;
      if (formattedPhone.startsWith('+62')) {
        formattedPhone = '0' + formattedPhone.substring(3);
      } else if (!formattedPhone.startsWith('0')) {
        formattedPhone = '0' + formattedPhone;
      }

      const response = await axios.post(`${API_BASE}/auth/register`, {
        nama: formData.nama,
        phone: formattedPhone,
        password: formData.password
      });

      console.log("Registration successful:", response.data);

      // Clear registration data dari localStorage
      localStorage.removeItem("registrationData");

      // Simpan user data untuk login otomatis
      const userData = {
        id: response.data.user_id,
        nama: response.data.nama,
        phone: formattedPhone
      };
      localStorage.setItem("userData", JSON.stringify(userData));

      // Navigate ke dashboard
      navigate("/dashboard");

    } catch (error) {
      console.error("Registration error:", error);
      
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else if (error.response?.status === 400) {
        setError("Data tidak valid. Periksa kembali input Anda.");
      } else if (error.response?.status >= 500) {
        setError("Server sedang bermasalah. Coba lagi nanti.");
      } else {
        setError("Tidak dapat terhubung ke server. Periksa koneksi internet Anda.");
      }
    } finally {
      setLoading(false);
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
            onClick={() => navigate("/")}
            className="absolute top-3 right-3 text-white text-2xl hover:text-orange-400 transition"
            disabled={loading}
          >
            <IoClose />
          </button>

          {/* Judul */}
          <h1 className="text-orange-400 text-3xl font-bold mb-6 text-center">
            Informasi Masuk
          </h1>

          {/* Display Nama dari Step 1 */}
          {formData.nama && (
            <div className="mb-4 p-3 bg-purple-600 rounded-lg">
              <p className="text-white text-sm">Mendaftar atas nama:</p>
              <p className="text-yellow-400 font-semibold">{formData.nama}</p>
            </div>
          )}

          {/* Input Nomor Telepon */}
          <label className="block text-white mb-2">
            Masukkan nomor telepon anda
          </label>
          <div className="flex mb-2">
            <select 
              className="bg-[#ec4899] text-white px-3 py-2 rounded-l-md outline-none"
              disabled={loading}
            >
              <option value="+62">+62</option>
            </select>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="812345678"
              className={`flex-1 px-4 py-2 rounded-r-md bg-[#a855f7] text-white placeholder-purple-300 focus:outline-none focus:ring-2 ${
                error && error.includes("telepon") ? 'focus:ring-red-400' : 'focus:ring-purple-400'
              }`}
              disabled={loading}
            />
          </div>

          {/* Atau Gunakan Email */}
          <p className="text-center text-white text-sm underline mb-6 cursor-pointer">
            gunakan alamat email saya
          </p>

          {/* Input Password */}
          <label className="block text-white mb-2">Kata sandi</label>
          <div className="relative mb-2">
            <input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              placeholder="Masukkan kata sandi"
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

          {/* Password Requirements */}
          <p className="text-xs text-purple-300 mb-4">
            Password minimal 6 karakter
          </p>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-400 rounded-lg">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {/* Tombol Buat Akun */}
          <button
            onClick={handleSubmit}
            disabled={loading || !formData.phone || !formData.password}
            className={`w-full py-3 rounded-md font-semibold mb-6 transition ${
              loading || !formData.phone || !formData.password
                ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
                : 'bg-[#9b4d3d] text-white hover:bg-[#b85e4f]'
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                MEMBUAT AKUN...
              </div>
            ) : (
              "BUAT AKUN"
            )}
          </button>

          {/* Social Login Buttons */}
          <button 
            disabled={loading}
            className="w-full flex items-center justify-center bg-purple-700 text-white py-3 rounded-md mb-3 border border-orange-400 hover:bg-purple-800 transition disabled:opacity-50"
          >
            <FaFacebook className="mr-2 text-blue-400" /> Masuk Melalui Facebook
          </button>

          <button 
            disabled={loading}
            className="w-full flex items-center justify-center bg-purple-700 text-white py-3 rounded-md border border-orange-400 hover:bg-purple-800 transition disabled:opacity-50"
          >
            <FcGoogle className="mr-2" /> Sign In With Google
          </button>

          {/* Back to Step 1 */}
          <p className="text-center mt-4">
            <button
              onClick={() => navigate("/daftar")}
              className="text-purple-300 underline text-sm hover:text-white"
              disabled={loading}
            >
              Kembali ke step sebelumnya
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Daftar3;