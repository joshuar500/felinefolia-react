import React from 'react';
import { Link } from 'react-router-dom';
import { NavCta } from './NavCta';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

import logo from '../img/felinefolia_logo.png';

export function Navbar() {
  const isOnline = useOnlineStatus();

  function getNav() {
    return (
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
              {isOnline ? showLoggedInNav() : showLoggedOutNav(isOnline)}
            </div>
          </div>
        </nav>
      </div>
    );
  }

  function showLoggedInNav() {
    return (
      <div className="navbar-end">
        <a href="/#about" className="navbar-item">
          about
        </a>
        <Link to="/dashboard" className="navbar-item">
          dashboard
        </Link>
        <Link to="/logout" className="navbar-item">
          logout
        </Link>
      </div>
    );
  }

  function showLoggedOutNav(isOnline) {
    return isOnline !== null ? (
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
    ) : null;
  }

  return getNav();
}
