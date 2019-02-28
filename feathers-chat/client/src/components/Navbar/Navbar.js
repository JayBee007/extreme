import React from 'react';
import { Navbar as ShardsNavbar, NavbarBrand } from 'shards-react';

import Logo from '../Logo';

import './Navbar.scss';

const Navbar = () => {

  return (
    <ShardsNavbar 
      expand="md"
      className="custom-navbar"
    >
      <NavbarBrand className="custom-navbar__brand">
        <Logo />
      </NavbarBrand>
    </ShardsNavbar>
  )
}

export default Navbar;