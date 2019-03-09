import React from "react";
import ReactDOM from "react-dom";

import ThemeProvider from "./theme/ThemeProvider";

import App from "./App";

const Index = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

ReactDOM.render(<Index />, document.getElementById("root"));
