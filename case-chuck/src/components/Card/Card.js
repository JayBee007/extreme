import React from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";

import Text from "_components/Text";
import Icon, { Heart } from "_components/Icon";

import { cardStyles } from "./styles";

const Card = props => {
  const { action, text, classes } = props;

  return (
    <div className={classes.card}>
      <Text>{text}</Text>
      <Icon clickHandler={action} className={classes.icon}>
        <Heart />
      </Icon>
    </div>
  );
};

Card.defaultProps = {
  action: () => {}
};

Card.propTypes = {
  action: PropTypes.func,
  text: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(cardStyles)(Card);
