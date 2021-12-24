import React, { useContext } from 'react';
import {
  Container,
  CountdownButton, CountdownContainer, LevelButton, LevelWrapper,
} from './CountDown.style';
import { CountdownConext } from './CountdownContext';

const Countdown = () => {
  const {
    minuteLeft,
    isActive,
    secondLeft,
    minuteRight,
    secondRight,
    hasFinished,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownConext);

  const activeLevel = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const element = e.target as Element;

    if (element.textContent === 'Easy') {
      resetCountdown(5);
    } else if (element.textContent === 'Medium') {
      resetCountdown(3);
    } else if (element.textContent === 'Hard') {
      resetCountdown(2);
    }

    const levelButtons = document.querySelectorAll('.level-button');
    levelButtons.forEach((btn) => {
      if (element.textContent === btn.textContent) {
        btn.classList.add('-selected');
      } else {
        btn.classList.remove('-selected');
      }
    });
  };

  const startWithLevel = () => {
    const $level = document.querySelector('.-selected')?.textContent;
    if ($level === 'Easy') {
      startCountdown(5);
    } else if ($level === 'Medium') {
      startCountdown(3);
    } else if ($level === 'Hard') {
      startCountdown(2);
    }
  };

  return (
    <Container>
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
          <CountdownButton onClick={startWithLevel}>
            Game Over
          </CountdownButton>
        ) : (
          <>
            {isActive ? (
              <CountdownButton onClick={() => resetCountdown()}>
                Reset Game
              </CountdownButton>
            ) : (
              <CountdownButton onClick={startWithLevel}>
                Start Game
              </CountdownButton>
            )}
          </>
        )}
      </div>

      <LevelWrapper>
        <LevelButton
          className="level-button -selected"
          onClick={(e) => activeLevel(e)}
        >
          Easy
        </LevelButton>
        <LevelButton
          className="level-button"
          onClick={(e) => activeLevel(e)}
        >
          Medium
        </LevelButton>
        <LevelButton
          className="level-button"
          onClick={(e) => activeLevel(e)}
        >
          Hard
        </LevelButton>
      </LevelWrapper>
    </Container>
  );
};

export default Countdown;
