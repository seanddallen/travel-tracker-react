import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';
import { Link, Route } from 'react-router-dom'
import { FaTrashAlt, FaCheckSquare } from 'react-icons/fa'
import { removeBucket, checkoffBucket } from '../redux/actions/bucketsActions'

// import { fetchCameras } from '../redux/actions/camerasActions'
import { connect } from 'react-redux'

class BucketCard extends Component {

  handleRemove = (e) => {
    e.preventDefault()
    console.log('props buckets', this.props.bucket)
    this.props.removeBucket(this.props.bucket)
  }

  handleComplete = (e) => {
    e.preventDefault()
    this.props.checkoffBucket(this.props.bucket)
  }

  render () {

    // console.log('props buckets', this.props.bucket)

    return (

      <Card style={{width: '100%', marginTop: '10px'}}>
        <div className="flex flex-between cart-item">
          <div>
            <CardTitle style={{ fontSize: '1.2vw', margin: '10px' }}>
              {this.props.bucket.is_complete ? <del>{this.props.bucket.bucket_name}</del> : `${this.props.bucket.bucket_name}` }
            </CardTitle>
          </div>
          <div className="flex flex-y-center mr-3">
            {this.props.bucket.is_complete ? null : <FaTrashAlt id="trash" onClick={this.handleRemove} /> }
            {this.props.bucket.is_complete ?
            <FaCheckSquare id="check" color="FAC10B" style={{fontSize: '1.7rem', marginLeft: '10px', cursor: 'pointer'}} onClick={this.handleComplete} /> :
            <FaCheckSquare id="check" style={{fontSize: '1.7rem', marginLeft: '10px', cursor: 'pointer'}} onClick={this.handleComplete} /> }

          </div>
        </div>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    buckets: state.buckets
  };
};

export default connect(mapStateToProps, { removeBucket, checkoffBucket })(BucketCard)
