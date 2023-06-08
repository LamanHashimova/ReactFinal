import axios from 'axios';

const api = axios.create({
  baseURL: 'http://lamanhashimovaa-001-site1.ctempurl.com/',
});

export default api;