import React from "react";
import PropTypes from "prop-types";

import Card from "_components/Card";

const JokesListItem = props => {
  const { joke } = props;

  const handleFavorite = () => {
    console.log("handleFavorite");
  };
  return <Card action={handleFavorite} text={joke.joke} />;
};

JokesListItem.propTypes = {
  joke: PropTypes.shape({
    id: PropTypes.number,
    joke: PropTypes.string,
    categories: PropTypes.array
  }).isRequired
};
export default JokesListItem;
