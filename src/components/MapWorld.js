import React, { Component } from 'react';
import Sidenav from './partials/Sidenav'
// import { fetchCameras } from '../redux/actions/camerasActions'
import { connect } from 'react-redux'
import AmCharts from "@amcharts/amcharts3-react";

class MapWorld extends Component {

  render () {

    return (
      <div className="flex">
        {/* <AmCharts.React style={{ width: "100%", height: "500px" }} options={config} /> */}
        <div id="mapdiv" style={{ width: '96vw', height: '92vh', marginLeft: '63px', marginRight: '-2px', marginTop: '-2px' }}></div>
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

export default connect(mapStateToProps)(MapWorld)
