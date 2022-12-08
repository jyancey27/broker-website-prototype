import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
} from './NavbarElements';
import icon from './NavbarImage/AriaRealEstateImage.jpg';
  
const Navbar = () => {
  return (
    <>
    <img src={icon} style={{ justifyContent: 'left', position:'absolute', width: '135px', height: '125px'}} alt='Logo'></img>
      <Nav>
        <NavMenu>
          <NavLink to='/' activestyle="true">
            Home
          </NavLink>
          <NavLink to='/about' activestyle="true">
            About
          </NavLink>
          <NavLink to='/events' activestyle="true">
            Events
          </NavLink>
          <NavLink to='/houses' activestyle="true">
            Houses
          </NavLink>
          <NavLink to='/contactus' activestyle="true">
            Contact Us
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;