import {
  FETCH_TEN_JOKES,
  FETCH_SINGLE_JOKE,
  SUCCESS,
  REQUEST,
  RESET,
  ERROR,
  ADD_FAV,
  REMOVE_FAV
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
    case FETCH_TEN_JOKES + RESET:
      return {
        ...state,
        fetchRandom: {
          ...state.fetchRandom,
          data: []
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
    case FETCH_SINGLE_JOKE + RESET:
      return {
        ...state,
        fetchSingle: {
          ...state.fetchSingle,
          data: []
        }
      };
    case ADD_FAV: {
      return {
        ...state,
        fetchRandom: {
          ...state.fetchRandom,
          data: state.fetchRandom.data.map(item => {
            if (item.id === action.joke.id) {
              return {
                ...item,
                isFav: true
              };
            }
            return {
              ...item
            };
          })
        },
        fetchSingle: {
          ...state.fetchSingle,
          data: state.fetchSingle.data.map(item => {
            if (item.id === action.joke.id) {
              return {
                ...item,
                isFav: true
              };
            }
            return {
              ...item
            };
          })
        }
      };
    }
    case REMOVE_FAV: {
      return {
        ...state,
        fetchRandom: {
          ...state.fetchRandom,
          data: state.fetchRandom.data.map(item => {
            if (item.id === action.joke.id) {
              return {
                ...item,
                isFav: false
              };
            }
            return {
              ...item
            };
          })
        },
        fetchSingle: {
          ...state.fetchSingle,
          data: state.fetchSingle.data.map(item => {
            if (item.id === action.joke.id) {
              return {
                ...item,
                isFav: false
              };
            }
            return {
              ...item
            };
          })
        }
      };
    }
    default:
      return state;
  }
};

export default apiReducer;
