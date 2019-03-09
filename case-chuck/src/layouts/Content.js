import React from "react";
import PropTypes from "prop-types";
import withStyle from "react-jss";

import { content } from "./styles";

const Content = props => {
  const { children, classes } = props;
  return <div className={classes.content}>{children}</div>;
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyle(content)(Content);
