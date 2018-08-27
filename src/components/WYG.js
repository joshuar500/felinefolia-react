import React from 'react';
import { Link } from 'react-router-dom';

import plant from '../img/felinefolia_leaves.png';

export function WhatYouGet(props) {
  return(
    <section id="whatyouget">
      <div className="container">
        <div className="box">
          <div className="columns is-vcentered">
            <div className="column is-5">
              <h5 className="title is-5">What you get</h5>
              <p>Every three months, we rotate the focus of our shipment. Your first shipment is a new pet friendly plant to join your family. The second month is a variety of tools and treats to care for your plant <span role="img" aria-label="seedling">🌱</span> (and pet <span role="img" aria-label="meow">😽</span>). And finally, in the third month, we send you super secret surprise put together by one of the many small businesses we're working with.</p>
            </div>
            <div className="column is-4 has-text-centered">
              <h1>$20 - $30 / month</h1>
              <Link to="/subscribe" className="button is-primary">Sign Up</Link><br />
              {/* <a>buy a gift for a friend or family member</a> */}
            </div>
            <div className="column is-3 has-text-centered">
              <img className="cta-plant" src={plant} alt="plant"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
