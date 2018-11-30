import React, { Component } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {Route, Link, withRouter} from 'react-router-dom'
// import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { connect } from 'react-redux'

class Sidenav extends Component {

  render () {

    return (
      <SideNav style={{ backgroundColor: 'darkgrey', marginTop: '60px'}}

        onSelect={(selected) => {
            const to = '/' + selected;
            if (this.props.location.pathname !== to) {
                this.props.history.push(to);
            }
        }}
      >
          <SideNav.Toggle style={{color: 'rgba(0,0,0,0.8)'}} />
          <SideNav.Nav defaultSelected="/account">
              <NavItem eventKey="dashboard/account">
                <NavIcon>
                    <i className="fa fa-fw fa-user" style={{ fontSize: '1.75em', color: 'rgba(0,0,0,0.8)' }} />
                </NavIcon>
                <NavText style={{color: 'rgba(0,0,0,0.6)', fontSize: '1.2rem', fontWeight: 'bold'}}>
                    Account
                </NavText>
              </NavItem>
              <NavItem eventKey="dashboard/progress">
                  <NavIcon>
                      <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em', color: 'rgba(0,0,0,0.8)' }} />
                  </NavIcon>
                  <NavText style={{color: 'rgba(0,0,0,0.6)', fontSize: '1.2rem', fontWeight: 'bold'}}>
                      Progress
                  </NavText>
              </NavItem>
              <NavItem eventKey="views">
                  <NavIcon>
                      <i className="fa fa-fw fa-map" style={{ fontSize: '1.75em', color: 'rgba(0,0,0,0.8)' }} />
                  </NavIcon>
                  <NavText style={{color: 'rgba(0,0,0,0.6)', fontSize: '1.2rem', fontWeight: 'bold'}}>
                      Views
                  </NavText>
                  <NavItem eventKey="dashboard/usmap">
                      <NavText style={{color: 'rgba(0,0,0,0.6)', fontSize: '.9rem', fontWeight: 'bold'}}>
                          Map View (US)
                      </NavText>
                  </NavItem>
                  <NavItem eventKey="dashboard/worldmap">
                      <NavText style={{color: 'rgba(0,0,0,0.6)', fontSize: '.9rem', fontWeight: 'bold'}}>
                          Map View (World)
                      </NavText>
                  </NavItem>
                  <NavItem eventKey="dashboard/alphabeticlist">
                      <NavText style={{color: 'rgba(0,0,0,0.6)', fontSize: '.9rem', fontWeight: 'bold'}}>
                          List View (Alphabetic)
                      </NavText>
                  </NavItem>
                  {/* <NavItem eventKey="dashboard/sortablelist">
                      <NavText>
                          Text View (Sortable)
                      </NavText>
                  </NavItem> */}
              </NavItem>
              <NavItem eventKey="login">
                <NavIcon>
                    <i className="fa fa-fw fa-sign-out" style={{ fontSize: '1.75em', color: 'rgba(0,0,0,0.8)' }} />
                </NavIcon>
                <NavText style={{color: 'rgba(0,0,0,0.6)', fontSize: '1.2rem', fontWeight: 'bold'}}>
                    Logout
                </NavText>
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
