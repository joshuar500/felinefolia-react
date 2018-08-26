import React, { Component } from 'react';

import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
import { LoginForm } from '../components/Forms';

class Login extends Component {

  state = {
    email: '',
    password: '',
    error: false,
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div id="login">
        <Navbar />
        <Hero 
          title="Login to your account"
          subtitle=""
        />
        {
          !this.state.preRegistered && !this.state.error &&
          <LoginForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            email={this.state.email}
            optional={this.state.optional}
            hasBusiness={this.state.hasBusiness}
          />
        }
        <div className="container">
        {/* add a spacer */}
          &nbsp;
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;
