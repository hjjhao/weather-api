const express = require('express')
const router = express.Router();
const axios = require('../utiles/axios');
const weather = require('../models/Weather');
console.log('weather Router');
router.get('/:cc/:city', (req, res) => {
    let { cc, city } = req.params;

    let weatherType = req.query.weather;
    console.log(req.query);
    console.log(`weather router get ${cc} and ${city} and ${weatherType}`);
    weather.getData(city, cc, weatherType)
    .then((response)=>{
        console.log(response.city);
        res.send(response)});
    // console.log(weatherProp);
    // res.send(weatherProp);
    // res.send(`weather router get ${cc} and ${city}`);


});

module.exports = router;