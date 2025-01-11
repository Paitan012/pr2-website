import React, { createContext, useState } from 'react';

const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});


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


  const updateAnswer = (question, answer) => {
    setSelectedAnswers(prevAnswers => ({ ...prevAnswers, [question]: answer }));
  };

 
  const finalizeScore = () => {
    let finalScore = 0;

  
    Object.keys(selectedAnswers).forEach((question) => {
      if (selectedAnswers[question] === correctAnswers[question]) {
        finalScore++;
      }
    });

    setScore(finalScore); 
  };

  
  const calculateComprehension = () => {
    return (score / 10) * 100; 
  };

  const resetScore = () => {
    setScore(0);
    setSelectedAnswers({});
  };

  return (
    <ScoreContext.Provider value={{ score, setScore, selectedAnswers, updateAnswer, finalizeScore, calculateComprehension, resetScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

export default ScoreContext;
