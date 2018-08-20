const axios = require('axios');

export const request = axios.create({
  baseURL: 'http://felinefolia.local:8000',
  timeout: 1000
});