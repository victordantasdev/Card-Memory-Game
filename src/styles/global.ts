import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  ${normalize}

  body {
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;
