import React, { useState, useRef, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ScoreContext from './ScoreContext'; 
import './FrustrationPage.css'; 

function FrustrationPage() {
  const location = useLocation();
  const { score, percentage } = location.state || {}; 
  const { setScore } = useContext(ScoreContext); 
  const navigate = useNavigate();

  
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      console.log('AudioRef initialized:', audioRef.current);
      const playAudio = async () => {
        try {
          audioRef.current.muted = false;
          await audioRef.current.play(); 
          console.log('Audio is playing.');
        } catch (error) {
          console.error('Autoplay failed: ', error);
        }
      };
      playAudio();
    }
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
          <strong> 
            <span className="flashing-text">Congratulations!</span><br/>
            - You completed the test -
          </strong><br/><br/>
          It's okay! Growth takes time. You’ve got this!
        </h2>
        <h3>
          <span className="static-text">Your score:</span> 
          <span className="dynamic-text">{score} / 10</span><br />
          <span className="static-text">Your comprehension percentage:</span> 
          <span className="dynamic-text">{percentage}%</span>
        </h3>
      </div>
      
      <div className="Fresults-rectangle">
        <h1 className="level">You are in the... <br /> 
          <span className="frustration">FRUSTRATION</span> LEVEL
        </h1>
      </div>
      
      <div className="Fbutton-container">
        <button className="go-home-button frustration" onClick={handleGoHome}>
          Try <br />Again
        </button>
        <button className="learn-button frustration" onClick={handleGoToLearn}>
        Overview
        </button>
        <button className="home-button frustration" onClick={handleGoToHome}>
          Home
        </button>
      </div>
      

      <audio ref={audioRef} src="/audio/Results.mp3" />
    </div>
  );
}

export default FrustrationPage;
