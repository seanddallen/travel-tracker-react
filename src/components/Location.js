import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Col, Container } from 'reactstrap';
// import { fetchCameras } from '../redux/actions/camerasActions'
import { connect } from 'react-redux'

class Location extends Component {

  render () {

    // console.log('props in LocationCard', this.props.country.location_name)

    return (
      <Container>
        <Col>
          <Card body outline color="secondary" className="mt-1" style={{ height: '10vh', overflow: 'hidden' }}>
            jkbsdcyiubdcybsuybcysdbcyuwbcyub
          </Card>
        </Col>
        <Col>
          <Card body outline color="secondary" className="mt-1" style={{ height: '10vh', overflow: 'hidden' }}>
            jkbsdcyiubdcybsuybcysdbcyuwbcyub
          </Card>
        </Col>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    countries: state.locations.countries,
    states: state.locations.states,
  };
};

export default connect(mapStateToProps, { })(Location)
