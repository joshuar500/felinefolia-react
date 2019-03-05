import React, { Component } from 'react';

import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
import { LeftNavbar } from '../components/admin/LeftNavbar';
import { Table } from '../components/shared/Table';

import { getUsers } from '../api/users';

class Dashboard extends Component {

  state = {
    profile: {},
    error: false,
    loggedIn: false,
    users: null,
  }

  // setAuth = (profile) => { //TODO: remove this function. taken care of in App.js
  //   this.setState({
  //     loggedIn: true,
  //     profile
  //   });
  //   if (profile.role === 'admin') {
  //     this.getAllUsers();
  //   } else {
  //     console.log('just a regular member');
  //   }
  // }

  getAllUsers = () => {
    getUsers()
      .then(res => {
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
  }

  // componentDidMount() {
  //   // check if user is logged in
  //   getAccount() //TODO: remove this logic. taken care of in App.js
  //     .then(res => {
  //       if (res) {
  //         if (res.status !== 200) {
  //           this.setState({ error: true });
  //         } else if (res) {
  //           this.setAuth(res.data);
  //         }
  //       } else {
  //         this.props.history.push('login');
  //       }
  //     })
  //     .catch(err => this.setState({ error: true }));
  // }

  renderAdminDashboard = () => {
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
                  <div className="title has-text-primary"><i className="fa fa-tachometer"></i> Users</div>
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

          <Table id="users" data={this.state.users} />
          </main>

        </div>
      </div>
    )
  }

  renderUserDashboard = () => {
    return (
      <div className="container">
        <div className="columns">
          <div className="column">
            <progress class="progress is-primary" value="15" max="100">15%</progress>
          </div>
        </div>
      </div>
    )
  }

  render() {

    const { profile, error } = this.state;

    if (error) {
      return null;
    } else {
      return (
        <div id="login">
          <Navbar />
          <Hero 
            title={`${profile.role === 'admin' ? 'Admin Dashboard' : 'Your shipment is on the way'}  ${profile.name || ''}`}
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
          { profile.role === 'member' && this.renderUserDashboard() }
          { profile.role === 'admin' && this.renderAdminDashboard() }
          <div className="container">
          {/* add a spacer */}
            &nbsp;
          </div>
          <Footer />
        </div>
      );
    }
  }
}

export default Dashboard;
