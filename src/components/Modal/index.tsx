import React, { useContext } from 'react';
import { CountdownConext } from '../Countdown/CountdownContext';
import {
  Button, DialogInfo, DialogWrapper, ModalWrapper, Motion,
} from './Modal.styled';

const Modal = () => {
  const {
    level,
    isModalOpen,
    bestTimeEasy,
    bestTimeMedium,
    bestTimeHard,
    toggleModal,
  } = useContext(CountdownConext);

  const numToTime = (t: number) => {
    const minutes = Math.floor(t / 60);
    const seconds = t % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return `${minuteLeft}${minuteRight}:${secondLeft}${secondRight}`;
  };

  let timeToFinish = '';

  if (level === 'Easy') {
    timeToFinish = numToTime((5 * 60) - bestTimeEasy);
  } else if (level === 'Medium') {
    timeToFinish = numToTime((3 * 60) - bestTimeMedium);
  } else if (level === 'Hard') {
    timeToFinish = numToTime((2 * 60) - bestTimeHard);
  }

  return (
    <ModalWrapper
      isOpen={isModalOpen}
      onClick={(e) => {
        const target = e.target as Element;
        const isSafeArea = target.closest('[data-modal-safe-area="true"]');

        if (!isSafeArea) {
          toggleModal();
        }
      }}
    >
      <Motion
        animate={isModalOpen}
      >
        <DialogWrapper data-modal-safe-area>
          <Button onClick={() => {
            new Audio('/sounds/click.mp3').play();
            toggleModal();
          }}
          >
            x
          </Button>
          <DialogInfo>
            <h2>YAY! You Won!</h2>
            <div>
              You finished the game in
              <span>
                {' '}
                {timeToFinish}
                {' '}
              </span>
              seconds on
              <span>
                {' '}
                {level}
                {' '}
              </span>
              mode!
            </div>
          </DialogInfo>
        </DialogWrapper>
      </Motion>
    </ModalWrapper>
  );
};

export default Modal;
