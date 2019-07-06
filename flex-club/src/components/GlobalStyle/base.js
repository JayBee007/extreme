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
`;

export default base;
