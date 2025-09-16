import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#380069] fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
         
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="ThinkQuran Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Negara */}
            <button className="flex items-center border border-white/50 px-3 py-1 rounded-full text-white">
              <img
                src="/assets/flag-id.png"
                alt="Indonesia"
                className="w-5 h-5 mr-2"
              />
              Negara
            </button>

            {/* Bahasa */}
            <button className="flex items-center border border-white/50 px-3 py-1 rounded-full text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Indonesia
            </button>

            {/* Divider */}
            <div className="w-px h-6 bg-white/50"></div>

            {/* Daftar → pakai Link biar routing jalan */}
            <Link
              to="/daftar"
              className="bg-orange-500 px-4 py-2 rounded-full text-white font-semibold hover:bg-orange-600 transition"
            >
              Daftar
            </Link>
            
            {/* Log masuk pakai image */}
            <Link
            to="/login"
            className="flex items-center border border-white/50 px-4 py-2 rounded-full text-white hover:bg-purple-800 transition"
            >
            Log masuk
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-purple-800 pb-4 space-y-3 rounded-lg">
            <button className="flex items-center border border-white/50 px-3 py-1 rounded-full text-white w-full justify-center">
              <img src="/assets/flag-id.png" alt="Indonesia" className="w-5 h-5 mr-2" />
              Negara
            </button>

            <button className="flex items-center border border-white/50 px-3 py-1 rounded-full text-white w-full justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Indonesia
            </button>

            {/* Daftar (mobile) */}
            <Link
              to="/daftar"
              className="bg-orange-500 px-4 py-2 rounded-full text-white font-semibold w-full hover:bg-orange-600 transition text-center block"
            >
              Daftar
            </Link>

            <button className="flex items-center border border-white/50 px-4 py-2 rounded-full text-white w-full justify-center hover:bg-purple-700 transition">
              <img src="/assets/login-icon.png" alt="Log Masuk" className="w-5 h-5 mr-2" />
              Log masuk
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
