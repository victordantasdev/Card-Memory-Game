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

  return (
    <>
      <BoardGameWrapper>
        {amoutCards.map(() => <CardFrontBack />)}
      </BoardGameWrapper>
    </>
  );
};

export default BoardGame;
