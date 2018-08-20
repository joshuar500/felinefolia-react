import React, { Component } from 'react';

import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
import { RegisterForm } from '../components/Forms';

import { preRegister } from '../api/users';

class Subscribe extends Component {

  state = {
    email: '',
    optional: '',
    hasBusiness: false
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
    console.log('A name was submitted: ', this.state);
    preRegister(this.state.email, this.state.optional).then(res => console.log(res))
    event.preventDefault();
  }

  render() {
    return (
      <div id="subscribe">
        <Navbar />
        <Hero />
        <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
          <p>While we're in the process of getting our very first shipment ready, we want to know what you hope to see in future shipments. If you'd like to see anything in particular in these shipments, let us know.</p>
          <p>When we're ready, we'll send you a password and login link to complete your information. We can't wait to show you what we're working on.</p>
          </div>
        </div>
        </div>
        <RegisterForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          email={this.state.email}
          optional={this.state.optional}
          hasBusiness={this.state.hasBusiness}
        />,
        <div className="container">
        {/* add a spacer */}
          &nbsp;
        </div>
        <Footer />
      </div>
    );
  }
}

export default Subscribe;
