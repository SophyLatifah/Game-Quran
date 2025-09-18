-- 1. Bikin database
CREATE DATABASE game_quran;

-- 2. Pake database
USE game_quran;

-- 3. Bikin tabel peserta
CREATE TABLE peserta (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(100) NOT NULL,
  phone VARCHAR(20) UNIQUE,
  password VARCHAR(255)
);

-- 4. Bikin tabel admin
CREATE TABLE admin (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

-- 5. Bikin tabel soal
CREATE TABLE soal (
  id INT AUTO_INCREMENT PRIMARY KEY,
  pertanyaan TEXT NOT NULL,
  jawaban_benar VARCHAR(255) NOT NULL
);

-- 6. Bikin tabel jawaban
CREATE TABLE jawaban (
  id INT AUTO_INCREMENT PRIMARY KEY,
  peserta_id INT,
  soal_id INT,
  jawaban_user VARCHAR(255),
  benar BOOLEAN,
  FOREIGN KEY (peserta_id) REFERENCES peserta(id),
  FOREIGN KEY (soal_id) REFERENCES soal(id)
);

-- Tabel untuk menyimpan kata-kata yang dihafal
CREATE TABLE IF NOT EXISTS memorized_words (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  surah_id INTEGER NOT NULL,
  arab TEXT NOT NULL,
  meaning TEXT NOT NULL,
  audio TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabel untuk menyimpan skor
CREATE TABLE IF NOT EXISTS scores (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  surah_id INTEGER NOT NULL,
  score INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, surah_id)
);
