import { css } from 'styled-components';

const typography = css`
  body {
    font-family: 'Roboto', 'sans-serif';
    font-weight: 400;
    line-height: 1.7;
    color: ${props => props.theme.colors.secondary};
    font-variant-ligatures: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
`;

export default typography;
