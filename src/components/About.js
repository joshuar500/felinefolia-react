import React from 'react';

import cat from '../img/felinefolia_homepage_cat.png'
import houseplant from '../img/felinefolia_homepage_houseplant.png';

export function About(props) {
  return(
    <section id="about">
      <div className="container">
        <div className="columns">
          <div className="column is-two-fifths">
            <div className="columns">
              <div className="column"><img src={cat} alt="Cool kitty" /></div>
              <div className="column"><img src={houseplant} alt="Cool kitty" /></div>
            </div>
          </div>
          <div className="column">
            <h2 className="title is-2">About</h2>
            <p>We deliver plants. We deliver care packages for your plants. We deliver seeds, soil, pots, magnets, and we work with local businesses to deliver you the best possible products and healthiest plants for your home.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
