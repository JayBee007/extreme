import React from 'react';

//  constants
import { AUTH, AUTHSIGNUP, AUTHLOGIN } from './constants';


import Auth from './pages/Auth';

const App = props => {

  const { route: { name }} = props;

  switch (name) {
    case AUTH:
    case AUTHSIGNUP:
    case AUTHLOGIN:
      return <Auth {...props}/>
    default:
      break;
  }
  

}

export default App;
