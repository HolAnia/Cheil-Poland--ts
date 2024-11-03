// src/styles/GlobalStyle.tsx

import { createGlobalStyle } from 'styled-components';
import SamsungOneRegular from './fonts/SamsungOne-400.ttf';
import SamsungOneBold from './fonts/SamsungOne-700.ttf';
import { Theme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SamsungOne';
    src: url(${SamsungOneRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'SamsungOne';
    src: url(${SamsungOneBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'SamsungOne', sans-serif; // Dodano fallback
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    font-size: ${({ theme }) => theme.fontSize.basic};
    color: ${({ theme }) => theme.colors.dark}; // Poprawiono na 'dark', jeśli jest zdefiniowane
  }
`;
