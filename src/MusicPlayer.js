import React, { useState, useRef } from 'react';

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(false);  
  const audioRef = useRef(null); 

  
  const toggleMute = () => {
    setIsMuted(prevState => {
      const newState = !prevState;
      if (audioRef.current) {
        audioRef.current.muted = newState;  
      }
      return newState;
    });
  };

  return (
    <div>
     
      <button onClick={toggleMute} className="mute-button">
        <i className={isMuted ? "fas fa-volume-mute" : "fas fa-volume-up"}></i>
      </button>

     
      <audio ref={audioRef} src="audio/QA.mp3" autoPlay loop />
    </div>
  );
};

export default MusicPlayer;
