import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider, Route } from 'react-router5'
import createRouter from 'router5'
import browserPlugin from 'router5-plugin-browser'

import App from './App';
import * as serviceWorker from './serviceWorker';
import routes from './Router/routes';

const router = createRouter(routes)

router.usePlugin(browserPlugin())


ReactDOM.render(
  <RouterProvider router={router}>
    <Route>{({ route }) => <App route={route} />}</Route>
  </RouterProvider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
