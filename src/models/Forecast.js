const currentWeather = require('./Current');
class ForecastWeather extends currentWeather{
    constructor(rawData){
        super(rawData);
        this.time = rawData.dt;
    }
}

module.exports = ForecastWeather;


