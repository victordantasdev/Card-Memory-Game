import React from 'react';
import BoardGame from '../objects/BoardGame';

const Home = () => (
  <>
    <h1>Card-Memory-Game</h1>
    <BoardGame totalCards={6} />
  </>
);

export default Home;
