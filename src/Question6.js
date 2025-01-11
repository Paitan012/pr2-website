import React, { useState, useContext, useEffect } from 'react';
import ScoreContext from './ScoreContext';
import './Question6.css';
import { useNavigate } from 'react-router-dom';

function Question6() {
  const { selectedAnswers = {}, updateAnswer } = useContext(ScoreContext); 
  const navigate = useNavigate();

  
  const [selectedAnswer, setSelectedAnswer] = useState(selectedAnswers['q6'] || '');

  useEffect(() => {
    
    setSelectedAnswer(selectedAnswers['q6'] || '');
  }, [selectedAnswers]);

  const handleAnswerChange = (answer) => {
    setSelectedAnswer(answer); 
    updateAnswer('q6', answer); 
  };

  const handleNextQuestion = () => {
    navigate('/question7'); 
  };

  const handlePreviousQuestion = () => {
    navigate('/question5'); 
  };

  const getAnswerClass = (answer) => {
    return selectedAnswer === answer ? 'selected-answer' : '';
  };

  return (
    <div className="question-container">
      <h1>QUESTION 6/10:</h1>
      <h2>Which best expresses the meaning of the word compacted as it is used in the third paragraph?</h2>

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
          <label htmlFor="answer-a">A. Garbage is burned before it is thrown in a hole.</label>
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
          <label htmlFor="answer-b">B. Garbage is put in trucks before it is thrown in a hole.</label>
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
          <label htmlFor="answer-c">C. Garbage is crushed smaller before it is thrown in a hole.</label>
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
          <label htmlFor="answer-d">D. Garbage is put in a can before it is thrown in a hole.</label>
        </div>
      </div>

  
       <div className="navigation-container">
        <button onClick={handlePreviousQuestion} className="nav-pbutton">←</button>
        <button onClick={handleNextQuestion} className="nav-nbutton">→</button>
      </div>
    </div>
  );
}

export default Question6;
