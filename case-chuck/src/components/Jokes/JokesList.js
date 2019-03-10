import React from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";

import JokesListItem from "./JokesListItem";

import { jokeStyles } from "./styles";

const JokesList = props => {
  const { jokes, classes } = props;

  return (
    <ul className={classes.jokeList}>
      {jokes.map(joke => (
        <JokesListItem key={joke.id} joke={joke} />
      ))}
    </ul>
  );
};

JokesList.propTypes = {
  classes: PropTypes.object.isRequired,
  jokes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      joke: PropTypes.string,
      categories: PropTypes.array
    })
  ).isRequired
};
export default withStyles(jokeStyles)(JokesList);
