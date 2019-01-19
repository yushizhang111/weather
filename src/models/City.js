class City{
    constructor(rawData){
        this.name =rawData.name;
        this.coord = rawData.coord;
        this.country = rawData.country;
        this.populaiton = rawData.population;
    }
}

module.exports = City;