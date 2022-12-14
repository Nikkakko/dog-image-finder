import axios from 'axios';

const instance = axios.create({
  // dog api
  baseURL: 'https://dog.ceo/api',
});

export default instance;
