import { TOGGLE_LOGIN_MODAL } from "../constants";

const initialState = {
  loginModal: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOGIN_MODAL:
      return {
        ...state,
        loginModal: !state.loginModal
      };
    default:
      return state;
  }
};

export default appReducer;
