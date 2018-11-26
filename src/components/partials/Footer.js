import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../../css/index.css';

const Footer = () => {
  return (
    <div id="footer">
      <Navbar color="light" light expand="md">
      <div className="ml-5">
        <NavbarBrand className="ml-5" href="/">&copy; TravTrack 2018</NavbarBrand>
      </div>
      </Navbar>
    </div>
  )
}

export default Footer;
