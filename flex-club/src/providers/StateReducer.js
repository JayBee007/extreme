import {
  SET_CURRENT_LOCATION,
  FIVE_DAY_ERROR,
  FIVE_DAY_REQUEST,
  FIVE_DAY_SUCCESS
} from './constants';

const stateReducer = (state, action) => {
  switch (action.type) {
    case FIVE_DAY_REQUEST:
      return {
        ...state,
        weatherData: {
          ...state.weatherData,
          data: {},
          isLoading: true,
          isError: false,
          isSuccess: false
        }
      };
    case FIVE_DAY_SUCCESS:
      return {
        ...state,
        weatherData: {
          ...state.weatherData,
          isLoading: false,
          isError: false,
          isSuccess: true,
          data: action.payload.data
        }
      };
    case FIVE_DAY_ERROR:
      return {
        ...state,
        weatherData: {
          ...state.weatherData,
          isLoading: false,
          isError: true,
          isSuccess: false,
          data: {}
        }
      };
    case SET_CURRENT_LOCATION:
      return {
        ...state,
        currentLocation: action.payload.location
      };
    default:
      return state;
  }
};

export default stateReducer;
