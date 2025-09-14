import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/dashboard");
    } else {
      alert("Email atau password salah!");
    }
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

      {/* Card Login */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-10 w-full max-w-md text-white"
      >
        {/* Tombol Close */}
        <Link
          to="/"
          className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-gray-300 transition"
          aria-label="Close"
        >
          &times;
        </Link>

        <h2 className="text-3xl font-extrabold text-center text-[#FF9102] mb-2">
          Masuk
        </h2>
        <p className="text-gray-300 text-center mb-8">
          Masuk untuk mulai belajar 📖
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-200 font-semibold mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Masukkan email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg border border-transparent bg-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-[#FF9102] focus:border-transparent transition"
              required
              autoComplete="email"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-gray-200 font-semibold mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg border border-transparent bg-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-[#FF9102] focus:border-transparent transition"
              required
              autoComplete="current-password"
            />
          </div>

          {/* Tombol Login */}
          <button
            type="submit"
            className="w-full py-3 bg-[#FF9102] hover:bg-amber-600 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
          >
            Masuk
          </button>
        </form>

        {/* Link ke register */}
        <p className="text-center text-gray-300 mt-8">
          Belum punya akun?{" "}
          <Link to="/signup" className="text-white font-semibold hover:underline">
            Daftar
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default Login;
