import React, { Component } from 'react';

import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
import { LoginForm } from '../components/Forms';

import { login } from '../api/users';

class Login extends Component {

  state = {
    email: '',
    password: '',
    error: false,
    loggedIn: false,
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
    login(this.state.email, this.state.password)
      .then(res => {
        console.log('res', res);
        if (res.status !== 200) {
          this.setState({ error: true });
        } else {
          this.setState({ loggedIn: true });
        }
      })
      .catch(err => this.setState({ error: true }));
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
          !this.state.loggedIn && !this.state.error &&
          <LoginForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            email={this.state.email}
            password={this.state.password}
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
