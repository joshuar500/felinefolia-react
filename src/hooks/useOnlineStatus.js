import { useState, useEffect } from 'react';
import { getAccount } from '../api/users';

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status);
  }

  useEffect(() => {
    getAccount()
      .then(res => {
        if (res) {
          if (res.status !== 200) {
            handleStatusChange(false);
          } else if (res) {
            handleStatusChange(true);
          }
        } else {
          this.props.history.push('login');
          handleStatusChange(false);
        }
      })
      .catch(err => {
        handleStatusChange(false);
      });
  }, []);
  console.log('isOnline', isOnline);
  return isOnline;
}
