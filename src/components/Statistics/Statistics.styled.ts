import styled from 'styled-components';

export const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-left: 2px solid ${({ theme }) => theme.primary};
  height: 100%;
  padding: 16px;
`;

export const BestTime = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StatisticsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 180px;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 10px;
  margin: 8px;
  padding: 16px;
  pointer-events: none;

  h2 {
    margin-top: 0;
  }
`;
