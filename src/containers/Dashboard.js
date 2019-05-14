import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Hero } from '../components/Hero';
import { LeftNavbar } from '../components/admin/LeftNavbar';
import { Table } from '../components/shared/Table';

import { getUsers } from '../api/users';
import SiteContainer from './SiteContainer';

class Dashboard extends Component {
  state = {
    profile: {},
    error: false,
    loggedIn: false,
    users: null
  };

  getAllUsers = () => {
    getUsers().then(res => {
      if (res) {
        if (res.status !== 200) {
          this.setState({ error: true });
        } else {
          this.setState({ users: res.data });
        }
      } else {
        this.setState({ error: true });
      }
    });
  };

  renderAdminDashboard = () => {
    return (
      <div className="container">
        <div className="columns">
          <LeftNavbar />

          <main className="column main">
            <nav className="breadcrumb is-small" aria-label="breadcrumbs">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="is-active">
                  <Link to="dashboard" aria-current="page">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="level">
              <div className="level-left">
                <div className="level-item">
                  <div className="title has-text-primary">
                    <i className="fa fa-tachometer" /> Users
                  </div>
                </div>
              </div>
              <div className="level-right">
                <div className="level-item">
                  <button type="button" className="button is-small">
                    Today is: {new Date().toLocaleDateString()}
                  </button>
                </div>
              </div>
            </div>

            <Table id="users" data={this.state.users} />
          </main>
        </div>
      </div>
    );
  };

  renderUserDashboard = () => {
    return (
      <div className="container">
        <div className="columns">
          <div className="column">
            <progress class="progress is-primary" value="15" max="100">
              15%
            </progress>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { profile, error } = this.state;

    console.log('this.props', this.props);

    if (error) {
      return null;
    } else {
      return (
        <SiteContainer isLoggedIn={this.props.isLoggedIn}>
          <Hero
            title={`${
              profile.role === 'admin' ? 'Admin Dashboard' : 'Your shipment is on the way'
            }  ${profile.name || ''}`}
            subtitle=""
          />
          {/* <div className="container">
          <div className="columns">
              <div className="column has-text-centered">
              Your feline friendly plant is on the way.
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <progress className="progress is-primary" value="15" max="100">15%</progress>
              </div>
            </div>
          </div> */}
          {profile.role === 'member' && this.renderUserDashboard()}
          {profile.role === 'admin' && this.renderAdminDashboard()}
        </SiteContainer>
      );
    }
  }
}

export default Dashboard;
