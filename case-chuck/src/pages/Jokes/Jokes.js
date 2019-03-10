import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import withStyles from "react-jss";
import PropTypes from "prop-types";

import Button from "_components/Button";
import JokesList from "_components/Jokes";

import {
  fetchSingleJoke as fetchOne,
  fetchTenJokes as fetchTen
} from "_store/actions";

import { jokesStyles } from "./styles";

const Jokes = props => {
  const {
    classes,
    fetchTenJokes,
    fetchSingleJoke,
    randomTen,
    randomOne
  } = props;
  const fetchRandomTen = () => {
    fetchTenJokes();
  };
  const fetchRandomOne = () => {
    fetchSingleJoke();
  };
  const jokes = randomTen.data.concat(randomOne.data);
  return (
    <div className={classes.jokes}>
      <div className={classes.btnGroup}>
        <Button
          className={classes.fetchBtn}
          color="purple"
          handleClick={fetchRandomTen}
        >
          Fetch Jokes
        </Button>
        <Button color="darkGray" handleClick={fetchRandomOne}>
          Fetch A Joke / 5 secs
        </Button>
      </div>
      <JokesList jokes={jokes} />
    </div>
  );
};

Jokes.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchTenJokes: PropTypes.func.isRequired,
  fetchSingleJoke: PropTypes.func.isRequired,
  randomTen: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.object),
    success: PropTypes.bool,
    error: PropTypes.bool,
    request: PropTypes.bool
  }).isRequired,
  randomOne: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.object),
    success: PropTypes.bool,
    error: PropTypes.bool,
    request: PropTypes.bool
  }).isRequired
};

function mapStateToProps(state) {
  return {
    randomTen: state.jokes.fetchRandom,
    randomOne: state.jokes.fetchSingle
  };
}

export default compose(
  connect(
    mapStateToProps,
    { fetchTenJokes: fetchTen, fetchSingleJoke: fetchOne }
  ),
  withStyles(jokesStyles)
)(Jokes);
