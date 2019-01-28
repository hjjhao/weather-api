const express = require('express')
const router = express.Router();
const axios = require('../utiles/axios');
const Weather = require('../models/Weather');
console.log('weather Router');
router.get('/:cc/:city', (req, res) => {
    let { cc, city } = req.params;

    let { weather } = req.query;
    console.log(`weather router get ${cc} and ${city} and ${weather}`);
    res.send(new Weather().getData(city, cc, weather));
    // res.send(`weather router get ${cc} and ${city}`);


});

module.exports = router;