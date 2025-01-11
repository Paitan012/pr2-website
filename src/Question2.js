import React, { useState, useContext, useEffect } from 'react';
import './Question2.css';
import { useNavigate } from 'react-router-dom';
import ScoreContext from './ScoreContext';

function Question2() {
  const { selectedAnswers = {}, updateAnswer } = useContext(ScoreContext); 
  const navigate = useNavigate();

 
  const [selectedAnswer, setSelectedAnswer] = useState(selectedAnswers['q2'] || '');

  useEffect(() => {
    
    setSelectedAnswer(selectedAnswers['q2'] || '');
  }, [selectedAnswers]);

  const handleAnswerChange = (answer) => {
    setSelectedAnswer(answer);  
    updateAnswer('q2', answer); 
  };

  const handleNextQuestion = () => {
    navigate('/question3'); 
  };

  const handlePreviousQuestion = () => {
    navigate('/question1'); 
  };

  const getAnswerClass = (answer) => {
    return selectedAnswer === answer ? 'selected-answer' : ''; 
  };

  return (
    <div className="question-container">
      <h1>QUESTION 2/10:</h1>
      <h2>Which best defines the meaning of incineration as it is used in the text?</h2>

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
          <label htmlFor="answer-a">A. To bury waste materials in a large hole.</label>
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
          <label htmlFor="answer-b">B. To allow waste products to decompose and become fertilizer.</label>
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
          <label htmlFor="answer-c">C. To burn waste materials and harvest the energy.</label>
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
          <label htmlFor="answer-d">D. To turn waste materials into products like book covers.</label>
        </div>
      </div>

   
      <div className="navigation-container">
        <button onClick={handlePreviousQuestion} className="nav-pbutton">←</button>
        <button onClick={handleNextQuestion} className="nav-nbutton">→</button>
      </div>
    </div>
  );
}

export default Question2;
