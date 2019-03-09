import React from "react";
import withStyles, { ThemeProvider } from "react-jss";

import theme from "./index";
import styles from "./reboot";

const CustomThemeProvider = props => <ThemeProvider theme={theme} {...props} />;

export default withStyles(styles)(CustomThemeProvider);
