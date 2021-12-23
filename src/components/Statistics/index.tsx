import React, { useContext } from 'react';
import { CountdownConext } from '../Countdown/CountdownContext';
import { StatisticsContainer, BestTime, StatisticsWrapper } from './Statistics.styled';

const Statistics = () => {
  const {
    bestTime,
    lostTimes,
    winTimes,
  } = useContext(CountdownConext);

  return (
    <StatisticsContainer>
      <StatisticsWrapper>
        <h2>Best Time</h2>
        <BestTime className="best-time">
          <span>{bestTime}</span>
        </BestTime>
      </StatisticsWrapper>

      <StatisticsWrapper>
        <h2>You win</h2>
        <BestTime className="best-time">
          <span>
            {winTimes}
            {' '}
            times
          </span>
        </BestTime>
      </StatisticsWrapper>

      <StatisticsWrapper>
        <h2>You lose</h2>
        <BestTime className="best-time">
          <span>
            {lostTimes}
            {' '}
            times
          </span>
        </BestTime>
      </StatisticsWrapper>
    </StatisticsContainer>
  );
};

export default Statistics;
