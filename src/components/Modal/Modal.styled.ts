import styled, { css, keyframes } from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transition: .3s;
  z-index: 100;
  justify-content: center;

  ${({ isOpen }: { isOpen: boolean }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}
`;

interface MotionProps {
  animate: boolean
}

export const open = keyframes`
  from {
    transform: translate3d(0, 100%,0);
  }

  to {
    transform: translate3d(0,0,0);
  }
`;

export const close = keyframes`
  from {
    transform: translate3d(0,0,0);
  }

  to {
    transform: translate3d(0, 100%,0);
  }
`;

export const Motion = styled.div<MotionProps>`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  animation: ${({ animate }) => (
    animate
      ? open
      : close
  )} 0.4s  ${({ theme }) => theme.animate};
`;

export const DialogWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  width: 400px;
  height: 300px;
  position: fixed;
  border-radius: 8px;
  padding: 32px;

  background-color: ${({ theme }) => theme.Background};
`;

export const Button = styled.button`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;
  top: 1.1rem;
  left: 1.1rem;
  font-weight: bold;
  padding: 0;
  margin: 0;

  border: none;
  border-radius: 50%;

  color: ${({ theme }) => theme.Red};
  background-color: ${({ theme }) => theme.Red};
  transition: color 200ms ease-in-out;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color};
  }
`;

export const DialogInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 1.18rem;
  text-justify: inter-word;

  & > div > span {
    color: ${({ theme }) => theme.Pink};
  }
`;
