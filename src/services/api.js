import axios from 'axios';

const api = axios.create({
    baseURL: 'https://www.proesc.com/api/v1',
});

export default api;