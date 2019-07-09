import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import base from './base';
import typography from './typography';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${base}
  ${typography}
`;

export default GlobalStyle;
