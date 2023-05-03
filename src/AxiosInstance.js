const axios = require('axios');

const axiosInstance = axios.create({
    baseURL: 'https://backendlivmo.onrender.com/api/v1',
    // baseURL: 'http://localhost:3000/api/v1',
    withCredentials: true,

});

module.exports = axiosInstance;