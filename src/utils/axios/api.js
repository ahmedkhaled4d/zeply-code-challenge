import axios from 'axios';

const axiosChainApi = axios.create({
  // baseURL: 'https://chain.api.btc.com/v3'
  baseURL: 'https://blockchain.info'
});

axiosChainApi.interceptors.request.use(
  async function (config) {
    // // Do  before request is sent
    config.headers = {
      ...config.headers,
      Accept: 'application/json'
    };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosChainApi.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    window.alert('Network Error : /' + error.response.status);
    return Promise.reject(error);
  }
);

export default axiosChainApi;
