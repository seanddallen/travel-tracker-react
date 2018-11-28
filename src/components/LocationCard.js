import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';
import { Link, Route } from 'react-router-dom'
import Location from './Location'

// import { fetchCameras } from '../redux/actions/camerasActions'
import { connect } from 'react-redux'

class LocationCard extends Component {

  render () {

    // console.log('props in LocationCard', this.props.country.location_name)

    return (
      <Card body outline color="secondary" className="mt-1" style={{ height: '10vh', overflow: 'hidden' }}>
        <CardTitle style={{ fontSize: '1vw' }}>
          <Link to={"/dashboard/locations/" + this.props.country.id}>{this.props.country.location_name}</Link>
          <img src=""></img>
        </CardTitle>
        {/* <Col>
          <Button style={{ width: '20%' }}>Enter</Button>
        </Col> */}
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    countries: state.locations.countries,
    states: state.locations.states,
  };
};

export default connect(mapStateToProps, { })(LocationCard)
