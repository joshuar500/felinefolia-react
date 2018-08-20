import React from 'react';
import { Link } from 'react-router-dom';

export function Hero(props) {
  if (props.fullHeight) {
    return (
      <section className="hero is-light is-fullheight">    
        <div className="hero-body homepage-bg">
          <div className="container">
            <p className="title is-1">
              Forecast for tonight: more plants.
            </p>
            <p className="subtitle">
              Get fun decorations, care packages, and plants delivered straight to your door.
            </p>
            <Link to="/subscribe" className="button is-info">Signup for more updates</Link>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="hero is-light">    
      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="title is-3">
            Subscribe and get plants and more delivered to your door.
          </p>
          <p className="subtitle">
            Sign up now to receive a 20% discount on your first 3 deliveries.
          </p>
        </div>
      </div>
    </section>
  );
}
