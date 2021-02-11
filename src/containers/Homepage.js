import React, { Component } from 'react';

import { SiteContainer } from './SiteContainer';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { WhatYouGet } from '../components/WYG';

class Homepage extends Component {
  render() {
    return (
      <SiteContainer isLoggedIn={this.props.isLoggedIn}>
        <Hero fullHeight />
        <About />
        <WhatYouGet />
      </SiteContainer>
    );
  }
}

export default Homepage;
