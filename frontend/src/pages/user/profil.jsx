// import React from "react";
// import { IoSettingsOutline } from "react-icons/io5"; 
// import { IoShareSocialOutline } from "react-icons/io5";

// function Profil() {
//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       {/* Mobile Container */}
//       <div className="w-[375px] min-h-screen flex flex-col px-4 relative bg-[#30005A] text-white">
        
//         {/* Header */}
//         <div className="flex justify-end items-center py-4">
//           <button className="flex items-center text-sm">
//             <IoSettingsOutline className="mr-1 text-lg" />
//             PENGATURAN
//           </button>
//         </div>

//         {/* Profile Card */}
//         <div className="flex items-center space-x-4">
//           <div className="w-16 h-16 rounded-xl overflow-hidden bg-white flex items-center justify-center">
//             <span className="text-[#30005A] font-bold text-2xl">S</span>
//           </div>
//           <div>
//             <h2 className="text-xl font-bold">nama user</h2>
//             <p className="text-sm">user@gmail.com</p>
//             <p className="text-xs">📅 Bergabung sejak</p>
//           </div>
//         </div>

//         {/* Inspirasi Button */}
//         <div className="mt-4">
//           <button className="w-full bg-[#5A1E9A] py-2 rounded-lg text-white font-semibold">
//             💡 INSPIRASI
//           </button>
//         </div>

//         {/* Pencapaian Section */}
//         <div className="mt-8">
//           <div className="flex justify-between items-center mb-2">
//             <h3 className="font-bold text-lg">Pencapaian</h3>
//             <IoShareSocialOutline className="text-orange-400 text-2xl" />
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div className="bg-[#4A148C] rounded-xl p-4 text-center">
//               <p className="text-2xl font-bold">0</p>
//               <p className="text-xs">Kosakata Kuat</p>
//             </div>
//             <div className="bg-[#4A148C] rounded-xl p-4 text-center">
//               <p className="text-2xl font-bold">0</p>
//               <p className="text-xs">XP</p>
//             </div>
//             <div className="bg-[#4A148C] rounded-xl p-4 text-center">
//               <p className="text-2xl font-bold">1</p>
//               <p className="text-xs">Level Liga</p>
//             </div>
//             <div className="bg-[#4A148C] rounded-xl p-4 text-center">
//               <p className="text-2xl font-bold">0%</p>
//               <p className="text-xs">Cakupan</p>
//             </div>
//           </div>
//         </div>

//         {/* Affiliate Section */}
//         <div className="mt-8">
//           <h3 className="font-bold text-lg">Affiliate</h3>
//           <div className="bg-[#4A148C] rounded-xl p-4 mt-2">
//             <p className="text-xs mb-3">
//               Affiliate hanya untuk pengguna PLUS
//             </p>
//             <button className="w-full bg-yellow-500 py-2 rounded-lg font-bold text-[#30005A]">
//               TINGKATKAN KE PLUS
//             </button>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Profil;

