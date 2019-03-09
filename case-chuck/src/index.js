import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import ThemeProvider from "./theme/ThemeProvider";

import App from "./App";

const Index = () => (
  <ThemeProvider>
    <Router>
      <App />
    </Router>
  </ThemeProvider>
);

ReactDOM.render(<Index />, document.getElementById("root"));
