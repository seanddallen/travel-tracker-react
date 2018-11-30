import React, { Component } from 'react';
import Sidenav from './partials/Sidenav'
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';
import { Link } from 'react-router-dom'
import '../css/index.css';
// import { fetchCameras } from '../redux/actions/camerasActions'
import { connect } from 'react-redux'

class Account extends Component {

  render () {

    return (
      <div className="flex">

        <Form style={{ border: 'solid 1px rgba(0,0,0,0.4)', borderRadius: '6px', width: '40vw', padding: '40px', margin: '5vh 2vw 5vh 10vw', boxShadow: '0 4px 8px 4px rgba(0,0,0,0.4)' }}>
          <Label className="text-center mb-3" style={{ fontSize: '24px', fontWeight: 'bold'}} sm={12}>Account Details</Label>
          <FormGroup row>
            <Label sm={12}>Name: </Label>
          </FormGroup>
          <FormGroup row>
            <Label sm={12}>Email: </Label>
          </FormGroup>
          <FormGroup row>
            <Label sm={12}>States Completed: </Label>
          </FormGroup>
          <FormGroup row>
            <Label sm={12}>Countries Completed: </Label>
          </FormGroup>
          <FormGroup row>
            <Label sm={12}>Buckets Completed: </Label>
          </FormGroup>
        </Form>

        <Form style={{ border: 'solid 1px rgba(0,0,0,0.4)', borderRadius: '6px', width: '40vw', padding: '40px', margin: '5vh', boxShadow: '0 4px 8px 4px rgba(0,0,0,0.4)' }}>
          <Label className="text-center mb-3" style={{ fontSize: '24px', fontWeight: 'bold'}} sm={12}>Update Password</Label>
          <FormGroup row>
            <Label sm={4}>Current Password</Label>
            <Col sm={8}>
              <Input type="name" name="name" placeholder="User Name" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={4}>New Password</Label>
            <Col sm={8}>
              <Input type="email" name="email" placeholder="User Email" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={4}>Confirm Password</Label>
            <Col sm={8}>
              <Input type="password" name="password" placeholder="User Password" />
            </Col>
          </FormGroup>
          <div className="flex flex-x-center">
            <Button>Update</Button>
          </div>
        </Form>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // cameras: state.cameras,
    // cart: state.cart
  };
};

export default connect(mapStateToProps, { })(Account)
