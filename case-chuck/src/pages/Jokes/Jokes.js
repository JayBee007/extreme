import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import withStyles from "react-jss";
import PropTypes from "prop-types";

import Button from "_components/Button";

import { fetchTenJokes as fetchTen } from "_store/actions";

import { jokes } from "./styles";

const Jokes = props => {
  const { classes, fetchTenJokes } = props;
  const handleClick = () => {
    fetchTenJokes();
  };
  return (
    <div className={classes.jokes}>
      <Button
        color="purple"
        className={classes.fetchBtn}
        handleClick={handleClick}
      >
        Fetch Jokes
      </Button>
    </div>
  );
};

Jokes.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchTenJokes: PropTypes.func.isRequired
};

export default compose(
  connect(
    null,
    { fetchTenJokes: fetchTen }
  ),
  withStyles(jokes)
)(Jokes);
