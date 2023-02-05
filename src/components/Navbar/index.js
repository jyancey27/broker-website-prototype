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
          <NavLink to='broker-website-prototype' activestyle="true">
            Home
          </NavLink>
          <NavLink to='broker-website-prototype/about' activestyle="true">
            About
          </NavLink>
          <NavLink to='broker-website-prototype/events' activestyle="true">
            Events
          </NavLink>
          <NavLink to='broker-website-prototype/houses' activestyle="true">
            Houses
          </NavLink>
          <NavLink to='broker-website-prototype/contactus' activestyle="true">
            Contact Us
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;