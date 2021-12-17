import styled from 'styled-components';

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
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
  width: 100%;
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

  transition: background-color 0.2s;

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.title};
  }
`;

export const CountdownButtonActive = styled.button`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.color};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.color};
  }

  &:disabled {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.color};
    cursor: not-allowed;
  }
`;
