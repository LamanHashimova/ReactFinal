import axios from 'axios';

const api = axios.create({
  baseURL: 'https://timzeeback.azurewebsites.net/',
});

export default api;