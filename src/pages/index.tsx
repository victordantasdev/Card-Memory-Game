import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Home = () => (
  <Container>
    <h1>Card-Memory-Game</h1>
  </Container>
);

export default Home;
