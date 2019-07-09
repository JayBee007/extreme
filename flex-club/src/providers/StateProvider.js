import React, { useState } from 'react';

import StateContext from './StateContext';

const StateProvider = props => {
  const { children } = props;
  const [location, setLocation] = useState({});
  const [weatherData, setWeatherData] = useState({});
  return (
    <StateContext.Provider
      value={{
        setLocation,
        currentLocation: location,
        weatherData,
        setWeatherData
        // currentWeatherData: {}
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
