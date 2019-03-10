import { LOGIN, LOGOUT } from "../constants";

const initialState = {
  isLogged: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        isLogged: true
      };
    case LOGOUT:
      return {
        isLogged: false
      };
    default:
      return state;
  }
};

export default authReducer;
