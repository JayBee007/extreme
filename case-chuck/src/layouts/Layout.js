import React from "react";
import withStyle from "react-jss";
import PropTypes from "prop-types";

import Navigation from "./Navigation";
import Content from "./Content";

import { layout } from "./styles";

const Layout = props => {
  const { children, classes } = props;
  return (
    <div className={classes.layout}>
      <Navigation />
      {children}
    </div>
  );
};

Layout.Content = Content;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyle(layout)(Layout);
