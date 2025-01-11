import React, { useContext, useState, useEffect } from 'react';
import ScoreContext from './ScoreContext';
import './Question10.css';
import { useNavigate } from 'react-router-dom';
import { ref, update, increment } from 'firebase/database';  
import { database } from './firebaseConfig';  

function Question10() {
  const { selectedAnswers = {}, setScore, updateAnswer } = useContext(ScoreContext); 
  const navigate = useNavigate();
  const totalQuestions = 10;

  const [selectedAnswer, setSelectedAnswer] = useState(selectedAnswers['q10'] || '');

  useEffect(() => {
    setSelectedAnswer(selectedAnswers['q10'] || '');
  }, [selectedAnswers]);

  const handleAnswerChange = (answer) => {
    setSelectedAnswer(answer);
    updateAnswer('q10', answer); 
  };

  const handlePreviousQuestion = () => {
    navigate('/question9'); 
  };

 
  const updateResultInFirebase = (level) => {
    const resultRef = ref(database, `testResults/${level}`); 
    update(resultRef, {
      count: increment(1)  
    })
      .then(() => {
        console.log(`Successfully updated ${level}`);
      })
      .catch((error) => {
        console.error("Error updating result:", error);
      });
  };

  const handleFinish = () => {
    let updatedScore = 0;

    const correctAnswers = {
      q1: 'b', 
      q2: 'c',
      q3: 'b',
      q4: 'a',
      q5: 'b',
      q6: 'c',
      q7: 'd',
      q8: 'a',
      q9: 'd',
      q10: 'b', 
    };

   
    Object.keys(correctAnswers).forEach((questionKey) => {
      if (selectedAnswers[questionKey] === correctAnswers[questionKey]) {
        updatedScore++;
      }
    });

    setScore(updatedScore);

    
    const percentage = (updatedScore / totalQuestions) * 100;

    
    const level = percentage >= 80 ? 'INDEPENDENT LEVEL' : (percentage >= 59 ? 'INSTRUCTIONAL LEVEL' : 'FRUSTRATION LEVEL');
    updateResultInFirebase(level);  

    
    if (percentage >= 80) {
      navigate('/independent', {
        state: { score: updatedScore, percentage: percentage.toFixed(2) },
      });
    } else if (percentage >= 59 && percentage < 80) {
      navigate('/instructional', {
        state: { score: updatedScore, percentage: percentage.toFixed(2) },
      });
    } else {
      navigate('/frustration', {
        state: { score: updatedScore, percentage: percentage.toFixed(2) },
      });
    }
  };

  const getAnswerClass = (answer) => {
    return selectedAnswer === answer ? 'selected-answer' : ''; 
  };

  return (
    <div className="question-container">
      <h1>QUESTION 10/10:</h1>
      <h2>Which title best expresses the main idea of this text?</h2>

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
          <label htmlFor="answer-a">
            A. The Magic of Recycling: Bringing Back What Was Once Lost
          </label>
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
          <label htmlFor="answer-b">
            B. Methods of Waste Management: Pros and Cons
          </label>
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
          <label htmlFor="answer-c">
            C. Recycling, Landfilling, or Composting: Which is Best for You?
          </label>
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
          <label htmlFor="answer-d">
            D. Do Your Part: How to Save the Earth by Recycling and Composting
          </label>
        </div>
      </div>

      <div className="navigation-container">
        <button onClick={handlePreviousQuestion} className="nav-pbutton">←</button>
        <button
          onClick={handleFinish}
          className="nav-nbutton"
          disabled={!selectedAnswer} 
        >
          Finish →
        </button>
      </div>
    </div>
  );
}

export default Question10;
