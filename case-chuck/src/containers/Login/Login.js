import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withStyle from "react-jss";
import Proptypes from "prop-types";

import { Form, Input } from "_components/Form";
import Button from "_components/Button";
import Icon from "_components/Icon";
import Close from "_assets/img/close.svg";

import {
  toggleLoginModal as toggle,
  login as loginAction
} from "_store/actions";
import validate from "./form-constraints";
import { loginStyles } from "./styles";

const Login = props => {
  const { classes, toggleLoginModal, login } = props;
  const submitHandler = e => {
    if (validate(formValues.password)) {
      login();
      toggleLoginModal();
    }
  };
  const [formValues, setFormValues] = useState({
    username: "",
    password: ""
  });
  const [error, setError] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === "password" && !validate(value) && value.length > 0) {
      setError("Password doesnt meet the requirements");
    } else {
      setError("");
    }
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
        error={error}
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
  toggleLoginModal: Proptypes.func.isRequired,
  login: Proptypes.func.isRequired
};

export default compose(
  connect(
    null,
    { toggleLoginModal: toggle, login: loginAction }
  ),
  withStyle(loginStyles)
)(Login);
