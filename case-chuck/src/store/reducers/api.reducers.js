import {
  FETCH_TEN_JOKES,
  FETCH_SINGLE_JOKE,
  SUCCESS,
  REQUEST,
  ERROR
} from "_store/constants";

const initialState = {
  fetchRandom: {
    data: [],
    success: false,
    request: false,
    error: false
  },
  fetchSingle: {
    data: [],
    success: false,
    request: false,
    error: false
  }
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEN_JOKES + REQUEST:
      return {
        ...state,
        fetchRandom: {
          ...state.fetchRandom,
          request: true,
          success: false,
          error: false
        }
      };
    case FETCH_TEN_JOKES + SUCCESS:
      return {
        ...state,
        fetchRandom: {
          ...state.fetchRandom,
          success: true,
          request: false,
          error: false,
          data: action.payload
        }
      };
    case FETCH_TEN_JOKES + ERROR:
      return {
        ...state,
        fetchRandom: {
          ...state.fetchRandom,
          request: false,
          success: false,
          error: true
        }
      };
    case FETCH_SINGLE_JOKE + REQUEST:
      return {
        ...state,
        fetchSingle: {
          ...state.fetchSingle,
          request: true,
          success: false,
          error: false
        }
      };
    case FETCH_SINGLE_JOKE + SUCCESS:
      return {
        ...state,
        fetchSingle: {
          ...state.fetchSingle,
          success: true,
          request: false,
          error: false,
          data: [...state.fetchSingle.data, action.payload]
        }
      };
    case FETCH_SINGLE_JOKE + ERROR:
      return {
        ...state,
        fetchSingle: {
          ...state.fetchSingle,
          request: false,
          success: false,
          error: true
        }
      };
    default:
      return state;
  }
};

export default apiReducer;
