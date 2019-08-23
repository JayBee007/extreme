import React, { useState } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './screens/Home';
import Game from './screens/Game';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Game: {
    screen: Game,
  },
});

export default createAppContainer(AppNavigator);
