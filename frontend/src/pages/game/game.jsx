import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { generateQuiz } from "../../utils/generateQuestions";

const Game = () => {
  const { surah } = useParams();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const quiz = generateQuiz(surah, 5); // generate 5 soal
    setQuestions(quiz);
  }, [surah]);

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Kuis Surah {surah}</h1>
      {questions.map(q => (
        <div key={q.id} className="mb-6 p-4 bg-purple-700 rounded-lg">
          <p className="mb-2">{q.question}</p>
          {q.type === "multiple-choice" && (
            <ul>
              {q.options.map((opt, i) => (
                <li key={i} className="hover:bg-purple-500 cursor-pointer p-2 rounded">
                  {opt}
                </li>
              ))}
            </ul>
          )}

          {q.type === "underline" && (
            <ul>
              {q.options.map((opt, i) => (
                <li key={i} className="hover:bg-purple-500 cursor-pointer p-2 rounded">
                  {opt}
                </li>
              ))}
            </ul>
          )}

          {q.type === "match" && (
            <div>
              <p>[Tampilan matching Arab ↔ arti nanti kita kembangkan]</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Game;
