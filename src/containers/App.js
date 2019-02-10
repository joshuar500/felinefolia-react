import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Elements, StripeProvider} from 'react-stripe-elements';

import Homepage from './Homepage';
import Subscribe from './Subscribe';
import Signup from './Signup';
import Login from './Login';
import Logout from './Logout';
import ResetPassword from './ResetPassword';
import Dashboard from './Dashboard';

import { navbarBurgerHelper } from '../helpers/navbar';

import '../styles/App.css';

class App extends Component {

  state = {
    stripe: null,
  }

  componentDidMount() {
    navbarBurgerHelper();

    this.setStripeKey();
  }

  setStripeKey = () => {
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

    const { state } = this;

    return (
      <Router>
        <div>
          <Route exact path ="/" component={Homepage} props={{...state}} />
          
          <StripeProvider stripe={state.stripe}>
            <Elements>
              <Route path ="/subscribe" component={Subscribe} props={{...state}} />
            </Elements>
          </StripeProvider>

          <Route path ="/signup" component={Signup} props={{...state}} />
          <Route path ="/login" component={Login} props={{...state}} />
          <Route path ="/logout" component={Logout} props={{...state}} />
          <Route path ="/resetpassword" component={ResetPassword} props={{...state}} />
          <Route path ="/dashboard" component={Dashboard} props={{...state}} />
        </div>
      </Router>
    );
  }
}

export default App;
