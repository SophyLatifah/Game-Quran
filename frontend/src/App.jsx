import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import halaman
import AdminDashboard from "./pages/admin/dashboardadmin";
import ManageSoal from "./pages/admin/managesoal";
import UserDashboard from "./pages/user/dashboard";
import Hijaiyah from "./pages/user/hijaiyah";
import Statistik from "./pages/user/statistik";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";

// import komponen
import Navbar from "./component/navbar";

function App () {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* AUTH */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />

        {/* USER */}
          <Route path="/user" element={<UserDashboard/>} />
          <Route path="/user/hijaiyah" element={<Hijaiyah/>} />
          <Route path="/user/statistik" element={<Statistik/>} />

        {/* ADMIN */}
           <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/soal" element={<ManageSoal />} />
      </Routes>
    </Router>
  );
}

export default App;