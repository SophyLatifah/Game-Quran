// GameNavbar.jsx
import { Home, BarChart2, Gamepad2, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function GameNavbar() {
  const location = useLocation();

  // fungsi buat highlight menu aktif
  const getActiveClass = (path) =>
    location.pathname === path
      ? "text-purple-700 font-bold"
      : "text-gray-500";

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white">
      <div className="mx-auto flex justify-around py-3">
        
        <Link
          to="/dashboard"
          className={`flex flex-col items-center ${getActiveClass("/dashboard")}`}
        >
          <Home size={24} />
          <span className="text-xs">Beranda</span>
        </Link>

        <Link
          to="/stats"
          className={`flex flex-col items-center ${getActiveClass("/stats")}`}
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

        <Link
          to="/profile"
          className={`flex flex-col items-center ${getActiveClass("/profile")}`}
        >
          <User size={24} />
          <span className="text-xs">Akun</span>
        </Link>

      </div>
    </nav>
  );
}

