-- 1. Bikin database
CREATE DATABASE IF NOT EXISTS game_quran;

-- 2. Pake database
USE game_quran;

-- 3. Drop tables yang bermasalah (jika ada)
DROP TABLE IF EXISTS jawaban;
DROP TABLE IF EXISTS memorized_words;
DROP TABLE IF EXISTS scores;

-- 4. Bikin tabel peserta (sudah OK)
CREATE TABLE IF NOT EXISTS user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(100) NOT NULL,
  phone VARCHAR(20) UNIQUE,
  password VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. Bikin tabel surah mapping (lightweight)
CREATE TABLE IF NOT EXISTS surah_mapping (
  id INT AUTO_INCREMENT PRIMARY KEY,
  surah_key VARCHAR(50) NOT NULL UNIQUE,
  surah_name VARCHAR(100) NOT NULL,
  surah_number INT NOT NULL UNIQUE
);

-- 6. Bikin tabel scores (fixed syntax)
CREATE TABLE IF NOT EXISTS scores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  surah_key VARCHAR(50) NOT NULL,
  score INT NOT NULL DEFAULT 0,
  max_questions INT NOT NULL DEFAULT 10,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE(user_id, surah_key),
  FOREIGN KEY (user_id) REFERENCES peserta(id) ON DELETE CASCADE
);

-- 7. Bikin tabel memorized_words (fixed syntax)
CREATE TABLE IF NOT EXISTS memorized_words (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  surah_key VARCHAR(50) NOT NULL,
  arab TEXT NOT NULL,
  meaning TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES peserta(id) ON DELETE CASCADE
);

-- 8. Seed data surah mapping - Juz 30 (Juz Amma)
-- Urutan dari An-Nas (114) ke An-Naba (78)
INSERT IGNORE INTO surah_mapping (surah_key, surah_name, surah_number) VALUES 
('an-nas', 'An-Nas', 114),
('al-falaq', 'Al-Falaq', 113), 
('al-ikhlas', 'Al-Ikhlas', 112),
('al-masad', 'Al-Masad', 111),
('an-nasr', 'An-Nasr', 110),
('al-kafirun', 'Al-Kafirun', 109),
('al-kautsar', 'Al-Kautsar', 108),
('al-maun', 'Al-Maun', 107),
('quraisy', 'Quraisy', 106),
('al-fil', 'Al-Fil', 105),
('al-humazah', 'Al-Humazah', 104),
('al-asr', 'Al-Asr', 103),
('at-takasur', 'At-Takasur', 102),
('al-qariah', 'Al-Qari\'ah', 101),
('al-adiyat', 'Al-Adiyat', 100),
('az-zalzalah', 'Az-Zalzalah', 99),
('al-bayyinah', 'Al-Bayyinah', 98),
('al-qadr', 'Al-Qadr', 97),
('al-alaq', 'Al-Alaq', 96),
('at-tin', 'At-Tin', 95),
('al-insyirah', 'Al-Insyirah', 94),
('ad-duha', 'Ad-Duha', 93),
('al-lail', 'Al-Lail', 92),
('as-syams', 'As-Syams', 91),
('al-balad', 'Al-Balad', 90),
('al-fajr', 'Al-Fajr', 89),
('al-gasyiyah', 'Al-Gasyiyah', 88),
('al-ala', 'Al-A\'la', 87),
('at-tariq', 'At-Tariq', 86),
('al-buruj', 'Al-Buruj', 85),
('al-insyiqaq', 'Al-Insyiqaq', 84),
('al-mutaffifin', 'Al-Mutaffifin', 83),
('al-infitar', 'Al-Infitar', 82),
('at-takwir', 'At-Takwir', 81),
('abasa', 'Abasa', 80),
('an-naziat', 'An-Nazi\'at', 79),
('an-naba', 'An-Naba\'', 78);

-- 9. Insert dummy user untuk testing
INSERT IGNORE INTO peserta (id, nama, phone, password) VALUES 
(1, 'Test User', '08123456789', 'password123');

SELECT * FROM user;

SELECT * FROM surah_mapping;

SELECT * FROM scores;

SELECT * FROM memorized_words;