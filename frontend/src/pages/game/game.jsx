import { useParams } from "react-router-dom";
import dataSurah from "../../data/dataSurah";

const Game = () => {
  const { surah } = useParams(); // contoh: /game/an-nas
  const surahData = dataSurah[surah];

  if (!surahData) {
    return <div className="text-white text-center mt-10">Surah tidak ditemukan.</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">{surahData.title}</h1>
      <p className="mb-6">XP: {surahData.xp}</p>

      {/* Contoh render soal */}
      {surahData.questions.map((q, i) => (
        <div key={i} className="mb-4 p-4 bg-purple-700 rounded-lg shadow">
          <p>{q.question}</p>
        </div>
      ))}
    </div>
  );
};

export default Game;
