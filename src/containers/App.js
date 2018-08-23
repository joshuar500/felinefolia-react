import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Homepage from './Homepage';
import Subscribe from './Subscribe';

import { navbarBurgerHelper } from '../helpers/navbar';

import 'bulma/css/bulma.css'
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
        </div>
      </Router>
    );
  }
}

export default App;
