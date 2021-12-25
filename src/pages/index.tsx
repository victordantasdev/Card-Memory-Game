import React from 'react';
import Countdown from '../components/Countdown';
import { CountdownProvider } from '../components/Countdown/CountdownContext';
import Modal from '../components/Modal';
import Statistics from '../components/Statistics';
import BoardGame from '../objects/BoardGame';
import { GameData, HomeWrapper } from '../styles/index.styled';

const Home = () => (
  <HomeWrapper>
    <h1>Card Memory Game</h1>

    <CountdownProvider>
      <Modal />
      <BoardGame />
      <GameData>
        <Countdown />
        <Statistics />
      </GameData>

    </CountdownProvider>
  </HomeWrapper>
);

export default Home;
