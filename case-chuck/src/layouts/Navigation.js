import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Transition, config, animated } from "react-spring";
import PropTypes from "prop-types";
import withStyle from "react-jss";

import Button from "_components/Button";
import NavBar from "_components/NavBar";
import Modal from "_components/Modal";
import Login from "_containers/Login";

import {
  toggleLoginModal as toggle,
  logout as logoutAction
} from "_store/actions";
import { modal } from "./styles";

const Navigation = props => {
  const { classes, loginModal, toggleLoginModal, isLogged, logout } = props;
  const handleClick = () => {
    if (!isLogged) {
      toggleLoginModal();
    } else if (isLogged) {
      logout();
    }
  };
  return (
    <React.Fragment>
      <NavBar>
        <NavBar.NavBarRight>
          <Button type="button" handleClick={handleClick}>
            {isLogged ? "Signout" : "Login"}
          </Button>
        </NavBar.NavBarRight>
      </NavBar>
      <Transition
        native
        items={loginModal}
        from={{ width: "0%" }}
        enter={{ width: "100%" }}
        leave={{ width: "0%", marginLeft: "-500px" }}
        config={{ ...config.default }}
      >
        {isOpen =>
          isOpen &&
          (prop => (
            <Modal>
              <animated.div className={classes.modal} style={prop}>
                <Login />
              </animated.div>
            </Modal>
          ))
        }
      </Transition>
    </React.Fragment>
  );
};

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
  loginModal: PropTypes.bool.isRequired,
  toggleLoginModal: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    loginModal: state.app.loginModal,
    isLogged: state.auth.isLogged
  };
}

export default compose(
  connect(
    mapStateToProps,
    { toggleLoginModal: toggle, logout: logoutAction }
  ),
  withStyle(modal)
)(Navigation);
