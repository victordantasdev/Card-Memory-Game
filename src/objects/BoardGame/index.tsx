/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { setCookie } from 'nookies';
import CardFrontBack from '../../components/CardFrontBack';
import { CountdownConext } from '../../components/Countdown/CountdownContext';
import Confetti from '../../components/Confetti';

const BoardGameWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  perspective: 600px;
`;

const BoardGame = () => {
  const {
    win,
    setWin,
    winTimes,
    setWinTimes,
    stopCountdown,
  } = useContext(CountdownConext);

  const handleClick = () => {
    const cardsActive = document.querySelectorAll('.-active');

    if (cardsActive.length === 2) {
      const { alt: firstCard } = cardsActive[0]?.children[1]
        .children[0]
        .children[0]
        .children[0] as any;
      const { alt: secondCard } = cardsActive[1]?.children[1]
        .children[0]
        .children[0]
        .children[0] as any;

      if (firstCard === secondCard) {
        cardsActive.forEach((card) => {
          card.classList.replace('-active', '-match');
        });
      }

      setTimeout(() => {
        cardsActive.forEach((card) => {
          card.classList.remove('-active');
        });
      }, 600);

      // user win
      const totalCards = document.querySelectorAll('.card');
      const totalMatch = document.querySelectorAll('.-match');
      if (totalMatch.length === totalCards.length) {
        new Audio('/sounds/win.mp3').play();
        stopCountdown();
        setWin(true);

        setWinTimes(Number(winTimes) + 1);
        setCookie(null, 'WIN_TIMES', String(winTimes + 1), {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        });
      }
    } else if (cardsActive.length > 2) {
      cardsActive.forEach((card) => {
        card.classList.remove('-active');
      });
    }
  };

  return (
    <>
      {win && <Confetti />}
      <BoardGameWrapper onClick={() => handleClick()}>
        <CardFrontBack />
      </BoardGameWrapper>
    </>
  );
};

export default BoardGame;
