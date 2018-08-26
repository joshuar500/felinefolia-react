import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Homepage from './Homepage';
import Subscribe from './Subscribe';
import Login from './Login';
import Dashboard from './Dashboard';

import { navbarBurgerHelper } from '../helpers/navbar';

import '../styles/App.css';

class App extends Component {

  componentDidMount() {
    navbarBurgerHelper();
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path ="/" component={Homepage} />
          <Route path ="/subscribe" component={Subscribe} />
          {/* <Route path ="/login" component={Login} /> */}
          <Route path ="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
