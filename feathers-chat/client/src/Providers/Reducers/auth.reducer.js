import { AUTH_LOGIN, AUTH_LOGOUT} from '../Constants/auth.constant';

const authReducer = (state, action) => {

  switch(action.type) {
    case AUTH_LOGIN:
        return true;
    case AUTH_LOGOUT:
      return false;
    default:
      return state;
  }

}

export default authReducer;