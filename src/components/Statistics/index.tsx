import React, { useContext } from 'react';
import { CountdownConext } from '../Countdown/CountdownContext';
import { StatisticsContainer, BestTime } from './Statistics.styled';

const Statistics = () => {
  const {
    bestTime,
  } = useContext(CountdownConext);

  return (
    <StatisticsContainer>
      <h2>Best Time</h2>
      <BestTime className="best-time">
        <span>{bestTime}</span>
      </BestTime>
    </StatisticsContainer>
  );
};

export default Statistics;
