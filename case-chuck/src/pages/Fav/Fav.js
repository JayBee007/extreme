import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import JokesList from "_components/Jokes";

const Fav = props => {
  const { fav } = props;

  return <JokesList jokes={fav} />;
};

function mapStateToProps(state) {
  return {
    fav: state.fav.fav
  };
}

Fav.defaultProps = {
  fav: []
};
Fav.propTypes = {
  fav: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      joke: PropTypes.string,
      categories: PropTypes.array
    })
  )
};

export default connect(
  mapStateToProps,
  null
)(Fav);
