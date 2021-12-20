import React from 'react';
import styled from 'styled-components';
import Countdown from '../components/Countdown';
import { CountdownProvider } from '../components/Countdown/CountdownContext';
import BoardGame from '../objects/BoardGame';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
`;

const Home = () => (
  <HomeWrapper>
    <h1>Card-Memory-Game</h1>
    <BoardGame totalCards={2} />

    <CountdownProvider>
      <Countdown />
    </CountdownProvider>
  </HomeWrapper>
);

export default Home;
