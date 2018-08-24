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
    hasBusiness: false,
    preRegistered: false,
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
    preRegister(this.state.email, this.state.optional)
      .then(res => {
        console.log('res', res);
        if (res.status !== 200) {
          this.setState({ error: true });
        } else {
          this.setState({ preRegistered: true });
        }
      })
      .catch(err => this.setState({ error: true }));
    event.preventDefault();
  }

  render() {
    return (
      <div id="subscribe">
        <Navbar />
        <Hero 
          title="Subscribe and get plants and more delivered to your door."
          subtitle="Sign up now to receive a 20% discount on your first 3 deliveries."
        />
        <div className="container">
        <div className="columns">
          {
            this.state.error &&
            <div className="column notification is-danger has-text-centered">
              Oh no! Something went wrong. Please email us at <a href="mailto:hello@felinefolia.com">hello@felinefolia.com</a>
            </div>
          }
          {
            this.state.preRegistered &&
            <div className="column notification is-info has-text-centered">
              Congrats! You're all signed up. We'll let you know when we're ready to show you our thang.
            </div>
          }
          {
            !this.state.preRegistered && !this.state.error &&
            <div className="column is-half is-offset-one-quarter">
            <p>Hi! Thanks for considering us to deliver carefully packaged plants and all plant things.</p>
            <br />
            <p>We still got a lot of ideas that we want to share with you. Right now, we're working on getting our blog setup so we can share those ideas. But we'd also like to hear from you. Let us know what you'd like to see in your packages and help us get to know what you're needs are.</p>
            </div>
          }
        </div>
        </div>
        {
          !this.state.preRegistered && !this.state.error &&
          <RegisterForm
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

export default Subscribe;
