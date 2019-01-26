const express = require('express')
const router = express.Router();
const axios = require('../utiles/axios');
console.log('weather Router');
router.get('/:cc/:city', (req, res) => {
    let { cc, city } = req.params
    console.log(`weather router get ${cc} and ${city}`);
    // res.send(`weather router get ${cc} and ${city}`);
    axios.get(`/weather?q=${city},${cc}&appid=${process.env.APPID}`)
        .then(function (response) {
            console.log(response);
            // res.send(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });

});

module.exports = router;