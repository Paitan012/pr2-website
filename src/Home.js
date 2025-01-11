import './App.css';
import React, { useState, useRef, useContext } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import logo from './logo.png';

function Home() {
  const [flashing, setFlashing] = useState(false);
  const [logoMoving, setLogoMoving] = useState(true); 
  const navigate = useNavigate();  
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted; 
    }
  };
  const handleClick = () => {
    setFlashing(true);  
    setLogoMoving(false);  
    setTimeout(() => {
      navigate('/story'); 
    }, 1000); 
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2><b>ePhil-IRI</b></h2>
        <h3>
          Discover Your Reading Comprehension Level!
          <br />
          Are you ready to find out how well you understand written texts?
        </h3>
    
        <img 
          src={logo} 
          className={`App-logo ${logoMoving ? 'logo-moving' : ''}`} 
          alt="logo" 
        />
        <div className={`rectangle ${flashing ? 'flash-start' : ''}`} onClick={handleClick}>
          <span className={`App-link ${flashing ? 'flashing-text' : ''}`}>
            Press START
          </span>
        </div>
        <p>
          A reading comprehension assessment tool is <br /> designed to evaluate your reading comprehension levels.
        </p>
      </header>
      
     
      <audio ref={audioRef} src="/audio/Home.m4a" autoPlay loop />
    </div>
    
  );
}

export default Home;
