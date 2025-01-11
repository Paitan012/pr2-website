import React, { useState, useContext, useEffect } from 'react';
import ScoreContext from './ScoreContext';
import './Question4.css';
import { useNavigate } from 'react-router-dom';

function Question4() {
  const { selectedAnswers = {}, updateAnswer } = useContext(ScoreContext); 
  const navigate = useNavigate();

  
  const [selectedAnswer, setSelectedAnswer] = useState(selectedAnswers['q4'] || '');

  useEffect(() => {
    
    setSelectedAnswer(selectedAnswers['q4'] || '');
  }, [selectedAnswers]);

  const handleAnswerChange = (answer) => {
    setSelectedAnswer(answer);  
    updateAnswer('q4', answer); 
  };

  const handleNextQuestion = () => {
    navigate('/question5'); 
  };

  const handlePreviousQuestion = () => {
    navigate('/question3'); 
  };

  const getAnswerClass = (answer) => {
    return selectedAnswer === answer ? 'selected-answer' : ''; 
  };

  return (
    <div className="question-container">
      <h1>QUESTION 4/10:</h1>
      <h2>Which conclusion could best be supported with text from the passage?</h2>

      <div className="choice-container">
        <div className={`choice-box ${getAnswerClass('a')}`}>
          <input
            type="radio"
            name="answer"
            value="a"
            onChange={() => handleAnswerChange('a')}
            id="answer-a"
            checked={selectedAnswer === 'a'}
          />
          <label htmlFor="answer-a">A. Each method of waste management has its drawbacks.</label>
        </div>

        <div className={`choice-box ${getAnswerClass('b')}`}>
          <input
            type="radio"
            name="answer"
            value="b"
            onChange={() => handleAnswerChange('b')}
            id="answer-b"
            checked={selectedAnswer === 'b'}
          />
          <label htmlFor="answer-b">B. Recycling is without a doubt the best way to handle waste.</label>
        </div>

        <div className={`choice-box ${getAnswerClass('c')}`}>
          <input
            type="radio"
            name="answer"
            value="c"
            onChange={() => handleAnswerChange('c')}
            id="answer-c"
            checked={selectedAnswer === 'c'}
          />
          <label htmlFor="answer-c">C. Incineration is the best way to process waste.</label>
        </div>

        <div className={`choice-box ${getAnswerClass('d')}`}>
          <input
            type="radio"
            name="answer"
            value="d"
            onChange={() => handleAnswerChange('d')}
            id="answer-d"
            checked={selectedAnswer === 'd'}
          />
          <label htmlFor="answer-d">D. All large cities should create massive compost piles.</label>
        </div>
      </div>

    
      <div className="navigation-container">
        <button onClick={handlePreviousQuestion} className="nav-pbutton">←</button>
        <button onClick={handleNextQuestion} className="nav-nbutton">→</button>
      </div>
    </div>
  );
}

export default Question4;
