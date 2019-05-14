import React from 'react';

import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function SiteContainer(props) {
  return (
    <div id="site-container">
      <Navbar isLoggedIn={props.isLoggedIn} />
      {props.children}
      <div className="container">
        {/* add a spacer */}
        &nbsp;
      </div>
      <Footer />
    </div>
  );
}

export default SiteContainer;
