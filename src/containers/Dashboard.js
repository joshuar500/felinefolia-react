import React, { Component } from 'react';

import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
import { LeftNavbar } from '../components/admin/LeftNavbar';
import { Table } from '../components/shared/Table';

import { getAccount } from '../api/users';

class Dashboard extends Component {

  state = {
    profile: {},
    error: false,
    loggedIn: false,
  }

  componentDidMount() {
    // check if user is logged in
    getAccount()
      .then(res => {
        console.log('res', res);
        if (res.status !== 200) {
          this.setState({ error: true });
        } else {
          this.setState({ loggedIn: true });
          console.log('user is currently logged in');
        }
      })
      .catch(err => this.setState({ error: true }));
  }

  renderAdminDashboard = () => {
    return (
      <div>This is the admin dashboard</div>
    )
  }

  renderUserDashboard = () => {
    return (
      <div className="container">
        <div className="columns">
          
          <LeftNavbar />

          <main className="column main">
            <nav className="breadcrumb is-small" aria-label="breadcrumbs">
              <ul>
                <li><a>Home</a></li>
                <li className="is-active"><a aria-current="page">Dashboard</a></li>
              </ul>
            </nav>

            <div className="level">
              <div className="level-left">
                <div className="level-item">
                  <div className="title has-text-primary"><i className="fa fa-tachometer"></i> Dashboard</div>
                </div>
              </div>
              <div className="level-right">
                <div className="level-item">
                  <button type="button" className="button is-small">
                    Today is: { new Date().toLocaleDateString() }
                  </button>
                </div>
              </div>
            </div>

          <Table />
          </main>

        </div>
      </div>
    )
  }

  render() {

    const { profile } = this.state;

    return (
      <div id="login">
        <Navbar />
        <Hero 
          title={`${profile.role === 'admin' ? 'Administration for' : 'Welcome back'}  ${profile.name || ''}`}
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
        { this.renderUserDashboard() }
        <div className="container">
        {/* add a spacer */}
          &nbsp;
        </div>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
