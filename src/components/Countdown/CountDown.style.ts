import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color};

  & > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: ${({ theme }) => theme.primary};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 2rem;
    text-align: center;
    margin-top: 10px;
    pointer-events: none;
  }

  & > div span {
    flex: 1;
  }

  & > div span:first-child {
    border-right: 1px solid #f0f1f3;
  }

  & > div span:last-child {
    border-left: 1px solid #f0f1f3;
  }

  & > span {
    font-size: 2rem;
    margin: 0 0.25rem;
  }
`;

export const CountdownButton = styled.button`
  width: 150px;
  height: 2rem;

  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.color};

  font-size: 1.25rem;
  font-weight: 600;

  outline: 0;

  transition: transform 0.2s ${({ theme }) => theme.animate};

  &:not(:disabled):hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const CountdownButtonActive = styled.button`
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.color};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.color};
  }

  &:disabled {
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.color};
    cursor: not-allowed;
  }
`;

export const LevelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  height: 100%;
`;

export const LevelButton = styled(CountdownButton)`
  background-color: ${({ theme }) => theme.gray};

  &.-selected {
    background-color: ${({ theme }) => theme.secondary};
  }
`;
