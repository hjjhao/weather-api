const express = require('express')
const router = express.Router();
const axois = require('axios');
console.log('weather Router');
router.get('/:cc/:city', (req,res)=>{
    let {cc,city} = req.params
    console.log(`weather router get ${cc} and ${city}`);
    res.send(`weather router get ${cc} and ${city}`);


});

module.exports = router;