const axios = require('axios');
const instance = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' },
    params: {
        APPID: process.env.APPID,
        city: 'test',
        units: 'metric'
    }
});

module.exports = instance;