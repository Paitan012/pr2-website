import React, { useContext } from 'react';
import ScoreContext from './ScoreContext';
import { useNavigate } from 'react-router-dom';

function ResultsPage() {
  const { score, calculateComprehension } = useContext(ScoreContext);
  const percentage = calculateComprehension();
  const navigate = useNavigate();

 
  const getComprehensionLevel = () => {
    if (percentage >= 80) {
      return 'INDEPENDENT LEVEL';
    } else if (percentage >= 59) {
      return 'INSTRUCTIONAL LEVEL';
    } else {
      return 'FRUSTRATION LEVEL';
    }
  };

  
  const level = getComprehensionLevel();
  
  return (
    <div>
      <h1>Quiz Results</h1>
      <p>Your score: {score} / 10</p>
      <p>Comprehension: {percentage}%</p>
      <p>Level: {level}</p>
      <button onClick={() => navigate(`/${level.toLowerCase().replace(' ', '')}`)}>
        Proceed
      </button>
    </div>
  );
}

export default ResultsPage;
