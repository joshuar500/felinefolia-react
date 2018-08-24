import React from 'react';
import { Link } from 'react-router-dom';

export function Hero(props) {
  if (props.fullHeight) {
    return (
      <header className="hero is-light is-fullheight">    
        <div className="hero-body homepage-bg">
          <div className="container">
            <p className="title is-1">
              Feline friendly plants and more<br /> delivered to your care. 
            </p>
            <p className="subtitle">
              Of course you don't think we're forgetting about your puppers. <span role="img" aria-label="doggo">🐕</span>
            </p>
            <Link to="/subscribe" className="button is-info">Signup for more updates</Link>
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
