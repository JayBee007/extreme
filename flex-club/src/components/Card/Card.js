/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable prettier/prettier */
import React from 'react';
import { withTheme } from 'styled-components';
import Loadable from 'react-loadable';

import CardContainer from './CardContainer';
import Text from './Text';

const Card = props => {
  const {
    theme,
    day,
    temp,
    desc,
    onClick,
    id,
    isSelected,
    main,
    isNight
  } = props;

  const handleClick = () => {
    onClick(id);
  };

  // TODO: how to unmount dynamically loaded components
  const LoadableIcon = Loadable({
    loader: () => import(`../Icons/${main}`),
    loading() {
      return <span />;
    }
  });

  return (
    <CardContainer onClick={handleClick} isSelected={isSelected}>
      <Text>{day}</Text>
      <LoadableIcon
        fill={isNight ? theme.colors.secondary : theme.colors.primary}
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
