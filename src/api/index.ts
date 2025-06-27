import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api", // usa variables de entorno
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // si usás cookies
});

export default apiClient;
