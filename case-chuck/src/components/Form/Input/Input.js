/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import PropTypes from "prop-types";
import withStyle from "react-jss";

import { input } from "./styles";

const Input = props => {
  const {
    type,
    placeholder,
    label,
    error,
    name,
    classes,
    changeHandler,
    value
  } = props;
  return (
    <div className={classes.inputContainer}>
      <label className={classes.inputLabel} htmlFor={name}>
        {label}
      </label>
      <input
        className={classes.input}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={changeHandler}
      />
      {error.length > 0 && <span className={classes.inputError}>{error}</span>}
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  placeholder: "Enter text",
  error: "Some Error",
  value: ""
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  changeHandler: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default withStyle(input)(Input);
