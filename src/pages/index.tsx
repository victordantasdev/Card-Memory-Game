import React from 'react';
import Countdown from '../components/Countdown';
import { CountdownProvider } from '../components/Countdown/CountdownContext';
import BoardGame from '../objects/BoardGame';

const Home = () => (
  <>
    <h1>Card-Memory-Game</h1>
    <BoardGame totalCards={2} />
    <CountdownProvider>
      <Countdown />
    </CountdownProvider>
  </>
);

export default Home;
