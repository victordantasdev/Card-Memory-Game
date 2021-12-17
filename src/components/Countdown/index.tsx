import React, { useContext } from 'react';
import { CountdownButton, CountdownContainer } from './CountDown.style';
import { CountdownConext } from './CountdownContext';

const Countdown = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownConext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <CountdownContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </CountdownContainer>

      {hasFinished ? (
        <CountdownButton>
          Game Over
        </CountdownButton>
      ) : (
        <>
          {isActive ? (
            <CountdownButton onClick={resetCountdown}>
              Stop Game
            </CountdownButton>
          ) : (
            <CountdownButton onClick={startCountdown}>
              Start Game
            </CountdownButton>
          )}
        </>
      )}

    </div>
  );
};

export default Countdown;
