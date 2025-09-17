import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // import halaman
// -----LANDINGPAGE------ //
import LandingPage from "./pages/landingpage/landingpage"

// // -----ADMIN----- //
// import AdminDashboard from "./pages/admin/dashboardadmin";
// import ManageSoal from "./pages/admin/managesoal";

// -----USER------ //
import Dashboard from "./pages/user/dashboard.jsx";
// import Hafal from "./pages/user/hafal.jsx";
// import Liga from "./pages/user/liga.jsx";
// import Profil from "./pages/user/profil.jsx";
// import Plus from "./pages/user/plus.jsx";

// // -----AUTH----- //
 import Daftar from "./pages/auth/daftar.jsx";
 import Daftar2 from "./pages/auth/daftar2.jsx";
 import Daftar3 from "./pages/auth/daftar3.jsx";
import Login from "./pages/auth/login.jsx";

// GAME-QURAN
import Game from "./pages/game/game.jsx";


// import komponen
import Navbar from "./component/navbar.jsx";
import NavGame from "./component/navbarGame.jsx";


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
        <Route path="/dashboard" element={
          <>
          <Dashboard />
          <NavGame />
          </>
          } />
        
        {/* <Route path="/hafal" element={
          <>
          <Hafal />
          <NavGame />
          </>
          } />
        
        <Route path="/liga" element={
          <>
          <Liga />
          <NavGame />
          </>
          } />
        
        <Route path="/profil" element={
          <>
          <Profil />
          <NavGame />
          </>
          } />

        <Route path="/plus" element={
          <>
          <Plus />
          <NavGame />
          </>
          } /> */}

        {/* GAME */}
        <Route path="/game/:surah" element={
          <Game />
        } />

      </Routes>
    </>
  );
}

export default App;