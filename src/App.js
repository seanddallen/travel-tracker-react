import React, { Component } from 'react';
import './css/index.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import { fetchLocations } from './redux/actions/locationsActions'
import { fetchBuckets } from './redux/actions/bucketsActions'
import { fetchPosts } from './redux/actions/postsActions'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount(){
    this.props.fetchLocations()
    this.props.fetchBuckets()
    this.props.fetchPosts()
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </BrowserRouter>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    locations: state.locations.locations,
  };
};

export default connect(mapStateToProps, { fetchLocations, fetchBuckets, fetchPosts })(App)
