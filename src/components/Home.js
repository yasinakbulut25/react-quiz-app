import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="intro-box">
        <div className="intro-texts">
          <h1 className="intro-title">English Vocabulary Quizzes</h1>
          <p className="intro-description">Choose the quiz you want to solve</p>
        </div>
        <div className="intro-icon">
          <i className="bi bi-question-circle"></i>
        </div>
      </div>

      <div className="level-boxes">
        <div className="level-box">
          <div className="level-text">
            <h2 className="level-name">A1</h2>
            <span>Level</span>
          </div>
          <Link className="level-link" to="/quiz/A1">
            <span>Start Quiz</span> <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
        <div className="level-box">
          <div className="level-text">
            <h2 className="level-name">A2</h2>
            <span>Level</span>
          </div>
          <Link className="level-link" to="/quiz/A2">
            <span>Start Quiz</span> <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
        <div className="level-box">
          <div className="level-text">
            <h2 className="level-name">B1</h2>
            <span>Level</span>
          </div>
          <Link className="level-link" to="/quiz/B1">
            <span>Start Quiz</span> <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
        <div className="level-box">
          <div className="level-text">
            <h2 className="level-name">B2</h2>
            <span>Level</span>
          </div>
          <Link className="level-link" to="/quiz/B2">
            <span>Start Quiz</span> <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
        <div className="level-box">
          <div className="level-text">
            <h2 className="level-name">C1</h2>
            <span>Level</span>
          </div>
          <Link className="level-link" to="/quiz/C1">
            <span>Start Quiz</span> <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
        <div className="level-box">
          <div className="level-text">
            <h2 className="level-name">C2</h2>
            <span>Level</span>
          </div>
          <Link className="level-link" to="/quiz/C2">
            <span>Start Quiz</span> <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
