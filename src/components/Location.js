import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, Container, ButtonGroup, Input, Form } from 'reactstrap';
import { Link, Route, Switch } from 'react-router-dom'
import { fetchLocation } from '../redux/actions/locationsActions'
import { addBucket } from '../redux/actions/bucketsActions'

import BucketCard from './BucketCard'
import BucketList from './BucketList'
import Journal from './Journal'

import { connect } from 'react-redux'

class Location extends Component {
  state = {
    newBucketListItem: ''
  }

  handleAddBucket = (e)=>{
    e.preventDefault()
    this.props.addBucket({
      location_id: Number(this.props.match.params.id),
      bucket_name: this.state.newBucketListItem,
      "user_id": 1
    })
    this.setState({
      newBucketListItem: ''
    })
  }

  render () {

    let location = this.props.locations.find(location => location.id === +this.props.match.params.id)

    console.log('buckets', this.props.buckets)
    let listOfBuckets = this.props.buckets.filter(bucket => bucket.location_id === +this.props.match.params.id && !bucket.is_complete)
    .map(bucket => <BucketCard key={bucket.id} bucket={bucket} />)

    let listOfCompletedBuckets = this.props.buckets.filter(bucket => bucket.location_id === +this.props.match.params.id && bucket.is_complete)
    .map(bucket => <BucketCard key={bucket.id} bucket={bucket} />)

    return (
      <Container>
        <Row style={{ marginTop: '40px', marginBottom: '20px', justifyContent: 'center' }}>
          <h2>{location ? location.location_name : null}</h2>
        </Row>
        <Row style={{ marginTop: '0px', marginBottom: '40px', justifyContent: 'center' }} >
          <ButtonGroup size="lg">
            <Link to={`/dashboard/locations/${this.props.match.params.id}/bucketlist`}>
              <Button style={{ width: '200px', marginRight: '20px', borderRadius: '6px', color: '#FAC10B', backgroundColor: 'rgba(0,0,0,0.8)', boxShadow: '0 2px 4px 2px rgba(0,0,0,0.4)' }}>Bucket List</Button>
            </Link>
            <Link to={`/dashboard/locations/${this.props.match.params.id}/locationinfo`}>
              <Button style={{ width: '200px', marginRight: '20px', borderRadius: '6px', color: '#FAC10B', backgroundColor: 'rgba(0,0,0,0.8)', boxShadow: '0 2px 4px 2px rgba(0,0,0,0.4)' }}>Location Info</Button>
            </Link>
            <Link to={`/dashboard/locations/${this.props.match.params.id}/tripideas`}>
              <Button style={{ width: '200px', marginRight: '20px', borderRadius: '6px', color: '#FAC10B', backgroundColor: 'rgba(0,0,0,0.8)', boxShadow: '0 2px 4px 2px rgba(0,0,0,0.4)'  }}>Trip Ideas</Button>
            </Link>
            <Link to={`/dashboard/locations/${this.props.match.params.id}/pictures`}>
              <Button style={{ width: '200px', marginRight: '20px', borderRadius: '6px', color: '#FAC10B', backgroundColor: 'rgba(0,0,0,0.8)', boxShadow: '0 2px 4px 2px rgba(0,0,0,0.4)'  }}>Pictures</Button>
            </Link>
            <Link to={`/dashboard/locations/${this.props.match.params.id}/journal`}>
              <Button style={{ width: '200px', borderRadius: '6px', color: '#FAC10B', backgroundColor: 'rgba(0,0,0,0.8)', boxShadow: '0 2px 4px 2px rgba(0,0,0,0.4)' }}>Journal</Button>
            </Link>
          </ButtonGroup>
        </Row>

        <Switch>
          <Route exact path="/dashboard/locations/:id/bucketlist" component={BucketList}/>
          {/* <Route exact path="/location/:id/locationinfo" component={LocationInfo}/>
          <Route exact path="/location/:id/tripideas" component={TripIdeas}/>
          <Route exact path="/location/:id/pictures" component={Pictures}/> */}
          <Route exact path="/dashboard/locations/:id/journal" component={Journal}/>
        </Switch>

      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    locations: state.locations.locations,
    buckets: state.buckets,
  };
};

export default connect(mapStateToProps, { fetchLocation, addBucket })(Location)
