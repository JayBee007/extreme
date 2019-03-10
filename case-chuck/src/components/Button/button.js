/* eslint-disable react/button-has-type */
import React from "react";
import PropTypes from "prop-types";
import withStyle from "react-jss";
import cn from "classnames";

import { btn } from "./styles";

const Button = props => {
  const { children, classes, handleClick, type, className } = props;

  const clickHandler = () => {
    handleClick();
  };
  const btnClass = cn(classes.btn, className);
  return (
    <button type={type} className={btnClass} onClick={clickHandler}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  handleClick: () => {},
  color: "green",
  className: ""
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  handleClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  color: PropTypes.string
};

export default withStyle(btn)(Button);
