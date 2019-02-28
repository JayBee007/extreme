import React, { useReducer } from 'react';

import AuthContext from './Contexts/auth.context';
import authReducer from './Reducers/auth.reducer';
import { AUTH_LOGIN, AUTH_LOGOUT } from './Constants/auth.constant';

const AuthProvider = props => {

  const [authState, dispatch] = useReducer(authReducer, false,);

  const login = () => {
    dispatch({type: AUTH_LOGIN})
  }

  const logout = () => {
    dispatch({type: AUTH_LOGOUT})
  }


  return (
    <AuthContext.Provider
      value={{
        auth: authState,
        login,
        logout,
      }}
    >
      { props.children }
    </AuthContext.Provider>
  )
}

export default AuthProvider;