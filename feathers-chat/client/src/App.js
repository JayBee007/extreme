import React from 'react';

//  constants
import { LOGIN } from './constants';


import Login from './pages/Login';

const App = props => {

  const { route: { name }} = props;

  switch (name) {
    case LOGIN:
      return <Login {...props}/>
    default:
      break;
  }
  

}

export default App;
