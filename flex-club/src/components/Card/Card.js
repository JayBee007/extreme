/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable prettier/prettier */
import React from 'react';
import { withTheme } from 'styled-components';

import CloudDrizzle from 'components/Icons/CloudDrizzle';
import CardContainer from './CardContainer';
import Text from './Text';

const Card = props => {
  const { theme, day, temp, desc, onClick, id } = props;

  const handleClick = () => {
    onClick(id)
  }

  return (
    <CardContainer onClick={handleClick}>
      <Text>{day}</Text>
      <CloudDrizzle
        fill={theme.colors.primary}
        stroke="none"
        viewBox="28 30 50 50"
        style={{ marginBottom: '1.5rem' }}
      />
      <Text>{temp} &deg;C</Text>
      <Text smallText>{desc}</Text>
    </CardContainer>
  );
};


export default withTheme(Card);
