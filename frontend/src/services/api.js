import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api', // backend proxy
});

export const sendLead = (data) => api.post('/leads/', data);
export const getCalculator = (params) => api.get('/calculator/', { params });
export const getSensors = () => api.get('/sensors/current');