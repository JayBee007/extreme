import React from "react";
import PropTypes from "prop-types";

const Text = props => {
  const { children, style } = props;

  return <p style={{ ...style }}>{children}</p>;
};

Text.defaultProps = {
  style: {}
};

Text.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.object
};

export default Text;
