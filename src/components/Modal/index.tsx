import React, { useContext } from 'react';
import { CountdownConext } from '../Countdown/CountdownContext';
import {
  Button, DialogInfo, DialogWrapper, ModalWrapper, Motion,
} from './Modal.styled';

const Modal = () => {
  const {
    time,
    level,
    isModalOpen,
    toggleModal,
  } = useContext(CountdownConext);

  const numToTime = (t: number) => {
    const minutes = Math.floor(t / 60);
    const seconds = t % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    if (t <= 59) {
      return `${secondLeft}${secondRight} seconds`;
    }

    return `${minuteLeft}${minuteRight}min and ${secondLeft}${secondRight}s`;
    // return `${minuteLeft}${minuteRight}:${secondLeft}${secondRight} minutes`;
  };

  let timeToFinish = '';
  if (level === 'Easy') {
    timeToFinish = numToTime((5 * 60) - time);
  } else if (level === 'Medium') {
    timeToFinish = numToTime((3 * 60) - time);
  } else if (level === 'Hard') {
    timeToFinish = numToTime((2 * 60) - time);
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
            <h2>🎉 YAY! You Win! 🎉</h2>
            <div>
              You finished the game in
              <span>
                {' '}
                {timeToFinish}
                {' '}
              </span>
              on
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
