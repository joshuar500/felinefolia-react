import React from 'react';
import { Link } from 'react-router-dom';

import houseplants from '../img/felinefolia_vickymingicottle_houseplants.png';

export function WhatYouGet(props) {
  return(
    <section id="whatyouget">
      <div className="container">
        <div className="box">
          <div className="columns is-vcentered">
            <div className="column is-5">
              <h5 className="title is-5">What you get</h5>
              <p className="inner-cta">Every three months, we rotate the focus of our shipment. Your first shipment is a new pet friendly plant to join your family. The second month is a variety of tools and treats to care for your plant <span role="img" aria-label="seedling">🌱</span> (and pet <span role="img" aria-label="meow">😽</span>). And finally, in the third month, we send you super secret surprise put together by one of the many small businesses we're working with. After that, we start the rotation all over again.</p>
            </div>
            <div className="column is-4 has-text-centered">
              <h1>$30 / month</h1>
              <Link to="/subscribe" className="button is-primary">Sign Up</Link><br />
              {/* <a>buy a gift for a friend or family member</a> */}
            </div>
            <div className="column is-3 has-text-centered">
              <img className="cta-plant" src={houseplants} alt="houseplants"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
