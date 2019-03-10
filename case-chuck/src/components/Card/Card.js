import React from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";

import Text from "_components/Text";
import Icon, { Heart } from "_components/Icon";

import { cardStyles } from "./styles";

const Card = props => {
  const { action, joke, classes } = props;

  return (
    <div className={classes.card}>
      <Text>{joke.joke}</Text>
      <Icon clickHandler={action} className={classes.icon}>
        <Heart isFav={joke.isFav} />
      </Icon>
    </div>
  );
};

Card.defaultProps = {
  action: () => {}
};

Card.propTypes = {
  action: PropTypes.func,
  joke: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(cardStyles)(Card);
