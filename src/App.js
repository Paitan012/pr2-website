import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import StoryPage from './StoryPage';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
import Question5 from './Question5';
import Question6 from './Question6';
import Question7 from './Question7';
import Question8 from './Question8';
import Question9 from './Question9';
import Question10 from './Question10';
import ResultsPage from './ResultsPage';
import IndependentPage from './IndependentPage';
import InstructionalPage from './InstructionalPage';
import FrustrationPage from './FrustrationPage';
import LearnPage from './LearnPage';


function App() {
  return (
    <Router> 
      <AppWithRouting />
    </Router>
  );
}


function AppWithRouting() {
  const location = useLocation(); 

  
  const isQuestionPage = location.pathname.startsWith('/question') && 
                          parseInt(location.pathname.replace('/question', '')) <= 10;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/story" element={<StoryPage />} />
      <Route path="/question1" element={<Question1 />} />
      <Route path="/question2" element={<Question2 />} />
      <Route path="/question3" element={<Question3 />} />
      <Route path="/question4" element={<Question4 />} />
      <Route path="/question5" element={<Question5 />} />
      <Route path="/question6" element={<Question6 />} />
      <Route path="/question7" element={<Question7 />} />
      <Route path="/question8" element={<Question8 />} />
      <Route path="/question9" element={<Question9 />} />
      <Route path="/question10" element={<Question10 />} />
      <Route path="/results" element={<ResultsPage />} />
      <Route path="/independent" element={<IndependentPage />} />
      <Route path="/instructional" element={<InstructionalPage />} />
      <Route path="/frustration" element={<FrustrationPage />} />
      <Route path="/learnpage" element={<LearnPage />} />
    </Routes>
  );
}

export default App;
