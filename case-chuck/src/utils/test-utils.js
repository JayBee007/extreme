/* eslint-disable import/prefer-default-export */
import React from "react";

import ThemeProvider from "../theme/ThemeProvider";

export const applyTheme = component => {
  return <ThemeProvider>{component}</ThemeProvider>;
};
