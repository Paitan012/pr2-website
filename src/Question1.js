import React, { useState, useContext, useEffect } from 'react';
import './Question1.css';
import { useNavigate } from 'react-router-dom';
import ScoreContext from './ScoreContext';

function Question1() {
  const { selectedAnswers = {}, updateAnswer } = useContext(ScoreContext); 
  const navigate = useNavigate();

 
  const [selectedAnswer, setSelectedAnswer] = useState(selectedAnswers['q1'] || '');

  useEffect(() => {
   
    setSelectedAnswer(selectedAnswers['q1'] || '');
  }, [selectedAnswers]);

  const handleAnswerChange = (answer) => {
    setSelectedAnswer(answer);  
    updateAnswer('q1', answer);
  };

  const handleNextQuestion = () => {
    navigate('/question2');
  };

  const getAnswerClass = (answer) => {
    return selectedAnswer === answer ? 'selected-answer' : '';
  };

  return (
    <div className="question-container">
      <h1>QUESTION 1/10:</h1>
      <h2>Which best explains why the author begins the text by talking about magical garbage fairies?</h2>

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
          <label htmlFor="answer-a">A. He is putting a common misconception to rest.</label>
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
          <label htmlFor="answer-b">B. He is trying to get the reader's attention.</label>
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
          <label htmlFor="answer-c">C. He is addressing his concern in a serious way.</label>
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
          <label htmlFor="answer-d">D. He is supporting his argument with evidence.</label>
        </div>
      </div>

 <div className="navigation-container">
      
        <button onClick={handleNextQuestion} className="nav-nbutton">→</button>
      </div>
    </div>
  );
}

export default Question1;
