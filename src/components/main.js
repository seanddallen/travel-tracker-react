import React, { Component } from 'react';
import CameraList from './CameraList'
import Cart from './Cart'
import { fetchCameras } from '../redux/actions/camerasActions'
import { connect } from 'react-redux'

class Main extends Component {

  render () {

    return (
      <div className="flex">
        <div id="main">
          <CameraList />
          {/* search={this.state.search} cameras={this.state.books} onClick={this.handleAddClick} */}
        </div>

        <div id="aside">
          <Cart />
          {/* cartItems={this.state.camerasInCart} onClick={this.handleRemoveClick} */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cameras: state.cameras,
    cart: state.cart
  };
};

export default connect(mapStateToProps, { fetchCameras })(Main)
