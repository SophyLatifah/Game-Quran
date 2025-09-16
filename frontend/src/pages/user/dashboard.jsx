import React from "react";

{/* import gambar */}
import bgBeranda from "../../assets/bg_beranda.png"; 

const Dashboard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      {/* Mobile Container */}
      <div
        className="w-[375px] min-h-screen flex flex-col px-4 relative bg-[#30005A]"
        style={{
          backgroundImage: `url(${bgBeranda})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Bagian atas - Surah utama */}
        <div className="flex flex-col items-center mt-10">
          <div className="relative bg-orange-500 rounded-full p-6 w-28 h-28 flex items-center justify-center shadow-lg">
            <span className="text-white text-4xl">👳‍♂️</span>
            <div className="absolute -top-5 bg-blue-500 text-white text-sm px-3 py-1 rounded-full shadow">
              Mulai
            </div>
          </div>
          <h2 className="mt-3 text-lg font-bold text-white">An-Nas</h2>
        </div>

        {/* Surah lainnya */}
        <div className="grid grid-cols-2 gap-6 justify-items-center mt-10 px-4">
          <div className="bg-purple-800/90 rounded-xl p-4 w-32 text-center text-white shadow-md">
            🌤️
            <p className="mt-2 font-semibold">Al-Falaq</p>
          </div>
          <div className="bg-purple-800/90 rounded-xl p-4 w-32 text-center text-white shadow-md">
            ☝️
            <p className="mt-2 font-semibold">Al-Ikhlas</p>
          </div>
          <div className="col-span-2 bg-purple-800/90 rounded-xl p-4 w-32 text-center text-white shadow-md">
            📖
            <p className="mt-2 font-semibold">Al-Fatihah</p>
          </div>
        </div>

        {/* Spacer untuk bottom navbar (biar ada ruang) */}
        <div className="mt-auto mb-20"></div>
      </div>
    </div>
  );
};

export default Dashboard;
