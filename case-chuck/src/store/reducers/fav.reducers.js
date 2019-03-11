import { ADD_FAV, REMOVE_FAV } from "_store/constants";

const initialState = {
  fav: []
};

const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV: {
      const newFav =
        state.fav.length < 10
          ? [...state.fav, { ...action.joke, isFav: true }]
          : [...state.fav];
      return {
        ...state,
        fav: newFav
      };
    }
    case REMOVE_FAV:
      return {
        ...state,
        fav: state.fav.filter(item => item.id !== action.joke.id)
      };
    default:
      return state;
  }
};

export default favReducer;
