import React, { Component } from 'react';
import Sidenav from './partials/Sidenav'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
// import { fetchCameras } from '../redux/actions/camerasActions'
import { connect } from 'react-redux'

class ListAlphabetic extends Component {

  render () {

    return (
      <div className="flex">

        <div>
          <Card body outline color="secondary">
            <CardTitle>{this.props.country.name}</CardTitle>
            <Button>Enter</Button>
          </Card>
        </div>

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

export default connect(mapStateToProps, { })(ListAlphabetic)
