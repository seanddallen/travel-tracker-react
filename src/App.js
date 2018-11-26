import React, { Component } from 'react';
import './css/index.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          {/* <Footer /> */}
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
