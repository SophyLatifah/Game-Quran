import React from "react";
import { useNavigate } from "react-router-dom";

// Import icon dari assets
import iconHafal from "../assets/navgame/hafal.png";
import iconLiga from "../assets/navgame/liga.png";
import iconBeranda from "../assets/navgame/beranda.png";
import iconProfil from "../assets/navgame/profil.png";
import iconPlus from "../assets/navgame/plus.png";

// icon hover


const NavbarGame = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[375px] bg-[#3a0073] flex justify-between px-6 py-3 shadow-lg z-50">
      {/* Hafal */}
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={() => navigate("/hafal")}
      >
        <img src={iconHafal} alt="Hafal" className="w-6 h-6 mb-1" />
        <span className="text-white text-sm hover:text-orange-400 cursor-pointer">Hafal</span>
      </div>

      {/* Liga */}
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={() => navigate("/liga")}
      >
        <img src={iconLiga} alt="Liga" className="w-6 h-6 mb-1" />
        <span className="text-white text-sm hover:text-orange-400 cursor-pointer">Liga</span>
      </div>

      {/* Beranda */}
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={() => navigate("/dashboard")}
      >
        <img src={iconBeranda} alt="Beranda" className="w-6 h-6 mb-1" />
        <span className="text-white text-sm hover:text-orange-400 cursor-pointer">Beranda</span>
      </div>

      {/* Profil */}
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={() => navigate("/profil")}
      >
        <img src={iconProfil} alt="Profil" className="w-6 h-6 mb-1" />
        <span className="text-white text-sm hover:text-orange-400 cursor-pointer">Profil</span>
      </div>

      {/* PLUS */}
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={() => navigate("/plus")}
      >
        <img src={iconPlus} alt="Plus" className="w-6 h-6 mb-1" />
        <span className="text-white text-sm hover:text-orange-400 cursor-pointer">PLUS</span>
      </div>
    </div>
  );
};

export default NavbarGame;
