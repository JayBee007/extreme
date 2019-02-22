import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider, Route } from 'react-router5'

import createRouter from './Router/router';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./index.scss";

import App from './App';
import * as serviceWorker from './serviceWorker';


const router = createRouter()

router.start(() => {
    ReactDOM.render((
        <RouterProvider router={router}>
            <Route>{({ route }) => <App route={route} />}</Route>
        </RouterProvider>
    ), document.getElementById('root'))
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
