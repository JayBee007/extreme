import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import StateProvider from 'providers/StateProvider';
import GlobalStyle from './components/GlobalStyle';
import App from './App';
import theme from './config/theme';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <StateProvider>
        <App />
        <GlobalStyle />
      </StateProvider>
    </React.Fragment>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
