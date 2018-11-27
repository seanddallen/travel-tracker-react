import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../../css/index.css';

class Header extends Component {

  state = {
    isOpen: false
  };

  render () {
    return (
      <div id="navbar">
        <Navbar color="warning" light expand="md" style={{ height: '9vh' }}>
          <div className="ml-5">
            <NavbarBrand className="ml-5" href="/">TravTrack</NavbarBrand>
          </div>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto mr-5" navbar>
              <NavItem className="mr-5">
                <NavLink href="/components/">???</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header;
