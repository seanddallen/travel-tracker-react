import React, { Component } from 'react';
import Sidenav from './partials/Sidenav'
import LocationCard from './LocationCard'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { fetchCountries, fetchStates } from '../redux/actions/locationsActions'
import { connect } from 'react-redux'

class ListAlphabetic extends Component {

  state = {

  }

  componentDidMount(){
    this.props.fetchCountries()
    this.props.fetchStates()
  }

  render () {

    console.log(this.props.countries)

    let listOfCountries = this.props.countries.map(country => <LocationCard key={country.id} country={country} />)
    let listOfStates = this.props.states.map(state => <LocationCard key={state.id} state={state} />)

    return (
      <Row>

        <Col className="text-center">
          {/* { listOfCountries } */}
          Countries
        </Col>
        <Col className="text-center">
        {/* { listOfStates } */}
        States
        </Col>

      </Row>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    countries: state.locations.countries,
    states: state.locations.states,
  };
};

export default connect(mapStateToProps, { fetchStates, fetchCountries })(ListAlphabetic)
