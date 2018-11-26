import React, { Component } from 'react';
import Sidenav from './partials/Sidenav'
// import { fetchCameras } from '../redux/actions/camerasActions'
import { connect } from 'react-redux'

class MapUS extends Component {

  render () {

    return (
      <div className="flex">
        <Sidenav />

        {/* <Route path={`${match.path}/:id`} path="/dashboard/usmap/user/:id" component={usmap}/>
        <Route path="/worldmap" component={usmap}/>
        <Route path="/usmap" component={usmap}/>
        <Route path="/usmap" component={usmap}/>
        <Route path="/usmap" component={usmap}/> */}

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

export default connect(mapStateToProps, { })(MapUS)
