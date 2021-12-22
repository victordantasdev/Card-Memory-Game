import styled from 'styled-components';

export const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-left: 2px solid ${({ theme }) => theme.primary};
  height: 100%;
  padding: 16px;
`;

export const BestTime = styled.div`
  display: flex;
    flex-direction: row;
    align-items: center;
`;
