/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import PropTypes from "prop-types";

const Input = props => {
  const { type, placeholder, label, error, name } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} />
      {error.length > 0 && <span>{error}</span>}
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  placeholder: "Enter text",
  error: ""
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  name: PropTypes.string.isRequired
};

export default Input;
