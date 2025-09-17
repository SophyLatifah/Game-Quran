import React, { useState } from "react";

function QuestionMatch({ data, onAnswer }) {
  const [selected, setSelected] = useState(null);

  const handleClick = (option) => {
    if (selected) {
      // cek pasangan
      if (selected.translation === option || selected.arabic === option) {
        onAnswer(true);
      } else {
        onAnswer(false);
      }
      setSelected(null);
    } else {
      setSelected(option);
    }
  };

  return (
    <div className="text-center text-white">
      <h2 className="mb-4">{data.question}</h2>
      <div className="grid grid-cols-2 gap-4">
        {data.pairs.flatMap((pair, idx) => [
          <button
            key={`a-${idx}`}
            onClick={() => handleClick(pair)}
            className="bg-purple-600 p-3 rounded"
          >
            {pair.arabic}
          </button>,
          <button
            key={`t-${idx}`}
            onClick={() => handleClick(pair)}
            className="bg-purple-500 p-3 rounded"
          >
            {pair.translation}
          </button>,
        ])}
      </div>
    </div>
  );
}

export default QuestionMatch;
