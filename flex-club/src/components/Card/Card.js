/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable prettier/prettier */
import React from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

import CardContainer from './CardContainer';
import Text from './Text';
import CloudDrizzle from '../Icons/CloudDrizzle';

const Card = props => {
  const { theme } = props;

  return (
    <CardContainer>
      <Text>Tue</Text>
      <CloudDrizzle
        fill={theme.colors.primary}
        stroke="none"
        viewBox="28 30 50 50"
        style={{ marginBottom: '1.5rem' }}
      />
      <Text>27 &deg;C</Text>
      <Text>Extreme Rain</Text>
    </CardContainer>
  );
};
Card.propTypes = {
  theme: PropTypes.object.isRequired,
}

export default withTheme(Card);
