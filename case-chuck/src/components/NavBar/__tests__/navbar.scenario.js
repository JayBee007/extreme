import React from "react";

import Navbar from "../index";

export const name = "navbar";

export const component = () => (
  <React.Fragment>
    <Navbar>
      <Navbar.NavBarRight>Right Content</Navbar.NavBarRight>
    </Navbar>
  </React.Fragment>
);
