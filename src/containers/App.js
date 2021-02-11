import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Elements, StripeProvider } from 'react-stripe-elements';

import Homepage from './Homepage';
import Subscribe from './Subscribe/Subscribe';
import Signup from './Signup';
import Login from './Login';
import Logout from './Logout';
import ResetPassword from './ResetPassword';
import Dashboard from './Dashboard';

import { navbarBurgerHelper } from '../helpers/navbar';

import '../styles/App.css';
import AccountContextProvider, { AccountContext } from '../providers/AccountProvider';

class App extends Component {
  state = {
    stripe: null
  };

  componentDidMount() {
    navbarBurgerHelper();

    this.setStripeKey();
  }

  setStripeKey = () => {
    if (window.Stripe) {
      this.setState({ stripe: window.Stripe('pk_test_8T6wzkJRI6xoB0JgPS9amKS6') });
    } else {
      document.querySelector('#stripe-js').addEventListener('load', () => {
        // Create Stripe instance once Stripe.js loads
        this.setState({ stripe: window.Stripe('pk_test_8T6wzkJRI6xoB0JgPS9amKS6') });
      });
    }
  };

  render() {
    const { state } = this;

    return (
      <Router>
        <AccountContextProvider>
          <div>
            {/* Protected routes need access to account/authenticated context */}
            <AccountContext.Consumer>
              {context => {
                console.log('context', context);
                console.log('state', state);
                return (
                  <>
                    <Route
                      exact
                      path="/"
                      render={props => <Homepage {...props} {...state} {...context} />}
                    />
                    <Route
                      path="/signup"
                      render={props => <Signup {...props} {...state} {...context} />}
                    />
                    <Route
                      path="/login"
                      render={props => <Login {...props} {...state} {...context} />}
                    />
                    <Route
                      path="/logout"
                      render={props => <Logout {...props} {...state} {...context} />}
                    />
                    <Route
                      path="/resetpassword"
                      render={props => <ResetPassword {...props} {...state} {...context} />}
                    />
                    <StripeProvider stripe={state.stripe}>
                      <Elements>
                        <Route
                          path="/subscribe"
                          render={props => <Subscribe {...props} {...state} {...context} />}
                        />
                      </Elements>
                    </StripeProvider>
                    <Route
                      path="/dashboard"
                      render={props => <Dashboard {...props} {...state} {...context} />}
                    />
                  </>
                );
              }}
            </AccountContext.Consumer>
          </div>
        </AccountContextProvider>
      </Router>
    );
  }
}

export default App;
