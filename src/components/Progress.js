import React, { Component } from 'react';
import Sidenav from './partials/Sidenav'
import HorizontalProgressBar from './charts/Horizontal'
import PieContinent from './charts/PieContinent'
import { Container, Row, Col } from 'reactstrap'
import { Bar, Pie, HorizontalBar } from 'react-chartjs-2'

// import { fetchCameras } from '../redux/actions/camerasActions'
import { connect } from 'react-redux'

class Progress extends Component {

  render () {

    return (
      <Container style={{}}>
        <Row style={{justifyContent: 'center'}}>
          <HorizontalProgressBar />
        </Row>
        <Row style={{marginTop: '10px', justifyContent: 'center'}}>
          <PieContinent />
        </Row>
      </Container>
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
