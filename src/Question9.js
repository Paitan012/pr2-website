import React, { useState, useContext, useEffect } from 'react';
import ScoreContext from './ScoreContext';
import './Question9.css';
import { useNavigate } from 'react-router-dom';

function Question9() {
  const { selectedAnswers = {}, updateAnswer } = useContext(ScoreContext); 
  const navigate = useNavigate();


  const [selectedAnswer, setSelectedAnswer] = useState(selectedAnswers['q9'] || '');

  useEffect(() => {
   
    setSelectedAnswer(selectedAnswers['q9'] || '');
  }, [selectedAnswers]);

  const handleAnswerChange = (answer) => {
    setSelectedAnswer(answer); 
    updateAnswer('q9', answer); 
  };

  const handleNextQuestion = () => {
    navigate('/question10'); 
  };

  const handlePreviousQuestion = () => {
    navigate('/question8'); 
  };

 
  const getAnswerClass = (answer) => {
    return selectedAnswer === answer ? 'selected-answer' : ''; 
  };

  return (
    <div className="question-container">
      <h1>QUESTION 9/10:</h1>
      <h2>Which best explains why composting is not feasible on a large scale?</h2>

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
          <label htmlFor="answer-a">A. People wouldn't want to touch all of that gross rotting food.</label>
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
          <label htmlFor="answer-b">B. It would smell too bad in densely populated cities.</label>
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
          <label htmlFor="answer-c">C. It would attract rodents that would spread disease.</label>
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
          <label htmlFor="answer-d">D. Plastic would get into the compost and turn it into a pollutant.</label>
        </div>
      </div>

      <div className="navigation-container">
        <button onClick={handlePreviousQuestion} className="nav-pbutton">←</button>
        <button onClick={handleNextQuestion} className="nav-nbutton">→</button>
      </div>
    </div>
  );
}

export default Question9;
