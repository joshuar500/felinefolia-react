import React, { Component } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';

import { logout } from '../api/users';

class Logout extends Component {

  componentDidMount() {
    logout()
      .then(res => {
        console.log('res', res);
        if (res.status !== 200) {
          // this.setState({ error: true });
          this.props.history.push('/');
        } else {
          // this.setState({ loggedIn: true });
          this.props.history.push('/');
        }
      })
      .catch(err => console.log);
  }

  render() {
    return (
      <div id="logout">
        Thank you, come again.
      </div>
    );
  }
}

export default Logout;
