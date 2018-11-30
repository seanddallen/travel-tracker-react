import React, { Component } from 'react';
import Sidenav from './partials/Sidenav'
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom'
import '../css/index.css';
// import { fetchCameras } from '../redux/actions/camerasActions'
import { connect } from 'react-redux'

class Login extends Component {

  render () {

    return (
      <div className="flex-col flex-y-center" style={{backgroundColor: 'rgba(0,0,0,.8)'}}>
        <Row>
          <Col sm={3} style={{justifyContent: 'center'}}>
            <img src={require("./heartplane-yellow.png")} style={{maxHeight: '50vh', margin: '0 0 0 160px'}}></img>
          </Col>
          <Col sm={4} style={{justifyContent: 'center'}}>
            <Form autocomplete="off" style={{ border: 'solid 1px rgba(0,0,0,0.4)', borderRadius: '3px', width: '30vw', padding: '40px', margin: '40px 100px 0 0', boxShadow: '0 2px 8px 2px rgba(0,0,0,0.6)' }}>
              <FormGroup row>
                <Col sm={12}>
                  <Input type="email" name="email" placeholder="User Email" style={{backgroundColor: 'rgba(0,0,0,.8)', border: '1px solid #FAC10B', color: '#FAC10B'}} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={12}>
                  <Input type="password" name="password" placeholder="User Password" style={{backgroundColor: 'rgba(0,0,0,.8)', border: '1px solid #FAC10B', color: '#FAC10B'}} />
                </Col>
              </FormGroup>
              <div className="flex flex-x-center">
                <Link to={'/dashboard/worldmap'}>
                  <Button style={{color: 'rgba(0,0,0,.8)', fontWeight: 'bold', backgroundColor: '#FAC10B'}}>Login</Button>
                </Link>
              </div>
            </Form>

            <Form style={{ border: 'solid 1px rgba(0,0,0,0.4)', borderRadius: '3px', width: '30vw', padding: '40px', marginTop: '5vh', marginLeft: '250px', boxShadow: '0 2px 8px 2px rgba(0,0,0,0.6)' }}>
              <FormGroup row>
                <Col sm={12}>
                  <Input type="name" name="name" placeholder="User Name" style={{backgroundColor: 'rgba(0,0,0,.8)', border: '1px solid #FAC10B', color: '#FAC10B'}} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={12}>
                  <Input type="email" name="email" placeholder="User Email" style={{backgroundColor: 'rgba(0,0,0,.8)', border: '1px solid #FAC10B', color: '#FAC10B'}} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={12}>
                  <Input type="password" name="password" placeholder="User Password" style={{backgroundColor: 'rgba(0,0,0,.8)', border: '1px solid #FAC10B', color: '#FAC10B'}} />
                </Col>
              </FormGroup>
              <div className="flex flex-x-center">
                <Button style={{color: 'rgba(0,0,0,.8)', fontWeight: 'bold', backgroundColor: '#FAC10B'}}>Register</Button>
              </div>
            </Form>
          </Col>
          <Col style={{justifyContent: 'center'}}>
            <img src={require("./heartplane-yellow.png")} style={{maxHeight: '80vh', margin: '400px 0 0 120px'}}></img>
          </Col>
        </Row>

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
