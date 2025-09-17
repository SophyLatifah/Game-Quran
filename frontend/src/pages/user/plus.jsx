import {React} from "react";
import { Link } from "react-router-dom";

function Plus (){
    return (
        <div className="min-h-screen flex items-center justify-center ">
      {/* Mobile Container */}
      <div
        className="w-[375px] min-h-screen flex flex-col px-4 relative bg-[#30005A]"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-white ">halo ini buat plus nya</h1>
      </div>
    </div>
    );
};

export default Plus;