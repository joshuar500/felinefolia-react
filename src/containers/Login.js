import React, { Component } from 'react';

import { Hero } from '../components/Hero';
import { LoginForm } from '../components/Forms';

import { login } from '../api/users';
import SiteContainer from './SiteContainer';

class Login extends Component {
  state = {
    email: '',
    password: '',
    touched: {
      email: false,
      password: false
    },
    error: false,
    errorMsg: ''
  };

  validate = (email, password) => {
    // true means invalid, so our conditions got reversed
    return {
      email: email.length === 0,
      password: password.length === 0
    };
  };

  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    login(this.state.email, this.state.password)
      .then(res => {
        console.log('res', res);
        if (res.status !== 200) {
          this.setState({ error: true });
          this.setState({ errorMsg: res.data.Error });
        } else {
          this.setState({ loggedIn: true });
          this.props.history.push('dashboard');
        }
      })
      .catch(err => this.setState({ error: true }));
    event.preventDefault();
  };

  render() {
    const { email, password } = this.state;
    const errors = this.validate(email, password);
    const shouldMarkError = field => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    };
    const isEnabled = email.length > 0 && password.length > 0;

    return (
      <SiteContainer isLoggedIn={this.props.isLoggedIn}>
        <Hero title="Login to your account" subtitle="" />
        {!this.state.loggedIn && (
          <LoginForm
            errorMsg={this.state.errorMsg}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            email={this.state.email}
            password={this.state.password}
            hasBusiness={this.state.hasBusiness}
            isEnabled={isEnabled}
            shouldMarkError={shouldMarkError}
            handleBlur={this.handleBlur}
          />
        )}
      </SiteContainer>
    );
  }
}

export default Login;
