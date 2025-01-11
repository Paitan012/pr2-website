import React, { useState, useContext, useEffect } from 'react';
import ScoreContext from './ScoreContext';
import './Question3.css';
import { useNavigate } from 'react-router-dom';

function Question3() {
  const { selectedAnswers = {}, updateAnswer } = useContext(ScoreContext); 
  const navigate = useNavigate();

  
  const [selectedAnswer, setSelectedAnswer] = useState(selectedAnswers['q3'] || '');

  useEffect(() => {
    
    setSelectedAnswer(selectedAnswers['q3'] || '');
  }, [selectedAnswers]);

  const handleAnswerChange = (answer) => {
    setSelectedAnswer(answer); 
    updateAnswer('q3', answer); 
  };

  const handleNextQuestion = () => {
    navigate('/question4'); 
  };

  const handlePreviousQuestion = () => {
    navigate('/question2');
  };

  const getAnswerClass = (answer) => {
    return selectedAnswer === answer ? 'selected-answer' : ''; 
  };

  return (
    <div className="question-container">
      <h1>QUESTION 3/10:</h1>
      <h2>Which was not cited in the third paragraph as an issue with landfilling?</h2>

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
          <label htmlFor="answer-a">A. Landfills are smelly.</label>
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
          <label htmlFor="answer-b">B. Usable materials are wasted in landfills.</label>
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
          <label htmlFor="answer-c">C. Landfills may pollute the water supply.</label>
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
          <label htmlFor="answer-d">D. It is difficult to find locations for landfills.</label>
        </div>
      </div>


      <div className="navigation-container">
        <button onClick={handlePreviousQuestion} className="nav-pbutton">←</button>
        <button onClick={handleNextQuestion} className="nav-nbutton">→</button>
      </div>
    </div>
  );
}

export default Question3;
