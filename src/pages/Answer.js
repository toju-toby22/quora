import React from "react";
import Answerbox from "../components/Answerbox"

import QuoraHeader from "../components/QuoraHeader";
import AnswerSide from "../components/answersidebar";
import "../components/css/Quora.css";

function Answer() {
  return (
    <div className="quora">
      <QuoraHeader />
      <div className="quora__contents">
        <div className="quora__content">
          <AnswerSide />
          <Answerbox/>
        </div>
      </div>
    </div>
  );
}

export default Answer;
