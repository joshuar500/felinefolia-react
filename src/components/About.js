import React from 'react';

import catHouseplant from '../img/felinefolia_vickymingicottle_cat_houseplant.png'

export function About(props) {
  return(
    <section id="about" className="bd-lead">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-two-fifths">
            <div className="columns is-mobile">
              <div className="column has-text-centered">
                <img className="kitty-houseplant" src={catHouseplant} alt="Cool kitty with houseplant" />
              </div>
            </div>
          </div>
          <div className="column">
            <h2 className="title is-2">About</h2>
            <p>We're a monthly plant subscription box that sends you plants, plant care, and exclusive treats for you, your plant, and your feline friend (or doggo!). </p>
            <br />
            <p>We're a company run by cats (just kidding), but we worry about your folia friends so you don't have to, which is why each plant is carefully packaged in our signature box so it arrives fresh to your door.</p>
            <br />
            <p>We'd love to work with you to come up with great ideas while providing a great service every month. If you'd like to reach out with any questions or comments, please email us at <a href="mailto:hello@felinefolia.com">hello@felinefolia.com</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
