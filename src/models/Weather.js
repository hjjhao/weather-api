const ForecastWeather = require('./Forecast');
const CurrentWeather = require('./Current');
const City = require('./City');
const axios = require('../utiles/axios');

class Weather {
    constructor() {
    }
    getData(city, country, weatherType) {
        // const currentWeather = getWeatherData(city,country)[0];
        // const forecastWeather = getWeatherData(city,country)[1];
        return Promise.all(getWeatherData(city, country))
            .then(response => {
                console.log(response[0].data)
                const weather = {
                    city: new City(response[1].data.city),
                    current: new CurrentWeather(response[0].data),
                    forecast: response[1].data.list.map(i => new ForecastWeather(i)),
                };
                weatherType ==='current'? delete weather.forecast 
                :weatherType ==='forecast'? delete weather.current:console.log(`WeatherType : ${weatherType}`);
                console.log(weather);
                return weather;

            })
            .catch(err => console.log(err))

    }
}

function getWeatherData(city, country) {
    const weatherType = ['/weather', '/forecast'];
    return weatherType.map(i => axios.get(`${i}?q=${city},${country}`));
}


module.exports = new Weather();