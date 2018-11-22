import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Elements, StripeProvider} from 'react-stripe-elements';

import Homepage from './Homepage';
import Subscribe from './Subscribe';
import Signup from './Signup';
import Login from './Login';
import ResetPassword from './ResetPassword';
import Dashboard from './Dashboard';

import { navbarBurgerHelper } from '../helpers/navbar';

import '../styles/App.css';

class App extends Component {

  state = {
    stripe: null
  }

  componentDidMount() {
    navbarBurgerHelper();

    if (window.Stripe) {
      this.setState({stripe: window.Stripe('pk_test_8T6wzkJRI6xoB0JgPS9amKS6')});
    } else {
      document.querySelector('#stripe-js').addEventListener('load', () => {
        // Create Stripe instance once Stripe.js loads
        this.setState({stripe: window.Stripe('pk_test_8T6wzkJRI6xoB0JgPS9amKS6')});
      });
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path ="/" component={Homepage} />
          
          <StripeProvider stripe={this.state.stripe}>
            <Elements>
              <Route path ="/subscribe" component={Subscribe} />
            </Elements>
          </StripeProvider>

          <Route path ="/signup" component={Signup} />
          <Route path ="/login" component={Login} />
          <Route path ="/resetpassword" component={ResetPassword} />
          <Route path ="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
