const axios = require('axios');

export const request = axios.create({
  baseURL: 'http://api.felinefolia.com:8000',
  timeout: 1000
});