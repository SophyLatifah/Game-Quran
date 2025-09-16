import React from "react";
import { FaHome, FaUser, FaWhatsapp } from "react-icons/fa";
import { GiLaurelCrown } from "react-icons/gi";
import { RiVipDiamondFill } from "react-icons/ri";
import { IoMdBook } from "react-icons/io";

const NavbarGame = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#2d0052] border-t border-purple-500 z-50">
      <div className="relative flex justify-between items-center px-4 py-2">
        {/* Tombol WhatsApp */}
        <div className="absolute -top-6 left-4">
          <div className="bg-green-500 rounded-full p-3 shadow-lg">
            <FaWhatsapp className="text-white text-xl" />
          </div>
        </div>

        {/* Menu Hafal */}
        <div className="flex flex-col items-center text-white flex-1">
          <IoMdBook className="text-yellow-400 text-xl mb-1" />
          <span className="text-sm">Hafal</span>
        </div>

        {/* Menu Liga */}
        <div className="flex flex-col items-center text-white flex-1">
          <GiLaurelCrown className="text-purple-400 text-xl mb-1" />
          <span className="text-sm">Liga</span>
        </div>

        {/* Menu Beranda (Tengah / Aktif) */}
        <div className="relative flex flex-col items-center text-white flex-1">
          <div className="absolute -top-6 bg-[#2d0052] rounded-full border-4 border-[#fa8c00] p-3">
            <FaHome className="text-black text-2xl" />
          </div>
          <div className="mt-6 text-orange-400 text-sm font-semibold">Beranda</div>
        </div>

        {/* Menu Profil */}
        <div className="flex flex-col items-center text-white flex-1">
          <FaUser className="text-purple-300 text-xl mb-1" />
          <span className="text-sm">Profil</span>
        </div>

        {/* Menu PLUS */}
        <div className="flex flex-col items-center text-white flex-1">
          <RiVipDiamondFill className="text-purple-400 text-xl mb-1" />
          <span className="text-sm">PLUS</span>
        </div>
      </div>
    </div>
  );
};

export default NavbarGame;
