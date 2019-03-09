import React from "react";
import withStyles from "react-jss";
import PropTypes from "prop-types";

import { icon } from "./styles";

const Icon = props => {
  const { clickHandler, classes, className, children } = props;

  return (
    <span
      className={`${classes.icon} ${className || ""}`}
      onClick={clickHandler}
      onKeyDown={clickHandler}
      role="button"
      tabIndex={0}
    >
      {children}
    </span>
  );
};

Icon.defaultProps = {
  clickHandler: () => {},
  className: ""
};

Icon.propTypes = {
  clickHandler: PropTypes.func,
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default withStyles(icon)(Icon);
