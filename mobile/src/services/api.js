import axios from 'axios';

const api = axios.create({
    // baseURL: `http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}`,
    baseURL: 'http://10.0.0.111:3333',
});
  

export default api;