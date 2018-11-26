import React, { Component } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {Route, Link, withRouter} from 'react-router-dom'
// import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { connect } from 'react-redux'

class Sidenav extends Component {

  render () {

    return (
      <SideNav
        onSelect={(selected) => {
            const to = '/' + selected;
            if (this.props.location.pathname !== to) {
                this.props.history.push(to);
            }
        }}
      >
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="dashboard/account">
              <NavItem eventKey="dashboard/account">
                <NavIcon>
                    <i className="fa fa-fw fa-user" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Account
                </NavText>
              </NavItem>

              <NavItem eventKey="dashboard/progress">
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
                  <NavItem eventKey="dashboard/views/usmap">
                      <NavText>
                          Map View (US)
                      </NavText>
                  </NavItem>
                  <NavItem eventKey="dashboard/views/worldmap">
                      <NavText>
                          Map View (World)
                      </NavText>
                  </NavItem>
                  <NavItem eventKey="dashboard/views/listAlphabetic">
                      <NavText>
                          Text View (Alphabetic)
                      </NavText>
                  </NavItem>
                  <NavItem eventKey="dashboard/views/ListSortable">
                      <NavText>
                          Text View (Sortable)
                      </NavText>
                  </NavItem>
              </NavItem>
              {/* <NavItem eventKey="log-in-out">
                  <NavIcon>
                      <i className="fa fa-sign-in" style={{ fontSize: '1.75em' }} />
                  </NavIcon>
                  <NavText>
                      Login/Logout
                  </NavText>
              </NavItem> */}
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

export default connect(mapStateToProps, { })(withRouter(Sidenav))