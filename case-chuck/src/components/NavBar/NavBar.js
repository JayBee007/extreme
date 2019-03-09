import React from "react";
import withStyles from "react-jss";
import PropTypes from "prop-types";

import NavBarRight from "./NavBarRight";

import { navBar } from "./styles";

const NavBar = props => {
  const { classes, children } = props;
  return (
    <div className={classes.nav}>
      <div className={classes.navContent}>{children}</div>
    </div>
  );
};

NavBar.NavBarRight = NavBarRight;

NavBar.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(navBar)(NavBar);
