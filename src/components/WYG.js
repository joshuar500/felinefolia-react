import React from 'react';
import { Link } from 'react-router-dom';

import plant from '../img/felinefolia_homepage_houseplant.png';

export function WhatYouGet(props) {
  return(
    <section id="whatyouget">
      <div className="container">
        <div className="box">
          <div className="columns is-vcentered">
            <div className="column is-5">
              <h5 className="title is-5">What you get</h5>
              <span>Each month is a little different and we rotate every 3 months.</span>
              <span>The first month are plant decorations for your home.</span>
              <span>The second month is plant care, to keep your plants healthy.</span>
              <span>The third month is always a new plant.</span>
              <span>This month we are shipping plant decorations.</span>
            </div>
            <div className="column is-3 has-text-centered">
              <h1>$30 / month</h1>
              <Link to="/subscribe" className="button is-primary">SUBSCRIBE</Link><br />
              {/* <a>buy a gift for a friend or family member</a> */}
            </div>
            <div className="column is-4 has-text-centered">
              <img className="cta-plant" src={plant} alt="plant"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
