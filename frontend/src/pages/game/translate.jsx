import React from "react";

function QuestionTranslate({ data, onAnswer }) {
  const handleClick = (option) => {
    onAnswer(option === data.answer);
  };

  return (
    <div className="text-center text-white">
      <h2 className="mb-4">{data.question}</h2>
      <p className="text-2xl mb-6">{data.arabic}</p>
      <div className="flex flex-wrap justify-center gap-3">
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

export default QuestionTranslate;
