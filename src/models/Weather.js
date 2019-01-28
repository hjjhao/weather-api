const ForecastWeather = require('./Forecast');
const CurrentWeather = require('./Current');
const City = require('./City');
const axios = require('../utiles/axios');

class Weather{
    constructor(){
    }
    getData(city,country,weatherType){
        const currentWeather = getWeatherData(city,country)[0].data;
        const forecastWeather = getWeatherData(city,country)[1].data ;
        const weather = {
            city: new City(forecastWeather.city),
            current : new CurrentWeather(currentWeather),
            forecast: getWeatherData(city,country)[1].list.map(i=>new ForecastWeather(i)),
        };
        return weather;
    }
}

function getWeatherData(city,country){
    const weatherType = ['/weather','/forecast'];

    const weather = weatherType.map(i=>axios.get(`${i}?q=${city},${country}`)
    .then(function (response) {
        console.log(response);
        // res.send(response.data);
    })
    .catch(function (error) {
        console.log(error);
    }));
   

    return weather;
}


module.exports = Weather;