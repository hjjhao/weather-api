const express = require('express');
const router = express.Router();
const rootHandler = require('./middleware/roothander');
const weatherRouter = require('./routes/weatherRouter');
console.log('router.js');
router.get('/', (req,res)=>res.send('welcomepage'));

router.use('/api/weather',weatherRouter);


module.exports = router;
