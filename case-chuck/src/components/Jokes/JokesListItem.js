import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Card from "_components/Card";

import { addFav, removeFav } from "_store/actions";

const JokesListItem = props => {
  const { joke, addJoketoFav, removeJokeFromFav } = props;

  const handleFavorite = () => {
    if (!joke.isFav) {
      addJoketoFav(joke);
    } else if (joke.isFav) {
      removeJokeFromFav(joke);
    }
  };
  return <Card action={handleFavorite} joke={joke} />;
};

JokesListItem.propTypes = {
  joke: PropTypes.shape({
    id: PropTypes.number,
    joke: PropTypes.string,
    categories: PropTypes.array
  }).isRequired,
  addJoketoFav: PropTypes.func.isRequired,
  removeJokeFromFav: PropTypes.func.isRequired
};

export default connect(
  null,
  { addJoketoFav: addFav, removeJokeFromFav: removeFav }
)(JokesListItem);
