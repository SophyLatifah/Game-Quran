import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // nanti disambungkan ke backend (API login)
    console.log("Email:", email);
    console.log("Password:", password);

    if (email && password) {
        navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#4B0E86] px-6">    
    
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md relative">

    {/* Tombol X */}
      <Link
        to="/"
        className="absolute top-6 text-black text-3xl font-bold hover:text-gray-600"
      >
          ✕
      </Link>

        <h2 className="text-2xl font-bold text-center text-[#4B0E86]">Login</h2>
        <p className="text-gray-600 text-center mt-2">Masuk untuk mulai belajar 📖</p>

        <form onSubmit={handleSubmit} className="mt-6">
          {/* Email */}
          <div>
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

          {/* Tombol Login */}
          <button
            type="submit"
            className="w-full mt-6 bg-[#FF9102] hover:bg-amber-600 text-white py-3 rounded-lg font-semibold shadow-lg transition"
          >
            Login
          </button>
        </form>

        {/* Link ke register */}
        <p className="text-center text-gray-600 mt-6">
          Belum punya akun?{" "}
          <Link to="/signup" className="text-[#4B0E86] font-semibold hover:underline">
            Daftar
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
