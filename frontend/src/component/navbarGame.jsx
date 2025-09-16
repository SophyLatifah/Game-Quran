import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import icon normal
import iconHafal from "../assets/navgame/hafal.png";
import iconLiga from "../assets/navgame/liga.png";
import iconBeranda from "../assets/navgame/beranda.png";
import iconProfil from "../assets/navgame/profil.png";
import iconPlus from "../assets/navgame/plus.png";

// Import icon aktif (warna berbeda)
import iconHafalActive from "../assets/navgame/hafal2.png";
import iconLigaActive from "../assets/navgame/liga2.png";
import iconBerandaActive from "../assets/navgame/beranda2.png";
import iconProfilActive from "../assets/navgame/profil2.png";
import iconPlusActive from "../assets/navgame/plus2.png";

const NavbarGame = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("beranda"); // default halaman

  // daftar menu
  const menus = [
    { key: "hafal", label: "Hafal", path: "/hafal", icon: iconHafal, iconActive: iconHafalActive },
    { key: "liga", label: "Liga", path: "/liga", icon: iconLiga, iconActive: iconLigaActive },
    { key: "beranda", label: "Beranda", path: "/dashboard", icon: iconBeranda, iconActive: iconBerandaActive },
    { key: "profil", label: "Profil", path: "/profil", icon: iconProfil, iconActive: iconProfilActive },
    { key: "plus", label: "PLUS", path: "/plus", icon: iconPlus, iconActive: iconPlusActive },
  ];

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[375px] bg-[#3a0073] flex justify-between px-6 py-3 shadow-lg z-50">
      {menus.map((menu) => (
        <div
          key={menu.key}
          className="flex flex-col items-center cursor-pointer group"
          onClick={() => {
            setActive(menu.key);
            navigate(menu.path);
          }}
        >
          <img
            src={active === menu.key ? menu.iconActive : menu.icon}
            alt={menu.label}
            className="w-6 h-6 mb-1 transition"
          />
          <span
            className={`text-sm transition ${
              active === menu.key
                ? "text-orange-400"
                : "text-white group-hover:text-orange-400"
            }`}
          >
            {menu.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default NavbarGame;
