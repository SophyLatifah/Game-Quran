// import express from "express";
// import db from "../db.js";

// const router = express.Router();

// // login admin
// router.post("/login", (req, res) => {
//   const { username, password } = req.body;

//   const sql = "SELECT * FROM admin WHERE username = ? AND password = ?";
//   db.query(sql, [username, password], (err, results) => {
//     if (err) return res.status(500).json({ error: err.message });

//     if (results.length > 0) {
//       res.json({ success: true, user: results[0] });
//     } else {
//       res.status(401).json({ success: false, message: "Invalid credentials" });
//     }
//   });
// });

// export default router;

// ============= routes/authRoutes.js (Fixed) =============
import express from "express";
import db from "../db.js";

const router = express.Router();

// Register user (untuk peserta, bukan admin)
router.post("/register", (req, res) => {
  const { nama, phone, password } = req.body;
  
  if (!nama || !phone || !password) {
    return res.status(400).json({ message: "Data tidak lengkap" });
  }

  const sql = "INSERT INTO peserta (nama, phone, password) VALUES (?, ?, ?)";
  db.query(sql, [nama, phone, password], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ message: "Nomor HP sudah terdaftar" });
      }
      return res.status(500).json({ message: "Error DB", error: err });
    }
    
    res.json({ 
      message: "Registrasi berhasil", 
      user_id: result.insertId,
      nama 
    });
  });
});

// Login user
router.post("/login", (req, res) => {
  const { phone, password } = req.body;
  
  if (!phone || !password) {
    return res.status(400).json({ message: "Phone dan password wajib diisi" });
  }

  const sql = "SELECT id, nama, phone, created_at FROM peserta WHERE phone = ? AND password = ?";
  db.query(sql, [phone, password], (err, results) => {
    if (err) return res.status(500).json({ message: "Error DB", error: err });
    
    if (results.length === 0) {
      return res.status(401).json({ message: "Phone atau password salah" });
    }

    const user = results[0];
    res.json({
      success: true,
      message: "Login berhasil",
      user: {
        id: user.id,
        nama: user.nama,
        phone: user.phone
      }
    });
  });
});

export default router;