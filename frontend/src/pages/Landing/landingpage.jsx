import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div style={{ padding: "20px" }}>
    {/*HERO SECTION*/}
    <section>
      <h1>Selamat Datang di Game Edukasi Quran!</h1>
      <p>Cara mudah dan interaktif untuk mempelajari bacaan Al-Quran</p>
        <Link to="/login">
          <button>Mulai Belajar
          </button>
        </Link>
    </section>
      
    <section>
      <h2>Tahukah Anda?</h2>
      <h2>Al-Qur'an terdiri dari banyak kata yang dibangun dari huruf <b>Hijaiyah</b>. 
      Mari kita pelajari huruf-hurufnya sebagai langkah pertama!</h2>
    </section>

    </div>
  );
}

export default LandingPage;
