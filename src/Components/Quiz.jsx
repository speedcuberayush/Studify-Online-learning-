import React from "react";

import "./Quiz.css";
const Quiz = () => {
  const openExternalQuiz = () => {
    // Open the external website in a new tab or window
    window.open("https://quizmify.vercel.app/quiz", "_blank");
  };

  return (
    <div className="QUIZPLATFORM">
      <div className="contentQUIZ">
        <h1 style={{ color: "#fff", fontSize: "50px" }}>
          Unlock Your Knowledge Potential <br /> AI-Driven Quizzes Tailored Just
          for You!
        </h1>
        <p className="QUIZpara">
          Embark on a transformative learning journey with STUDIFY's
          AI-generated quiz page, a cutting-edge feature designed to elevate
          your educational experience. Immerse yourself in a dynamic testing
          environment that adapts to your progress, offering a personalized and
          challenging assessment of your knowledge. Our AI-driven quizzes are
          meticulously crafted to enhance your understanding, providing a level
          of stringency and originality that sets a new standard for online
          assessments. Say goodbye to static quizzes found across the web;
          STUDIFY's AI quiz page offers a novel approach to testing, ensuring
          you engage with thought-provoking questions that truly assess your
          comprehension. Prepare to witness the future of online learning
          assessments as STUDIFY revolutionizes the way you test and solidify
          your knowledge. Welcome to a smarter, more personalized learning
          experience with STUDIFY's AI-driven quizzes!
        </p>
      </div>
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
