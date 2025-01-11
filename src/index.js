import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ScoreProvider } from './ScoreContext';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ScoreProvider>
      <App />
    </ScoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
