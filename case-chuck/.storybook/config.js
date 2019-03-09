import React from "react";
import { configure } from "@storybook/react";

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
