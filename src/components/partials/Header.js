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
        <Navbar light expand="md" style={{ height: '60px', backgroundColor: 'rgba(0,0,0,0.9' }}>
          <div className="ml-5">
            <img src={require("./heartplane-yellow-icon.png")} style={{maxHeight: '6vh', paddingRight: '10px', marginBottom: '5px'}}></img>
            <NavbarBrand style={{fontFamily: '', fontSize: '1.5rem', color: '#FAC10B'}} href="/login">TravTrac</NavbarBrand>
          </div>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto mr-5" navbar>
              <NavItem className="mr-5, ml-2">
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
