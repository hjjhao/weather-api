class Current {
    constructor(rawData) {
        const { main, weather, wind } = rawData;
        this.minCelsius = main.temp_min;
        this.maxCelsius = main.tem_max;
        this.minFahrenheit = this.celsiustoFah(main.temp_min);
        this.maxFahrenheit = this.celsiustoFah(main.temp_max);
        this.humidity = main.humidity;
        this.windspeed = wind.speed;
        this.windDirection = this.windDirectionCalc(wind.deg);
        this.weatherDesc = weather.description;
        this.weather = weather.main;
    }

    celsiustoFah(temp) {
        return temp * 9 / 5 + 32;
    }
    windDirectionCalc(windAngle) {
        const windDirection = [
            'N',
            'NE',
            'E',
            'SE',
            'S',
            'SW',
            'W',
            'NW',
        ]
        return windDirecton[Math.floor(windAngle + 22.5 / 45) % 8];
    }
}

module.exports = Current;