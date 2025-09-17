import React from "react";

function QuestionReverse({ data, onAnswer }) {
  const handleClick = (option) => {
    onAnswer(option === data.answer);
  };

  return (
    <div className="text-center text-white">
      <h2 className="mb-4">{data.question}</h2>
      <p className="text-xl mb-6">{data.translation}</p>
      <div className="grid grid-cols-2 gap-4">
        {data.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(opt)}
            className="bg-purple-600 px-4 py-2 rounded"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionReverse;
