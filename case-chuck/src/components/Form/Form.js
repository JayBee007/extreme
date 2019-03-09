import React from "react";
import PropTypes from "prop-types";
import withStyle from "react-jss";

import { form } from "./styles";

const Form = props => {
  const { submitHandler, children, classes } = props;

  const handleSubmit = () => {
    submitHandler();
  };
  return (
    <div className={classes.formContainer}>
      <form className={classes.form} onSubmit={handleSubmit}>
        {children}
      </form>
    </div>
  );
};

Form.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyle(form)(Form);
