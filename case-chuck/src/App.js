import React from "react";
import { Switch, Route } from "react-router-dom";
import loadable from "@loadable/component";
import { hot } from "react-hot-loader/root";

import userIsAuthenticated from "./HoC/userIsAuthenticated";
import userIsNotAuthenticated from "./HoC/userisNotAuthenticated";

import Layout from "./layouts/Layout";

const Home = loadable(() => import("./pages/Home"));
const Jokes = loadable(() => import("./pages/Jokes"));
const Fav = loadable(() => import("./pages/Fav"));
const App = props => (
  <Layout>
    <Layout.Content>
      <Switch>
        <Route exact path="/" component={userIsNotAuthenticated(Home)} />
        <Route exact path="/jokes" component={userIsAuthenticated(Jokes)} />
        <Route exact path="/fav" component={userIsAuthenticated(Fav)} />
      </Switch>
    </Layout.Content>
  </Layout>
);

export default hot(App);
