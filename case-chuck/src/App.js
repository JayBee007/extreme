import React from "react";
// import loadable from "@loadable/component";
import { hot } from "react-hot-loader/root";
import Button from "./components/Button";
// // const Component = loadable(() => import("./pages/Component"));
const App = () => {
  return (
    <div>
      <Button>Hello World!</Button>
    </div>
  );
};

export default hot(App);
