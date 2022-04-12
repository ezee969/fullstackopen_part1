import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import Statistics from './components/statistics/statistics';
import Button from './components/button/button';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodBut = () => {
    setGood(good + 1);
  };

  const handleNeutralBut = () => {
    setNeutral(neutral + 1);
  };
  const handleBadBut = () => {
    setBad(bad + 1);
  };

  return (
    <main>
      <h1>Give feedback</h1>
      <Button handleClickFunc={handleGoodBut} text='good' />
      <Button handleClickFunc={handleNeutralBut} text='neutral' />
      <Button handleClickFunc={handleBadBut} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </main>
  );
};

createRoot(document.getElementById('root')).render(<App />);
