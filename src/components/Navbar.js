import React from 'react';
import { Link } from "react-router-dom";
import { NavCta } from './NavCta';

import logo from '../img/felinefolia_logo.png';

export function Navbar(props) {
  return(
    <div className="hero-head">
    <NavCta />
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src={logo} alt="Logo" />
          </Link>
          <span className="navbar-burger burger" data-target="navbarMenuHeroA">
            <span />
            <span />
            <span />
          </span>
        </div>
        <div id="navbarMenuHeroA" className="navbar-menu">
          <div className="navbar-end">
            <a href="/#about" className="navbar-item">
              about
            </a>
            <a href="/#whatyouget" className="navbar-item">
              what you get
            </a>
            <Link to="/login" className="navbar-item">
              login
            </Link>
            <span className="navbar-item">
              <Link to="/signup" className="button is-light is-primary">
                <span>Sign Up</span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>
  );
}