import React, { Component } from 'react';
import Sidenav from './partials/Sidenav'
// import { fetchCameras } from '../redux/actions/camerasActions'
import { connect } from 'react-redux'
import AmCharts from "@amcharts/amcharts3-react";

class MapUS extends Component {

  render () {

    return (
      <div className="flex">
        <div id="usmapdiv" style={{ width: '96vw', height: '92vh', marginLeft: '63px' }}></div>
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
