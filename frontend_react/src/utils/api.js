import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001', // Update with your backend URL
  timeout: 5000, // Adjust as needed
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
