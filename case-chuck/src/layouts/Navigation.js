import React, { useState } from "react";
import { Transition, config, animated } from "react-spring";
import PropTypes from "prop-types";
import withStyle from "react-jss";

import Button from "_components/Button";
import NavBar from "_components/NavBar";
import Modal from "_components/Modal";
import { modal } from "./styles";

const Navigation = props => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const { classes } = props;
  return (
    <React.Fragment>
      <NavBar>
        <NavBar.NavBarRight>
          <Button handleClick={handleClick}>Login</Button>
        </NavBar.NavBarRight>
      </NavBar>
      <Transition
        native
        items={open}
        from={{ width: "0%" }}
        enter={{ width: "100%" }}
        leave={{ width: "0%" }}
        config={{ ...config.default }}
      >
        {isOpen =>
          isOpen &&
          (prop => (
            <Modal>
              <animated.div className={classes.modal} style={prop}>
                <div>fadfasdf</div>
              </animated.div>
            </Modal>
          ))
        }
      </Transition>
    </React.Fragment>
  );
};

Navigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyle(modal)(Navigation);
