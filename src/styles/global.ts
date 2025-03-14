import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.5;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  /* TV-optimized focus styles */
  *:focus {
    outline: none;
  }

  /* Large text for TV viewing distance */
  body {
    font-size: 16px;
    @media (min-width: 1920px) {
      font-size: 18px;
    }
  }

  /* Smooth transitions for focus changes */
  * {
    transition: transform 0.3s ease, border-color 0.3s ease;
  }
`;

export default GlobalStyle;