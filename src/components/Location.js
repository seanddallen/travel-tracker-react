import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, Container, ButtonGroup, Input, Form } from 'reactstrap';
import { fetchLocation } from '../redux/actions/locationsActions'
import { addBucket } from '../redux/actions/bucketsActions'

import BucketCard from './BucketCard'
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
    let listOfBuckets = this.props.buckets.map(bucket => <BucketCard key={bucket.id} bucket={bucket} />)


    return (
      <Container>
        <Row style={{ marginTop: '40px', marginBottom: '20px', justifyContent: 'center' }}>
          <h2>{location ? location.location_name : null}</h2>
        </Row>
        <Row style={{ marginTop: '0px', marginBottom: '40px', justifyContent: 'center' }} >
          <ButtonGroup size="lg">
            <Button style={{ width: '200px', marginRight: '20px', borderRadius: '6px' }}>Bucket List</Button>
            <Button style={{ width: '200px', marginRight: '20px', borderRadius: '6px' }}>Location Info</Button>
            <Button style={{ width: '200px', marginRight: '20px', borderRadius: '6px'  }}>Trip Ideas</Button>
            <Button style={{ width: '200px', marginRight: '20px', borderRadius: '6px'  }}>Pictures</Button>
            <Button style={{ width: '200px', borderRadius: '6px' }}>Journal</Button>
          </ButtonGroup>
        </Row>
        <Row style={{ margin: '0px auto 20px auto', justifyContent: 'center' }}>
          <Form onSubmit={this.handleAddBucket}>
            <Row>
              <Input type="text" name="bucket" autoComplete="off" placeholder="Add Travel Bucket List" style={{ width: '400px', marginRight: '10px' }} onChange={e => this.setState({ newBucketListItem: e.target.value })} />
              <Button type="submit"><b>+</b></Button>
            </Row>
          </Form>
        </Row>
        <Row>
          <Col style={{ margin: '0 auto' }}>
            <h3 className="text-center">Waiting</h3>
            <Row style={{ }}>
              { listOfBuckets }
            </Row>
          </Col>
          <Col style={{ margin: '0 auto' }}>
            <h3 className="text-center">Completed</h3>
            <Card body outline color="secondary" className="mt-1" style={{ height: '90vh', overflow: 'hidden' }}>
              {/* { listOfCompletedBuckets } */}
            </Card>
          </Col>
        </Row>
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
