import React from 'react';
import Confetti from 'react-confetti';
import useWindowDimensions from '../hooks/useWindowDimensions';
// import { useWindowSize } from 'react-use-window-size';

export default () => {
  const { height, width } = useWindowDimensions();

  return (
    <Confetti width={width} height={height} />
  );
};
