import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 96px;
  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 16px;
    line-height: 1.65;
    background: ${props => props.theme.colors.page};
    color: ${props => props.theme.colors.text};
    cursor: default;
    min-width: 320px;
    overflow-x: hidden;
    text-rendering: geometricPrecision;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6, button {
    font-family: ${props => props.theme.fonts.title};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button, a {
    -webkit-tap-highlight-color: transparent;
  }

  a:focus-visible,
  button:focus-visible {
    outline: 2px solid ${props => props.theme.colors.accent};
    outline-offset: 4px;
  }

  ::selection {
    background: rgba(24, 207, 195, 0.24);
    color: ${props => props.theme.colors.text};
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

export default GlobalStyles;
