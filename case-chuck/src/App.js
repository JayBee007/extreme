import React from "react";
import { Switch, Route } from "react-router-dom";
import loadable from "@loadable/component";
import { hot } from "react-hot-loader/root";

import Layout from "./layouts/Layout";

const Home = loadable(() => import("./pages/Home"));

const App = props => (
  <Layout>
    <Layout.Content>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
      </Switch>
    </Layout.Content>
  </Layout>
);

export default hot(App);
