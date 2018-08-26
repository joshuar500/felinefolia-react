import React, { Component } from 'react';

import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';

class Dashboard extends Component {

  state = {
    profile: {},
    error: false,
  }

  render() {

    const { profile } = this.state;

    return (
      <div id="login">
        <Navbar />
        <Hero 
          title={`Welcome back ${profile.name || ''}`}
          subtitle=""
        />
        <div className="container">
        <div className="columns">
            <div className="column has-text-centered">
            Your feline friendly plant is on the way.
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <progress class="progress is-primary" value="15" max="100">15%</progress>
            </div>
          </div>
        </div>
        <div className="container">
        {/* add a spacer */}
          &nbsp;
        </div>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
