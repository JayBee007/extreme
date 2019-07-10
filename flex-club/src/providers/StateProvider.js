import React, { useReducer } from 'react';

import {
  SET_CURRENT_LOCATION,
  FIVE_DAY_SUCCESS,
  FIVE_DAY_REQUEST,
  FIVE_DAY_ERROR,
  SELECT_WEATHER_DAY
} from './constants';

import StateContext from './StateContext';

import stateReducer from './StateReducer';
import initialData from './initialData';

const StateProvider = props => {
  const { children } = props;

  const [state, dispatch] = useReducer(stateReducer, initialData);

  const { weatherData, currentLocation, selectedCardId } = state;

  const setCurrentLocation = location => {
    dispatch({
      type: SET_CURRENT_LOCATION,
      payload: {
        location
      }
    });
  };

  const initWeatherDataReq = () => {
    dispatch({ type: FIVE_DAY_REQUEST });
  };

  const setWeatherError = () => {
    dispatch({ type: FIVE_DAY_ERROR });
  };

  const setWeatherData = data => {
    dispatch({
      type: FIVE_DAY_SUCCESS,
      payload: {
        data
      }
    });
  };

  const selectWeatherDay = (id = 0) => {
    dispatch({
      type: SELECT_WEATHER_DAY,
      payload: {
        id
      }
    });
  };

  return (
    <StateContext.Provider
      value={{
        initWeatherDataReq,
        setWeatherError,
        setWeatherData,
        setCurrentLocation,
        selectWeatherDay,
        currentLocation,
        weatherData,
        selectedCardId
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
