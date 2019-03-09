/* eslint-disable react/button-has-type */
import React from "react";
import PropTypes from "prop-types";
import withStyle from "react-jss";

import { btn } from "./styles";

const Button = props => {
  const { children, classes, handleClick, type } = props;

  const clickHandler = () => {
    handleClick();
  };
  return (
    <button type={type} className={classes.btn} onClick={clickHandler}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  handleClick: () => {},
  color: "green"
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  handleClick: PropTypes.func,
  type: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  color: PropTypes.string
};

export default withStyle(btn)(Button);
