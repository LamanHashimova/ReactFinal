import axios from 'axios';

const api = axios.create({
  baseURL: 'http://lamanhashimovaa-001-site1.ctempurl.com/api/',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;