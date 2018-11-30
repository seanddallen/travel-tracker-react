import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';
import { Link, Route } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'
import { removeBucket, checkoffBucket } from '../redux/actions/bucketsActions'

// import { fetchCameras } from '../redux/actions/camerasActions'
import { connect } from 'react-redux'

class PostCard extends Component {

  // handleRemove = (e) => {
  //   e.preventDefault()
  //   console.log('props buckets', this.props.bucket)
  //   this.props.removeBucket(this.props.bucket)
  // }

  render () {

    // console.log('props posts', this.props.posts)

    return (

      <Card style={{width: '100%', marginTop: '10px'}}>
        <div className="flex flex-between cart-item">
          <div>
            <CardTitle style={{ fontSize: '1.2vw', margin: '10px' }}>
              <FaEye id="check" color="FAC10B" style={{fontSize: '1.7rem', margin: '0 10px', cursor: 'pointer' }} onClick={this.handleComplete} />
              {this.props.post.title}
            </CardTitle>
          </div>
          <div className="flex flex-y-center mr-3">
            {this.props.post.date.substring(0,10)}
          </div>
        </div>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps, { })(PostCard)
