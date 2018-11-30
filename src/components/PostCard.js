import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link, Route } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'
import { removeBucket, checkoffBucket } from '../redux/actions/bucketsActions'

// import { fetchCameras } from '../redux/actions/camerasActions'
import { connect } from 'react-redux'

class PostCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleViewPost = (e) => {
    e.preventDefault()
    console.log('props buckets', this.props.bucket)
    this.props.viewPost(this.props.post)
  }

  render () {

    // console.log('props posts', this.props.posts)

    return (

      <Card style={{width: '100%', marginTop: '10px'}}>
        <div className="flex flex-between cart-item">
          <div>
            <CardTitle style={{ fontSize: '1.2vw', margin: '10px' }}>
              <FaEye color="FAC10B" style={{fontSize: '1.7rem', margin: '0 10px', cursor: 'pointer' }} onClick={this.toggle} />
              {this.props.post.title}
            </CardTitle>
          </div>
          <div className="flex flex-y-center mr-3">
            {this.props.post.date.substring(0,10)}
          </div>
        </div>

        <div>
          {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>{this.props.post.title}</ModalHeader>
            <ModalBody>
              {this.props.post.content}
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggle}>Close</Button>
            </ModalFooter>
          </Modal>
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
