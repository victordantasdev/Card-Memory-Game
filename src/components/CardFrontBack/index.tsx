import React from 'react';
import styled from 'styled-components';
import CardGame from '../CardGame';

const CardFrontBackWrapper = styled.article`
  position: relative;
  transform-style: preserve-3d;
  width: 130px;
  height: 160px;
  transition: transform 600ms cubic-bezier(0.42, 0, 0.56, 1.61);

  &.-active {
    transform: rotateY(180deg);
  }
`;

const Front = styled.div`
  position: absolute;
  backface-visibility: hidden;
`;

const Back = styled.div`
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

const CardFrontBack = () => {
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const origin = e.target as Element;
    const cardFrontBack = origin.parentNode?.parentNode?.parentNode?.parentNode as HTMLElement;

    return cardFrontBack?.classList.toggle('-active');
  };

  return (
    <CardFrontBackWrapper onClick={(e) => handleClick(e)}>
      <Front>
        <CardGame />
      </Front>

      <Back>
        <CardGame icon="typescript" alt="typescript logo" />
      </Back>
    </CardFrontBackWrapper>
  );
};

export default CardFrontBack;
