import React from 'react';
import Statistic from '../statistic/statistic';

export default function Statistics({ good, neutral, bad }) {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <h2>No feedback given</h2>;
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <Statistic title={'Good'} num={good} />
        <Statistic title={'Neutral'} num={neutral} />
        <Statistic title={'Bad'} num={bad} />
        <Statistic title={'All'} num={good + neutral + bad} />
        <Statistic title={'Average'} num={(good + neutral + bad) / 3} />
        <Statistic
          title={'Positive'}
          percentage={true}
          num={good / (good + neutral + bad)}
        />
      </table>
    </div>
  );
}
