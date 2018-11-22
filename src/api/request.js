const axios = require('axios');

export const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

request.interceptors.response.use((response) => {
  return response;
}, (error) => {
  return error.response;
})