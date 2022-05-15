import axios from 'axios';

const omdbService = axios.create({
  baseURL: 'https://www.omdbapi.com/',
  params: {
    apikey: 'f6e779f4'
  },
  responseType: 'json',
  validateStatus: status => {
    return status >= 200 && status < 400; // default
  }
});


export default omdbService;
