import React from "react";
import withStyle from "react-jss";
import PropTypes from "prop-types";

import { home } from "./styles";

const Home = props => {
  const { classes } = props;
  return <div className={classes.home} />;
};

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyle(home)(Home);
