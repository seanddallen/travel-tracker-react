import React, { Component } from 'react';
import Sidenav from './partials/Sidenav'
// import { fetchCameras } from '../redux/actions/camerasActions'
import { connect } from 'react-redux'

class Progress extends Component {

  render () {

    return (
      <div className="flex">
        <Sidenav />

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

export default connect(mapStateToProps, { })(Progress)
