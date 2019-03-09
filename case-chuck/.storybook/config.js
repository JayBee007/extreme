import React from "react";
import { configure, addDecorator } from "@storybook/react";

import ThemeProvider from "../src/theme/ThemeProvider";

addDecorator(story => {
  return <ThemeProvider>{story()}</ThemeProvider>;
});

configure(() => require("./load-stories.js"), module);

/**
  Initial Setup
  import { configure } from "@storybook/react";

  function loadStories() {
    const req = require.context("./src/stories", true, /\.stories\.js$/);
    req.keys().forEach(filename => req(filename));
  }

  configure(loadStories, module);
 */
