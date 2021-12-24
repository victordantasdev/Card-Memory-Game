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

  const numToTime = (t: number) => {
    const minutes = Math.floor(t / 60);
    const seconds = t % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return `${minuteLeft}${minuteRight}:${secondLeft}${secondRight}`;
  };

  return (
    <StatisticsContainer>
      <StatisticsWrapper>
        <h2>Best Time</h2>
        <BestTime className="best-time">
          <span>
            Easy:
            {' '}
            {numToTime(bestTimeEasy)}
          </span>
        </BestTime>

        <BestTime className="best-time">
          <span>
            Medium:
            {' '}
            {numToTime(bestTimeMedium)}
          </span>
        </BestTime>

        <BestTime className="best-time">
          <span>
            Hard:
            {' '}
            {numToTime(bestTimeHard)}
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
