import React, { Component } from 'react';
import Sidenav from './partials/Sidenav'
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';
import { Link } from 'react-router-dom'
import '../css/index.css';
// import { fetchCameras } from '../redux/actions/camerasActions'
import { connect } from 'react-redux'

class Login extends Component {

  render () {

    return (
      <div className="flex-col flex-y-center">

        <Form style={{ border: 'solid 1px rgba(0,0,0,0.4)', borderRadius: '3px', width: '40vw', padding: '40px', marginTop: '5vh', boxShadow: '0 2px 8px 2px rgba(0,0,0,0.6)' }}>
          <FormGroup row>
            <Label sm={2}>Email</Label>
            <Col sm={10}>
              <Input type="email" name="email" placeholder="User Email" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Password</Label>
            <Col sm={10}>
              <Input type="password" name="password" placeholder="User Password" />
            </Col>
          </FormGroup>
          <div className="flex flex-x-center">
            <Link to={'/dashboard/worldmap'}>
              <Button>Login</Button>
            </Link>
          </div>
        </Form>

        <Form style={{ border: 'solid 1px rgba(0,0,0,0.4)', borderRadius: '3px', width: '40vw', padding: '40px', marginTop: '5vh', boxShadow: '0 2px 8px 2px rgba(0,0,0,0.6)' }}>
          <FormGroup row>
            <Label sm={2}>Name</Label>
            <Col sm={10}>
              <Input type="name" name="name" placeholder="User Name" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Email</Label>
            <Col sm={10}>
              <Input type="email" name="email" placeholder="User Email" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Password</Label>
            <Col sm={10}>
              <Input type="password" name="password" placeholder="User Password" />
            </Col>
          </FormGroup>
          <div className="flex flex-x-center">
            <Button>Register</Button>
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

export default connect(mapStateToProps, { })(Login)
