import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // import halaman
// -----LANDINGPAGE------ //
import LandingPage from "./pages/Landing/landingpage.jsx"

// // -----ADMIN----- //
// import AdminDashboard from "./pages/admin/dashboardadmin";
// import ManageSoal from "./pages/admin/managesoal";

// -----USER------ //
import UserDashboard from "./pages/user/dashboard";
import Hijaiyah from "./pages/user/hijaiyah";
// import Statistik from "./pages/user/statistik";

// // -----AUTH----- //
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";

// // import komponen
import Navbar from "./component/navbar";
import GameNav from "./component/gamenav.jsx";

function App () {
  return (
    <>
      <Routes>
        {/* AUTH */}
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
          

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
          <GameNav /> 
          <UserDashboard />
          </>
        } 
          />
        <Route path="/hijaiyah" element={
          <>
          <GameNav /> 
          <Hijaiyah/>
          </>
          } 
          />

        {/* ADMIN */}
          
      </Routes>
    </>
  );
}

export default App;