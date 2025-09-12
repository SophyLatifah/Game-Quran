import  { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Lottie from "lottie-react";
import { motion } from "framer-motion";

function Login() {

  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 3,
  }));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ambil semua user yang sudah signup
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Cari user yang cocok
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Simpan user yang sedang login
      localStorage.setItem("currentUser", JSON.stringify(user));

      navigate("/dashboard");
    } else {
      alert("Email atau password salah!");
    }

    // // nanti disambungkan ke backend (API login)
    // console.log("Email:", email);
    // console.log("Password:", password);

    // if (email && password) {
    //     navigate("/dashboard");
    // }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-[#1a103d] via-[#2e1a63] to-[#4b0e86] overflow-hidden px-6">   

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
    
      <div className=" relative 
                bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-8 w-full max-w-md relative">

    {/* Tombol X */}
      <Link
        to="/"
        className="absolute top-6 text-white text-3xl font-bold hover:text-gray-300"
      >
          ✕
      </Link>

        <h2 className="text-2xl font-bold text-center text-[#FF9102]">Sign In</h2>
        <p className="text-gray-200 text-center mt-2">Masuk untuk mulai belajar 📖</p>

        <form onSubmit={handleSubmit} className="mt-6">
          {/* Email */}
          <div>
            <label className="block text-gray-100">Email</label>
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
            <label className="block text-gray-100">Password</label>
            <input
              type="password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9102]"
              required
            />
          </div>

          {/* Tombol Login */}
          <button
            type="submit"
            className="w-full mt-6 bg-[#ff9102] hover:bg-amber-600 text-white py-3 rounded-lg font-semibold shadow-lg transition"
          >
            Login
          </button>
        </form>

        {/* Link ke register */}
        <p className="text-center text-gray-300 mt-6">
          Belum punya akun?{" "}
          <Link to="/signup" className="text-white font-semibold hover:underline">
            Daftar
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
