/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';

interface Props {
  icon?: string,
  alt?: string,
}

const Card = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 130px;
  height: 160px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.Background};
  border: 2px solid ${({ theme }) => theme.primary};
  padding: 8px;

  & > img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 8px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const CardGame: React.FC<Props> = ({ icon = 'bg', alt = 'card background' }) => (
  <section>
    <Card>
      <img src={`/images/${icon}.png`} alt={alt} />
    </Card>
  </section>
);

export default CardGame;
