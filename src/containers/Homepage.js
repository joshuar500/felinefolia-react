import React, { Component } from 'react';

import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { WhatYouGet } from '../components/WYG';
import { Footer } from '../components/Footer';

class Homepage extends Component {
  render() {
    return (
      <div id="homepage">
        <Navbar />
        <Hero fullHeight />
        <About />
        <WhatYouGet />
        <div className="container">
        {/* add a spacer */}
          &nbsp;
        </div>
        <Footer />
      </div>
    );
  }
}

export default Homepage;
