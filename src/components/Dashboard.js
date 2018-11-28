import React, { Component } from 'react';
import Sidenav from './partials/Sidenav'
import Account from './Account'
import Progress from './Progress'
import MapUS from './MapUS'
import MapWorld from './MapWorld'
import ListAlphabetic from './ListAlphabetic'
import ListSortable from './ListSortable'
import Location from './Location'

// import { fetchCameras } from '../redux/actions/camerasActions'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

class Dashboard extends Component {

  render () {

    return (
      <div>
        <Sidenav />

        {/* //Change endpoint to /:userid (after Auth) */}
        <Route exact path="/dashboard/account" component={Account}/>
        <Route exact path="/dashboard/progress" component={Progress}/>
        <Route exact path="/dashboard/usmap" component={MapUS}/>
        <Route exact path="/dashboard/worldmap" component={MapWorld}/>
        <Route exact path="/dashboard/alphabeticlist" component={ListAlphabetic}/>
        <Route exact path="/dashboard/sortablelist" component={ListSortable}/>
        <Route path="/dashboard/locations/:id" component={Location}/>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // cameras: state.cameras,
    // cart: state.cart
  };
};

export default connect(mapStateToProps, { })(Dashboard)
