/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import CardFrontBack from '../../components/CardFrontBack';

interface Props {
  totalCards: number;
}

const BoardGameWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  perspective: 600px;
`;

const BoardGame: React.FC<Props> = ({ totalCards }) => {
  const amoutCards = [...Array<string>(totalCards)];

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
    } else if (cardsActive.length > 2) {
      cardsActive.forEach((card) => {
        card.classList.remove('-active');
      });
    }
  };

  return (
    <>
      <BoardGameWrapper onClick={() => handleClick()}>
        {amoutCards.map((value, index) => <CardFrontBack key={index} />)}
      </BoardGameWrapper>
    </>
  );
};

export default BoardGame;
