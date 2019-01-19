class CurrentWeather{
    constructor(rawData){
        const {main, weather, wind} = rawData;
        this.minCelsuis = main.temp_min;
        this.maxCelsuis = main.temp_max;
        this.minFarenheit;
        this.maxFarenheit;
        this.humidity=main.humidity;
        this.weather = weather.main;
        this.weatherDesc = weather.description;
        this.windSpeed = wind.speed;
        this.windDirection = this.calculateWindDirection(wind.deg);
    }

    calculateWindDirection(degree){
        const direction = ['N', 'NE','E','SE','S','SW','W','NW'];
        const value = Math.floor((degree +22.5)/45);
        return direction[value % 8];
    }
    calculateFarenheit(celsius){
        const farenheit = (celsius*9)/5 +32
        //return Number.parseFloat(farenheit.toFixed(2)) ;
        return Math.round(farenheit * 1e2)/ 1e2;
    }
}

module.exports = CurrentWeather;