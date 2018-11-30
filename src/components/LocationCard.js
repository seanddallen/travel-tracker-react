import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';
import { Link, Route } from 'react-router-dom'
import { FaCheckSquare } from 'react-icons/fa'
import Location from './Location'
import { checkoffLocation, checkonLocation } from '../redux/actions/locationsActions'

// import { fetchCameras } from '../redux/actions/camerasActions'
import { connect } from 'react-redux'

class LocationCard extends Component {

  handleComplete = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.props.country.is_complete ? this.props.checkonLocation(this.props.country) : this.props.checkoffLocation(this.props.country)
  }

  render () {

    // console.log('props in LocationCard', this.props.country.location_name)

    let isComplete = this.props.country.is_complete
    let cardColor = isComplete ? 'lightgrey' : ''
    return (

      <Button body outline color="secondary" className="location-button mt-1" style={{ display: 'block', margin: '0 auto', width: '150px', height: '10vh', overflow: 'hidden', boxShadow: '0 4px 4px 4px rgba(0,0,0,0.2)', backgroundColor: `${cardColor}` }} onClick={this.handleComplete}>
        <CardTitle style={{ fontSize: '1vw' }}>
          <span onclick={e => e.stopPropagation()}><Link style={{textDecoration: 'none'}} to={"/dashboard/locations/" + this.props.country.id} >{this.props.country.location_name}</Link></span>
        </CardTitle>
      </Button>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    countries: state.locations.countries,
    states: state.locations.states,
    buckets: state.buckets
  };
};

export default connect(mapStateToProps, { checkoffLocation, checkonLocation })(LocationCard)
