import React, { Component } from 'react';
import Sidenav from './partials/Sidenav'
import LocationCard from './LocationCard'
import { Card, Button, CardTitle, CardText, Row, Col, Form, FormGroup, Input } from 'reactstrap';
import { fetchLocations, fetchCountries, fetchStates} from '../redux/actions/locationsActions'
import { connect } from 'react-redux'

class ListAlphabetic extends Component {

  state = {
    search: ''
  }

  componentDidMount(){
    this.props.fetchLocations()
    this.props.fetchCountries()
    this.props.fetchStates()
  }

  handleSearchChange = (e)=>{
    this.setState({
      search: e.target.value
    })
  }

  render () {

    // console.log('list of all locations', this.props.locations)

    let search = this.state.search

    let listOfAfrica = this.props.locations.filter(location => location.continent === 'Africa' && location.location_name.toLowerCase().startsWith(search.toLowerCase())).map(country => <LocationCard key={country.id} country={country} />)
    let listOfAsia = this.props.locations.filter(location => location.continent === 'Asia' && location.location_name.toLowerCase().startsWith(search.toLowerCase())).map(country => <LocationCard key={country.id} country={country} />)
    let listOfEurope = this.props.locations.filter(location => location.continent === 'Europe' && location.location_name.toLowerCase().startsWith(search.toLowerCase())).map(country => <LocationCard key={country.id} country={country} />)
    let listOfOceania = this.props.locations.filter(location => location.continent === 'Oceania' && location.location_name.toLowerCase().startsWith(search.toLowerCase())).map(country => <LocationCard key={country.id} country={country} />)
    let listOfSouthAmerica = this.props.locations.filter(location => location.continent === 'South America' && location.location_name.toLowerCase().startsWith(search.toLowerCase())).map(country => <LocationCard key={country.id} country={country} />)
    let listOfNorthAmerica = this.props.locations.filter(location => location.continent === 'North America' && location.location_name.toLowerCase().startsWith(search.toLowerCase())).map(country => <LocationCard key={country.id} country={country} />)
    let listOfStates = this.props.locations.filter(location => location.continent === null && location.location_name.toLowerCase().startsWith(search.toLowerCase())).map(country => <LocationCard key={country.id} country={country} />)
    // let listOfCountries = this.props.countries.map(country => <LocationCard key={country.id} country={country} />)
    // let listOfStates = this.props.states.map(state => <LocationCard key={state.id} state={state} />)

    return (
      <div>
        <Row style={{ justifyContent: 'center', marginTop: '40px' }}>
          <Form>
            <FormGroup>
              <Input type="search" name="search" autoComplete="off" placeholder="Search for Country or State" style={{ width: '400px' }} onChange={this.handleSearchChange} />
            </FormGroup>
          </Form>
        </Row>

        <Row style={{ marginLeft: '70px', marginRight: '10px' }}>
          <Col  className="text-center mt-1">
            <h3 className="mt-3 mb-3">Africa</h3>
            { listOfAfrica }
          </Col>
          <Col  className="text-center mt-1">
            <h3 className="mt-3 mb-3">Asia</h3>
            { listOfAsia }
          </Col>
          <Col  className="text-center mt-1">
            <h3 className="mt-3 mb-3">Europe</h3>
            { listOfEurope }
          </Col>
          <Col  className="text-center mt-1">
            <h3 className="mt-3 mb-3">Oceania</h3>
            { listOfOceania }
          </Col>
          <Col  className="text-center mt-1">
            <h3 className="mt-3 mb-3">N. America</h3>
            { listOfNorthAmerica }
          </Col>
          <Col  className="text-center mt-1">
            <h3 className="mt-3 mb-3">S. America</h3>
            { listOfSouthAmerica }
          </Col>
          <Col  className="text-center mt-1">
            <h3 className="mt-3 mb-3">USA</h3>
            { listOfStates }
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    locations: state.locations.locations,
    // countries: state.locations.countries,
    // states: state.locations.states,
    // africa: state.locations.africa,
    // asia: state.locations.asia,
    // europe: state.locations.europe,
    // oceania: state.locations.oceania,
    // southamerica: state.locations.southamerica,
    // northamerica: state.locations.northamerica,

  };
};

export default connect(mapStateToProps, { fetchLocations, fetchStates, fetchCountries })(ListAlphabetic)
