import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withStyle from "react-jss";
import Proptypes from "prop-types";

import { Form, Input } from "_components/Form";
import Button from "_components/Button";
import Icon from "_components/Icon";
import Close from "_assets/img/close.svg";

import { toggleLoginModal as toggle } from "_store/actions";

import { login } from "./styles";

const Login = props => {
  const { classes, toggleLoginModal } = props;
  const submitHandler = e => {};
  const [formValues, setFormValues] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const { username, password } = formValues;
  return (
    <Form submitHandler={submitHandler}>
      <Icon className={classes.icon} clickHandler={toggleLoginModal}>
        <Close />
      </Icon>
      <Input
        label="Username"
        placeholder="Enter username..."
        name="username"
        value={username}
        changeHandler={handleChange}
      />
      <Input
        label="Password"
        placeholder="Enter your secret..."
        name="password"
        type="password"
        value={password}
        changeHandler={handleChange}
      />
      <Button color="darkGray" type="submit">
        Submit
      </Button>
    </Form>
  );
};

Login.propTypes = {
  classes: Proptypes.object.isRequired,
  toggleLoginModal: Proptypes.func.isRequired
};

export default compose(
  connect(
    null,
    { toggleLoginModal: toggle }
  ),
  withStyle(login)
)(Login);
