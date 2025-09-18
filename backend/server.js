import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./db.js";

import authRoutes from "./routes/authRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

routes
app.use("/api/auth", authRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/user", userRoutes);

// app.post("/api/register-step2", (req, res) => {
//   const { userId, phone, password } = req.body;
//   if (!userId || !phone || !password) {
//     return res.status(400).json({ message: "Data tidak lengkap" });
//   }

//   const sql = "UPDATE users SET phone = ?, password = ? WHERE id = ?";
//   db.query(sql, [phone, password, userId], (err) => {
//     if (err) return res.status(500).json({ message: "Error DB", error: err });

//     res.json({ message: "Registrasi selesai" });
//   });
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
