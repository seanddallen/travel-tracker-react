import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, Container, ButtonGroup, Input, Form } from 'reactstrap';
import { Link, Route, Switch } from 'react-router-dom'
import { fetchLocation } from '../redux/actions/locationsActions'
import { addBucket } from '../redux/actions/bucketsActions'

import BucketCard from './BucketCard'


import { connect } from 'react-redux'

class BucketList extends Component {
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
      <div>
        <Row style={{ margin: '0px auto 20px auto', justifyContent: 'center' }}>
          <Form onSubmit={this.handleAddBucket}>
            <Row>
              <Input type="text" name="bucket" autoComplete="off" placeholder="Add Travel Bucket List" style={{ width: '400px', marginRight: '10px' }} onChange={e => this.setState({ newBucketListItem: e.target.value })} />
              <Button color="warning" type="submit"><b>+</b></Button>
            </Row>
          </Form>
        </Row>
        <Row>
          <Col style={{ margin: '0 auto' }}>
            <h3 className="text-center">Waiting</h3>

            <Card body outline color="secondary" className="mt-1" style={{ height: '90vh', overflow: 'hidden', boxShadow: '0 4px 8px 4px rgba(0,0,0,0.4)' }}>
              { listOfBuckets }
            </Card>
            {/* <Row style={{ }}>
              { listOfBuckets }
            </Row> */}
          </Col>
          <Col style={{ margin: '0 auto' }}>
            <h3 className="text-center">Completed</h3>
            <Card body outline color="secondary" className="mt-1" style={{ height: '90vh', overflow: 'hidden', boxShadow: '0 4px 8px 4px rgba(0,0,0,0.4)' }}>
              { listOfCompletedBuckets }
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    locations: state.locations.locations,
    buckets: state.buckets,
  };
};

export default connect(mapStateToProps, { fetchLocation, addBucket })(BucketList)
