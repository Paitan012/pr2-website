import { useNavigate, useLocation, } from 'react-router-dom';
import React, { useContext, useEffect, useState, useRef } from 'react';  
import ScoreContext from './ScoreContext'; 
import './IndependentPage.css';
import confetti from 'canvas-confetti'; 

function IndependentPage() {
  const location = useLocation();
  const { score, percentage } = location.state || {};
  const { setScore } = useContext(ScoreContext); 
  const navigate = useNavigate();

  
 
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      const playAudio = async () => {
        try {
          await audioRef.current.play();
        } catch (error) {
          console.error("Audio playback failed:", error);
        }
      };
      playAudio();
    }
  }, []); 
 

  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: 0.5, y: 0.5 },
      colors: ['#ff0f7b', '#f89b29', '#05f7f1', '#2bff88'], 
    });
  }, []);

  const handleGoHome = () => {
    setScore(0); 
    navigate('/story'); 
  };

  const handleGoToHome = () => {
    setScore(0);
    navigate('/'); 
  };

  
  const handleGoToLearn = () => {
    navigate('/learnpage'); 
  };

  return (
    <div className="results-page">
      <div className="outside-info">
        <h2>        
          <strong> <span className="flashing-text">Congratulations!</span><br/>
        - You completed the test -</strong><br/><br/>
        Great job! Your reading comprehension skills are impressive—keep it up!
        </h2>
        <div className="IndependentPage">
          <h3>
            <span className="static-text">Your score:</span> <span className="dynamic-text">{score} / 10</span><br />
            <span className="static-text">Your comprehension percentage:</span> <span className="dynamic-text">{percentage}%</span>
          </h3>
        </div>
      </div>
      
      <div className="ITresults-rectangle">
        <h1 className="level">You are in the... <br /> <span className="independent">INDEPENDENT</span> LEVEL</h1>
      </div>
      
      <div className="ITbutton-container">
        <button className="go-home-button" onClick={handleGoHome}>
          Try <br/>Again
        </button>
        <button className="learn-button" onClick={handleGoToLearn}>
        Overview
        </button>
        <button className="home-button" onClick={handleGoToHome}>
          Home
        </button>
      </div>
      

      <audio ref={audioRef} src="/audio/Results1.mp3" />
    </div>
  );
}

export default IndependentPage;
