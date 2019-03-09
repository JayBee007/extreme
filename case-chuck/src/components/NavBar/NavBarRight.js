import React from "react";
import withStyles from "react-jss";
import PropTypes from "prop-types";

import { navBarRight } from "./styles";

const NavBarRight = props => {
  const { classes, children } = props;
  return <div className={classes.navBarRight}>{children}</div>;
};

NavBarRight.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};
export default withStyles(navBarRight)(NavBarRight);
