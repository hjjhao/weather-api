class City{
    constructor(rawData){
        this.name = rawData.name;
        this.coord = rawData.coord;
        this.country = rawData.country;
        this.population = rawData.population;
    }
    test(){
        console.log('test in city');
    }
}

module.exports = City;