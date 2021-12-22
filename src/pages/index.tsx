import React from 'react';
import styled from 'styled-components';
import Countdown from '../components/Countdown';
import { CountdownProvider } from '../components/Countdown/CountdownContext';
import Statistics from '../components/Statistics';
import BoardGame from '../objects/BoardGame';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
`;

const GameData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

const Home = () => (
  <HomeWrapper>
    <h1>Card-Memory-Game</h1>

    <CountdownProvider>
      <BoardGame />
      <GameData>
        <Countdown />
        <Statistics />
      </GameData>
    </CountdownProvider>
  </HomeWrapper>
);

export default Home;
