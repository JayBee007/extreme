import React, { useState } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './screens/Home';
import Game from './screens/Game';
import GameOver from './screens/GameOver';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Game: {
    screen: Game,
  },
  GameOver: {
    screen: GameOver,
  },
});

export default createAppContainer(AppNavigator);
