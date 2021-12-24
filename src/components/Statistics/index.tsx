import React, { useContext } from 'react';
import { CountdownConext } from '../Countdown/CountdownContext';
import { StatisticsContainer, BestTime, StatisticsWrapper } from './Statistics.styled';

const Statistics = () => {
  const {
    bestTimeEasy,
    lostTimesEasy,
    winTimesEasy,

    bestTimeMedium,
    lostTimesMedium,
    winTimesMedium,

    bestTimeHard,
    lostTimesHard,
    winTimesHard,
  } = useContext(CountdownConext);

  return (
    <StatisticsContainer>
      <StatisticsWrapper>
        <h2>Best Time</h2>
        <BestTime className="best-time">
          <span>
            Easy:
            {' '}
            {bestTimeEasy}
          </span>
        </BestTime>

        <BestTime className="best-time">
          <span>
            Medium:
            {' '}
            {bestTimeMedium}
          </span>
        </BestTime>

        <BestTime className="best-time">
          <span>
            Hard:
            {' '}
            {bestTimeHard}
          </span>
        </BestTime>
      </StatisticsWrapper>

      <StatisticsWrapper>
        <h2>You win</h2>
        <BestTime className="best-time">
          <span>
            {winTimesEasy}
            {' '}
            times on Easy
          </span>
        </BestTime>

        <BestTime className="best-time">
          <span>
            {winTimesMedium}
            {' '}
            times on Medium
          </span>
        </BestTime>

        <BestTime className="best-time">
          <span>
            {winTimesHard}
            {' '}
            times on Hard
          </span>
        </BestTime>
      </StatisticsWrapper>

      <StatisticsWrapper>
        <h2>You lose</h2>
        <BestTime className="best-time">
          <span>
            {lostTimesEasy}
            {' '}
            times on Easy
          </span>
        </BestTime>

        <BestTime className="best-time">
          <span>
            {lostTimesMedium}
            {' '}
            times on Medium
          </span>
        </BestTime>

        <BestTime className="best-time">
          <span>
            {lostTimesHard}
            {' '}
            times on Hard
          </span>
        </BestTime>
      </StatisticsWrapper>
    </StatisticsContainer>
  );
};

export default Statistics;
