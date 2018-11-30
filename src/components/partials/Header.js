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
        <Navbar light expand="md" style={{ height: '60px', backgroundColor: 'coral' }}>
          <div className="ml-5">
            <NavbarBrand style={{fontFamily: '', fontSize: '1.5rem'}} href="/login">TravTrack</NavbarBrand>
          </div>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto mr-5" navbar>
              <NavItem className="mr-5">
                {/* <NavLink href="/"></NavLink> */}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header;
