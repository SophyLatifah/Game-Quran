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
// import Login from "./pages/auth/login";
// import Signup from "./pages/auth/signup";

// // import komponen
import Navbar from "./component/navbar.jsx";


function App () {
  return (
    <>
      <Routes>
        {/* AUTH */}
        
    
        
          

        {/* LANDINGPAGE */}
        <Route path="/" element= {
          <>
          <Navbar />
          <LandingPage />
          </> 
        }
        />

        {/* USER */}
        

        {/* ADMIN */}
        
      </Routes>
    </>
  );
}

export default App;