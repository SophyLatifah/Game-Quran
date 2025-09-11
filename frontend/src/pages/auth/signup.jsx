import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password dan konfirmasi password tidak cocok!");
      return;
    }

    // nanti ini disambungkan ke backend (API register)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#4B0E86] px-6 ">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md mt-10">
        
     {/* Tombol X */}
           <Link
             to="/"
             className="absolute right- text-black text-3xl font-bold hover:text-gray-600"
           >
               ✕
           </Link>

        <h2 className="text-2xl font-bold text-center text-[#4B0E86]">Daftar Akun</h2>
        <p className="text-gray-600 text-center mt-2">Buat akun untuk mulai belajar 📖</p>

        <form onSubmit={handleSubmit} className="mt-6">
          {/* Nama */}
          <div>
            <label className="block text-gray-700">Nama</label>
            <input
              type="text"
              placeholder="Masukkan nama lengkap"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9102]"
              required
            />
          </div>

          {/* Email */}
          <div className="mt-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Masukkan email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9102]"
              required
            />
          </div>

          {/* Password */}
          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9102]"
              required
            />
          </div>

          {/* Konfirmasi Password */}
          <div className="mt-4">
            <label className="block text-gray-700">Konfirmasi Password</label>
            <input
              type="password"
              placeholder="Ulangi password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9102]"
              required
            />
          </div>

          {/* Tombol Daftar */}
          <button
            type="submit"
            className="w-full mt-6 bg-[#FF9102] hover:bg-amber-600 text-white py-3 rounded-lg font-semibold shadow-lg transition"
          >
            Daftar
          </button>
        </form>

        {/* Link ke login */}
        <p className="text-center text-gray-600">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-[#4B0E86] font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
