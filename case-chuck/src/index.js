import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import createStore, { sagaMiddleware } from "_store";
import sagas from "_store/sagas";
import ThemeProvider from "./theme/ThemeProvider";
import App from "./App";

const { store, persistor } = createStore();
sagaMiddleware.run(sagas);

const Index = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

ReactDOM.render(<Index />, document.getElementById("root"));
