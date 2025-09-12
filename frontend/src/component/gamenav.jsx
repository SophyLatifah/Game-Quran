// GameNavbar.jsx
import { Home, BarChart2, Gamepad2, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function GameNavbar() {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(false);

  // fungsi buat highlight menu aktif
  const getActiveClass = (path) =>
    location.pathname === path
      ? "text-purple-700 font-bold"
      : "text-gray-500";

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white z-50">
      <div className="mx-auto flex justify-around py-3 relative">
        <Link
          to="/dashboard"
          className={`flex flex-col items-center ${getActiveClass("/dashboard")}`}
        >
          <Home size={24} />
          <span className="text-xs">Beranda</span>
        </Link>

        <Link
          to="/statistik"
          className={`flex flex-col items-center ${getActiveClass("/statistik")}`}
        >
          <BarChart2 size={24} />
          <span className="text-xs">Pencapaian</span>
        </Link>

        <Link
          to="/games"
          className={`flex flex-col items-center ${getActiveClass("/games")}`}
        >
          <Gamepad2 size={24} />
          <span className="text-xs">Permainan</span>
        </Link>

        {/* Akun + Dropdown Logout */}
        <div className="relative">
          <button
            onClick={() => setOpenDropdown(!openDropdown)}
            className={`flex flex-col items-center ${getActiveClass("/profile")}`}
          >
            <User size={24} />
            <span className="text-xs">Akun</span>
          </button>

          {openDropdown && (
            <div className="absolute bottom-14 right-0 bg-white shadow-lg rounded-lg w-32 py-2">
              <button
                onClick={() => {
                  localStorage.removeItem("currentUser"); // hapus user
                  window.location.href = "/"; // redirect
                  
                }}
                className="w-full text-left px-4 py-2 text-sm text-[#5707A4] font-bold hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
