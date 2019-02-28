import React from 'react';

const AuthContext = React.createContext({
  auth: false,
  login: () => {},
  logout: () => {}
})



export default AuthContext;