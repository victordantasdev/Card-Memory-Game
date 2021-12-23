/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';

interface Props {
  icon?: string,
  alt?: string,
}

const Card = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 160px;
  border-radius: 8px;
  background-color: #051932;
  border: 2px solid ${({ theme }) => theme.primary};

  & > img {
    width: 100%;
    height: 100%;
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
