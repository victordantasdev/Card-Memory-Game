import React from 'react';
import styled from 'styled-components';
import CardGame from '../CardGame';

const CardFrontBackWrapper = styled.article`
  position: relative;
  transform-style: preserve-3d;
  width: 130px;
  height: 160px;
  transition: transform 600ms cubic-bezier(0.42, 0, 0.56, 1.61);

  &.-locked {
    pointer-events: none;
  }

  &.-active {
    transform: rotateY(180deg);
  }

  &.-match {
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
  const cards = [
    {
      icon: 'typescript',
      altIcon: 'TypeScript Logo',
    },
    {
      icon: 'javascript',
      altIcon: 'JavaScript Logo',
    },
    {
      icon: 'nextjs',
      altIcon: 'Next JS Logo',
    },
    {
      icon: 'html',
      altIcon: 'HTML Logo',
    },
    {
      icon: 'css',
      altIcon: 'CSS Logo',
    },
    {
      icon: 'linux',
      altIcon: 'Linux Logo',
    },
  ];

  const randomCards: { icon: string, altIcon: string }[] = [];
  while (randomCards.length < cards.length) {
    const randNum = Math.floor(Math.random() * cards.length);

    if (!randomCards.includes(cards[randNum])) {
      randomCards.push(cards[randNum]);
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const origin = e.target as Element;
    const cardFrontBack = origin.parentNode?.parentNode?.parentNode?.parentNode as HTMLElement;

    return cardFrontBack?.classList.toggle('-active');
  };

  return (
    <>
      {randomCards.map((card) => (
        <CardFrontBackWrapper
          key={card.icon}
          onClick={(e) => handleClick(e)}
          className="card -locked"
        >
          <Front>
            <CardGame />
          </Front>

          <Back>
            <CardGame icon={card.icon} alt={card.altIcon} />
          </Back>
        </CardFrontBackWrapper>
      ))}
    </>
  );
};

export default CardFrontBack;
