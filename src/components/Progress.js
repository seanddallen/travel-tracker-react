import React, { Component } from 'react';
import Sidenav from './partials/Sidenav'
import { Container, Row, Col } from 'reactstrap'

// import { fetchCameras } from '../redux/actions/camerasActions'
import { connect } from 'react-redux'

class Progress extends Component {

  render () {

    return (
      <Container style={{}}>
        <Row style={{justifyContent: 'center'}}>
          TITLE
        </Row>
        <Row>
          <Col>country progress</Col>
          <Col>state progress</Col>
          <Col>bucket progress</Col>
        </Row>
        <Row>
          <Col>Africa Pie</Col>
          <Col>Asia Pie</Col>
          <Col>Europe Pie</Col>
          <Col>Oceania Pie</Col>
          <Col>N. America Pie</Col>
          <Col>S. America Pie</Col>
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