import React, { useState, useEffect } from "react";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5"; 
import { IoShareSocialOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// API Base URL
const API_BASE = "http://localhost:5000/api";

function Profil() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [userStats, setUserStats] = useState({
    memorized_count: 0,
    total_games: 0,
    avg_percentage: 0,
    best_percentage: 0,
    total_xp: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ambil user data dari localStorage
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const user = JSON.parse(storedUserData);
      setUserData(user);
      fetchUserStats(user.id);
    } else {
      // Jika tidak ada user data, redirect ke login
      navigate("/login");
    }
  }, [navigate]);

  const fetchUserStats = async (userId) => {
    try {
      const response = await axios.get(`${API_BASE}/user/${userId}/stats`);
      const stats = response.data;
      
      // Calculate total XP (setiap game = 100 XP, bonus untuk perfect score)
      const totalXP = (stats.total_games * 100) + (stats.best_percentage === 100 ? 50 : 0);
      
      setUserStats({
        memorized_count: stats.memorized_count || 0,
        total_games: stats.total_games || 0,
        avg_percentage: Math.round(stats.avg_percentage) || 0,
        best_percentage: Math.round(stats.best_percentage) || 0,
        total_xp: totalXP
      });
    } catch (error) {
      console.error("Error fetching user stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    // Konfirmasi logout
    if (window.confirm("Yakin ingin keluar dari akun?")) {
      // Clear semua data user dari localStorage
      localStorage.removeItem("userData");
      localStorage.removeItem("registrationData");
      
      // Redirect ke landing page
      navigate("/");
    }
  };

  const getInitials = (name) => {
    if (!name) return "U";
    return name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2);
  };

  const getJoinDate = (userData) => {
    if (!userData) return "";
    
    // Gunakan loginTime atau fallback ke tanggal default
    const joinDate = userData.loginTime ? new Date(userData.loginTime) : new Date();
    return joinDate.toLocaleDateString('id-ID', { 
      year: 'numeric', 
      month: 'long',
      day: 'numeric'
    });
  };

  const getUserLevel = (xp) => {
    if (xp < 100) return 1;
    if (xp < 300) return 2;
    if (xp < 600) return 3;
    if (xp < 1000) return 4;
    return 5;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#30005A]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#30005A]">
        <div className="text-white text-center">
          <p>Data user tidak ditemukan</p>
          <button 
            onClick={() => navigate("/login")}
            className="mt-4 bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Mobile Container */}
      <div className="w-[375px] min-h-screen flex flex-col px-4 relative bg-[#30005A] text-white">
        
        {/* Header */}
        <div className="flex justify-between items-center py-4">
          <button 
            onClick={handleLogout}
            className="flex items-center text-sm hover:text-red-400 transition-colors"
          >
            <IoLogOutOutline className="mr-1 text-lg" />
            LOGOUT
          </button>
          <button className="flex items-center text-sm hover:text-orange-400 transition-colors">
            <IoSettingsOutline className="mr-1 text-lg" />
            PENGATURAN
          </button>
        </div>

        {/* Profile Card */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
            <span className="text-white font-bold text-xl">
              {getInitials(userData.nama)}
            </span>
          </div>
          <div>
            <h2 className="text-xl font-bold">{userData.nama}</h2>
            <p className="text-sm text-purple-300">{userData.phone}</p>
            <p className="text-xs text-gray-400">
              📅 Bergabung sejak {getJoinDate(userData)}
            </p>
          </div>
        </div>

        {/* Inspirasi Button */}
        <div className="mb-6">
          <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-lg text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all">
            💡 INSPIRASI
          </button>
        </div>

        {/* Pencapaian Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">Pencapaian</h3>
            <button className="text-orange-400 text-2xl hover:text-orange-300">
              <IoShareSocialOutline />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-purple-700 to-purple-800 rounded-xl p-4 text-center hover:from-purple-600 hover:to-purple-700 transition-all">
              <p className="text-2xl font-bold text-yellow-400">{userStats.memorized_count}</p>
              <p className="text-xs text-purple-200">Kata Dihafal</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl p-4 text-center hover:from-blue-600 hover:to-blue-700 transition-all">
              <p className="text-2xl font-bold text-yellow-400">{userStats.total_xp}</p>
              <p className="text-xs text-blue-200">Total XP</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-xl p-4 text-center hover:from-green-600 hover:to-green-700 transition-all">
              <p className="text-2xl font-bold text-yellow-400">
                Level {getUserLevel(userStats.total_xp)}
              </p>
              <p className="text-xs text-green-200">Level Liga</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-700 to-orange-800 rounded-xl p-4 text-center hover:from-orange-600 hover:to-orange-700 transition-all">
              <p className="text-2xl font-bold text-yellow-400">{userStats.best_percentage}%</p>
              <p className="text-xs text-orange-200">Skor Terbaik</p>
            </div>
          </div>
        </div>

        {/* Game Statistics */}
        <div className="mb-8">
          <h3 className="font-bold text-lg mb-4">Statistik Game</h3>
          <div className="bg-gradient-to-r from-purple-800 to-blue-800 rounded-xl p-4">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-xl font-bold text-yellow-400">{userStats.total_games}</p>
                <p className="text-xs text-purple-200">Total Game</p>
              </div>
              <div>
                <p className="text-xl font-bold text-yellow-400">{userStats.avg_percentage}%</p>
                <p className="text-xs text-purple-200">Rata-rata Skor</p>
              </div>
            </div>
            
            {userStats.total_games > 0 && (
              <div className="mt-3">
                <div className="w-full bg-purple-900 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${userStats.avg_percentage}%` }}
                  ></div>
                </div>
                <p className="text-xs text-center mt-1 text-purple-300">
                  Progress Keseluruhan
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Affiliate Section */}
        <div className="mb-6">
          <h3 className="font-bold text-lg">Affiliate</h3>
          <div className="bg-gradient-to-br from-purple-800 to-pink-800 rounded-xl p-4 mt-2">
            <p className="text-xs mb-3 text-purple-200">
              Affiliate hanya untuk pengguna PLUS
            </p>
            <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 py-2 rounded-lg font-bold text-purple-900 hover:from-yellow-500 hover:to-orange-500 transition-all">
              TINGKATKAN KE PLUS
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button 
            onClick={() => navigate("/hafal")}
            className="bg-green-600 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            📚 Lihat Hafalan
          </button>
          <button 
            onClick={() => navigate("/dashboard")}
            className="bg-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            🎮 Main Game
          </button>
        </div>

        {/* Bottom padding for navigation */}
        <div className="h-20"></div>
      </div>
    </div>
  );
}

export default Profil;