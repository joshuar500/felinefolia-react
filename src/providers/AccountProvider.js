import React, { Component } from 'react';
import { getAccount } from '../api/users';

const defaultAccountContext = {
  email: null,
  subscribed: false,
  isLoggedIn: false,
  authStatusReported: false
};

export const AccountContext = React.createContext(defaultAccountContext);

export default class AccountContextProvider extends Component {
  state = defaultAccountContext;

  componentDidMount() {
    getAccount()
      .then(res => {
        if (res) {
          if (res.status !== 200) {
            this.setState({
              isLoggedIn: false
            });
          } else if (res) {
            this.setState({
              isLoggedIn: true
            });
          }
        } else {
          this.props.history.push('login');
        }
        this.setState({ authStatusReported: true });
      })
      .catch(err => {
        console.log('err', err);
      });
  }

  render() {
    const { children } = this.props;
    const { authStatusReported, isLoggedIn, email, subscribed } = this.state;
    return (
      <AccountContext.Provider value={{ isLoggedIn, email, subscribed }}>
        {authStatusReported && children}
      </AccountContext.Provider>
    );
  }
}
