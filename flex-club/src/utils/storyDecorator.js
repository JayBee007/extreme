/* eslint-disable import/prefer-default-export */
import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../components/GlobalStyle';

import theme from '../config/theme';

const withGlobal = storyFn => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        {storyFn()}
        <GlobalStyle />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default withGlobal;
