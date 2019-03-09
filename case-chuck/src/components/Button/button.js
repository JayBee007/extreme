import React from "react";
import PropTypes from "prop-types";
import withStyle from "react-jss";

import { btn } from "./styles";

const Button = props => {
  const { children, classes, handleClick } = props;

  const clickHandler = () => {
    handleClick();
  };
  return (
    <button type="button" className={classes.btn} onClick={clickHandler}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default withStyle(btn)(Button);
