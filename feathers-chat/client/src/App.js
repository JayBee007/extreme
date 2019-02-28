import React from 'react';
import { withRoute } from 'react-router5';
//  constants
import { AUTH, AUTHSIGNUP, AUTHLOGIN, CHAT } from './appConstants';


import Auth from './pages/Auth';
import Chat from './pages/Chat';

const App = props => {

  const { route: { name }} = props;
  switch (name) {
    case AUTH:
    case AUTHSIGNUP:
    case AUTHLOGIN:
      return <Auth {...props}/>
    case CHAT:
      return <Chat {...props}/>
    default:
      break;
  }
  

}

export default withRoute(App);
