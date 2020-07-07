import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   *,
   *::before,
   *::after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
   }

   html {
      font-size: 62.5%;
      box-sizing: border-box;
   }

   body {
      line-height: 1.6;
      font-weight: 300;
      font-family: 'Lato', sans-serif;
      color: #777;
   }

`;
