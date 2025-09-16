import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // import halaman
// -----LANDINGPAGE------ //
import LandingPage from "./pages/landingpage/landingpage"

// // -----ADMIN----- //
// import AdminDashboard from "./pages/admin/dashboardadmin";
// import ManageSoal from "./pages/admin/managesoal";

// -----USER------ //
// import UserDashboard from "./pages/user/dashboard";
// import Hijaiyah from "./pages/user/hijaiyah";
// import Statistik from "./pages/user/statistik";
// import Game from "./pages/user/game";

// // -----AUTH----- //
 import Daftar from "./pages/auth/daftar.jsx";
 import Daftar2 from "./pages/auth/daftar2.jsx";
 import Daftar3 from "./pages/auth/daftar3.jsx";
import Login from "./pages/auth/login.jsx";

// // import komponen
import Navbar from "./component/navbar.jsx";
// import NavbarGame from "./component/navbarGame.jsx";


function App () {
  return (
    <>
      <Routes>
        {/* AUTH */}
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/daftar2" element={<Daftar2 />} />
        <Route path="/daftar3" element={<Daftar3 />} />
        <Route path="/login" element={<Login />} />
    
        
          

        {/* LANDINGPAGE */}
        <Route path="/" element= {
          <>
          <Navbar />
          <LandingPage />
          </> 
        }
        />

        {/* USER */}
        {/* <route path="/dashboard" element={
          <>
          <NavbarGame />
          </>

        }
          /> */}
        
        
      </Routes>
    </>
  );
}

export default App;