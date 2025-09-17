import React from "react";
import QuestionMatch from "./match";
import QuestionTranslate from "./translate";
import QuestionReverse from "./reverse";

function QuestionRenderer({ question, onAnswer }) {
  switch (question.type) {
    case "match":
      return <QuestionMatch data={question} onAnswer={onAnswer} />;
    case "translate":
      return <QuestionTranslate data={question} onAnswer={onAnswer} />;
    case "reverse":
      return <QuestionReverse data={question} onAnswer={onAnswer} />;
    default:
      return <div className="text-red-500">Unknown question type</div>;
  }
}

export default QuestionRenderer;
