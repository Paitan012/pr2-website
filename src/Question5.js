import React, { useState, useContext, useEffect } from 'react';
import ScoreContext from './ScoreContext';
import './Question5.css';
import { useNavigate } from 'react-router-dom';

function Question5() {
  const { selectedAnswers = {}, updateAnswer } = useContext(ScoreContext); 
  const navigate = useNavigate();

  
  const [selectedAnswer, setSelectedAnswer] = useState(selectedAnswers['q5'] || '');

  useEffect(() => {
   
    setSelectedAnswer(selectedAnswers['q5'] || '');
  }, [selectedAnswers]);

  const handleAnswerChange = (answer) => {
    setSelectedAnswer(answer); 
    updateAnswer('q5', answer); 
  };

  const handleNextQuestion = () => {
    navigate('/question6'); 
  };

  const handlePreviousQuestion = () => {
    navigate('/question4'); 
  };

  const getAnswerClass = (answer) => {
    return selectedAnswer === answer ? 'selected-answer' : ''; 
  };

  return (
    <div className="question-container">
      <h1>QUESTION 5/10:</h1>
      <h2>Which best expresses the main idea of the fourth paragraph?</h2>

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
          <label htmlFor="answer-a">A. Landfills take up a lot of space.</label>
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
          <label htmlFor="answer-b">B. Composting is good for the soil, but it can be hard to do.</label>
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
          <label htmlFor="answer-c">C. The process of composting is very complicated and scientific.</label>
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
          <label htmlFor="answer-d">D. There is a lot of plastic garbage in landfills.</label>
        </div>
      </div>

 
      <div className="navigation-container">
        <button onClick={handlePreviousQuestion} className="nav-pbutton">←</button>
        <button onClick={handleNextQuestion} className="nav-nbutton">→</button>
      </div>
    </div>
  );
}

export default Question5;
