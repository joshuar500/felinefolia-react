import React from 'react';
import { Link } from 'react-router-dom';

export function Hero(props) {
  if (props.fullHeight) {
    return (
      <header className="hero is-light is-fullheight">    
        <div className="hero-body">
          <div className="container homepage-bg">
            <div className="level">
              <div className="level-left column is-half-desktop is-full-mobile">
              <div className="">
                <p className="title is-1 is-spaced">
                  Pet friendly plants delivered to your door
                </p>
                <p className="subtitle">
                  Feline Folia carefully packages and ships non-toxic, pet friendly plants so Fluffy, Mittens, and Dave don't get sick when they decide to chew on a leaf.
                </p>
                <Link to="/subscribe" className="button is-info">Get Started</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
  return (
    <header className="hero is-light">    
      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="title is-3">
            { props.title }
          </p>
          <p className="subtitle">
            { props.subtitle }
          </p>
        </div>
      </div>
    </header>
  );
}
