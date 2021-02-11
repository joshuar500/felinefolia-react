import React, { Component } from 'react';

import { Hero } from '../components/Hero';
import { RegisterForm } from '../components/Forms';

import { register } from '../api/users';
import SiteContainer from './SiteContainer';

class Subscribe extends Component {
  state = {
    email: '',
    password: '',
    passwordConfirm: '',
    error: false,
    errorMsg: ''
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
    const { email, password } = this.state;
    register(email, password).then(res => {
      if (res) {
        if (res.status !== 200) {
          this.setState({ error: true, errorMsg: res.data.message });
        } else if (res) {
          this.props.history.push('subscribe');
        }
      }
    });
    event.preventDefault();
  };

  render() {
    return (
      <SiteContainer isLoggedIn={this.props.isLoggedIn}>
        <Hero
          title="Get plants and more delivered to your door!"
          subtitle="Sign up now to receive a 30% discount on your first delivery."
        />
        <div className="container">
          <div className="columns">
            {this.state.error && (
              <div className="column notification is-danger has-text-centered">
                Oh no! Something went wrong. <code> {this.state.errorMsg}</code> Please email us at{' '}
                <a href="mailto:hello@felinefolia.com">hello@felinefolia.com</a>
              </div>
            )}
          </div>
        </div>
        {!this.state.preRegistered && !this.state.error && (
          <RegisterForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            email={this.state.email}
            password={this.state.password}
            passwordConfirm={this.state.passwordConfirm}
          />
        )}
      </SiteContainer>
    );
  }
}

export default Subscribe;
