import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // import halaman
// -----LANDINGPAGE------ //
import LandingPage from "./pages/Landing/landingpage.jsx"

// // -----ADMIN----- //
// import AdminDashboard from "./pages/admin/dashboardadmin";
// import ManageSoal from "./pages/admin/managesoal";

// -----USER------ //
// import UserDashboard from "./pages/user/dashboard";
// import Hijaiyah from "./pages/user/hijaiyah";
// import Statistik from "./pages/user/statistik";

// // -----AUTH----- //
// import Login from "./pages/auth/login";
// import Signup from "./pages/auth/signup";

// // import komponen
// import Navbar from "./component/navbar";

function App () {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        {/* AUTH */}
          
        {/* LANDINGPAGE */}
        <Route path="/" element= {<LandingPage />} />

        {/* USER */}
          {/* <Route path="/" element={<UserDashboard/>} /> */}
          

        {/* ADMIN */}
          
      </Routes>
    </>
  );
}

export default App;