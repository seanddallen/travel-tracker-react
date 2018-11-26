import React, { Component } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import '../../node_modules/font-awesome/css/font-awesome.min.css';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { connect } from 'react-redux'

class Sidenav extends Component {

  render () {

    return (
      <SideNav
          onSelect={(selected) => {
              // Add your code here
          }}
      >
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="home">
              <NavItem eventKey="home">
                  <NavIcon>
                      <i className="fa fa-fw fa-user" style={{ fontSize: '1.75em' }} />
                  </NavIcon>
                  <NavText>
                      View Account
                  </NavText>
              </NavItem>
              <NavItem eventKey="progress">
                  <NavIcon>
                      <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                  </NavIcon>
                  <NavText>
                      Progress
                  </NavText>
              </NavItem>
              <NavItem eventKey="views">
                  <NavIcon>
                      <i className="fa fa-fw fa-map" style={{ fontSize: '1.75em' }} />
                  </NavIcon>
                  <NavText>
                      Views
                  </NavText>
                  <NavItem eventKey="views/usmap">
                      <NavText>
                          Map View (US)
                      </NavText>
                  </NavItem>
                  <NavItem eventKey="views/worldmap">
                      <NavText>
                          Map View (World)
                      </NavText>
                  </NavItem>
                  <NavItem eventKey="views/worldmap">
                      <NavText>
                          Text View (Alphabetic)
                      </NavText>
                  </NavItem>
                  <NavItem eventKey="views/worldmap">
                      <NavText>
                          Text View (Sortable)
                      </NavText>
                  </NavItem>
              </NavItem>
          </SideNav.Nav>
      </SideNav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // cameras: state.cameras,
    // cart: state.cart
  };
};

export default connect(mapStateToProps, { })(Sidenav)
