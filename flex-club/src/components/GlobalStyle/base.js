import { css } from 'styled-components';

const base = css`
  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }
  html {
    font-size: 62.5%;
  }
  body {
    box-sizing: border-box;
  }
  html,
  body,
  #root {
    height: 100%;
  }
  p {
    margin: 0;
    padding: 0;
  }
`;

export default base;
