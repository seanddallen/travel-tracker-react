import React, { Component } from 'react';
import Sidenav from './partials/Sidenav'
import Account from './Account'
import Progress from './Progress'
import MapUS from './MapUS'
import MapWorld from './MapWorld'
import ListAlphabetic from './ListAlphabetic'
import ListSortable from './ListSortable'

// import { fetchCameras } from '../redux/actions/camerasActions'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

class Dashboard extends Component {

  render () {

    return (
      <div className="flex">
        <Sidenav />

        {/* //Change endpoint to /:userid (after Auth) */}
        <Route path="/dashboard/account" component={Account}/>
        <Route path="/dashboard/progress" component={Progress}/>
        <Route path="/dashboard/usmap" component={MapUS}/>
        <Route path="/dashboard/worldmap" component={MapWorld}/>
        <Route path="/dashboard/alphabeticlist" component={ListAlphabetic}/>
        <Route path="/dashboard/sortablelist" component={ListSortable}/>

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
