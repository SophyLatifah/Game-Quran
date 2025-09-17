import React from "react";
import { IoSettingsOutline } from "react-icons/io5"; 
import { IoShareSocialOutline } from "react-icons/io5";

function Profil() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Mobile Container */}
      <div className="w-[375px] min-h-screen flex flex-col px-4 relative bg-[#30005A] text-white">
        
        {/* Header */}
        <div className="flex justify-end items-center py-4">
          <button className="flex items-center text-sm">
            <IoSettingsOutline className="mr-1 text-lg" />
            PENGATURAN
          </button>
        </div>

        {/* Profile Card */}
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-xl overflow-hidden bg-white flex items-center justify-center">
            <span className="text-[#30005A] font-bold text-2xl">S</span>
          </div>
          <div>
            <h2 className="text-xl font-bold">nama user</h2>
            <p className="text-sm">user@gmail.com</p>
            <p className="text-xs">📅 Bergabung sejak</p>
          </div>
        </div>

        {/* Inspirasi Button */}
        <div className="mt-4">
          <button className="w-full bg-[#5A1E9A] py-2 rounded-lg text-white font-semibold">
            💡 INSPIRASI
          </button>
        </div>

        {/* Pencapaian Section */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-lg">Pencapaian</h3>
            <IoShareSocialOutline className="text-orange-400 text-2xl" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#4A148C] rounded-xl p-4 text-center">
              <p className="text-2xl font-bold">0</p>
              <p className="text-xs">Kosakata Kuat</p>
            </div>
            <div className="bg-[#4A148C] rounded-xl p-4 text-center">
              <p className="text-2xl font-bold">0</p>
              <p className="text-xs">XP</p>
            </div>
            <div className="bg-[#4A148C] rounded-xl p-4 text-center">
              <p className="text-2xl font-bold">1</p>
              <p className="text-xs">Level Liga</p>
            </div>
            <div className="bg-[#4A148C] rounded-xl p-4 text-center">
              <p className="text-2xl font-bold">0%</p>
              <p className="text-xs">Cakupan</p>
            </div>
          </div>
        </div>

        {/* Affiliate Section */}
        <div className="mt-8">
          <h3 className="font-bold text-lg">Affiliate</h3>
          <div className="bg-[#4A148C] rounded-xl p-4 mt-2">
            <p className="text-xs mb-3">
              Affiliate hanya untuk pengguna PLUS
            </p>
            <button className="w-full bg-yellow-500 py-2 rounded-lg font-bold text-[#30005A]">
              TINGKATKAN KE PLUS
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Profil;
