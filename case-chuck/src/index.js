import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import store, { sagaMiddleware } from "_store";
import sagas from "_store/sagas";
import ThemeProvider from "./theme/ThemeProvider";
import App from "./App";

sagaMiddleware.run(sagas);

const Index = () => (
  <Provider store={store}>
    <ThemeProvider>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(<Index />, document.getElementById("root"));
