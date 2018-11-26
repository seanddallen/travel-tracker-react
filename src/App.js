import React, { Component } from 'react';
import './css/index.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/login" />
          <Route path="/dashboard" component={Dashboard} />
          {/* <Footer /> */}
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
