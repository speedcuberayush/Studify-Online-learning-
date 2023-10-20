import React from "react";

import "./Quiz.css";
const Quiz = () => {
  const openExternalQuiz = () => {
    // Open the external website in a new tab or window
    window.open("https://quizmify.vercel.app/quiz", "_blank");
  };

  return (
    <div
      style={{
        height: "50vh",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        className="QUIZ"
        style={{ cursor: "pointer" }}
        onClick={openExternalQuiz}
      >
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="css-i6dzq1"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>{" "}
        Explore me
      </button>
    </div>
  );
};

export default Quiz;
