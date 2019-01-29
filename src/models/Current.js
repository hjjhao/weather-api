class Current {
    constructor(rawData) {
        const { main, weather, wind } = rawData;
        this.minCelsius = main.temp_min;
        this.maxCelsius = main.temp_max;
        this.minFahrenheit = this.celsiustoFah(main.temp_min);
        this.maxFahrenheit = this.celsiustoFah(main.temp_max);
        this.humidity = main.humidity;
        this.windspeed = wind.speed;
        this.windDirection = this.windDirectionCalc(wind.deg);
        this.weatherDesc = weather[0].description;
        this.weather = weather[0].main;
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
        return windDirection[Math.floor(windAngle + 22.5 / 45) % 8];
    }
}

module.exports = Current;