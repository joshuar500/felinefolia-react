import React, { Component } from 'react';

import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
import { ResetPasswordForm } from '../components/Forms';

class ResetPassword extends Component {

  state = {
    email: '',
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
      <div id="resetPassword">
        <Navbar />
        <Hero 
          title="Reset Password For Account"
          subtitle=""
        />
        {
          !this.state.loggedIn && !this.state.error &&
          <ResetPasswordForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            email={this.state.email}
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

export default ResetPassword;
