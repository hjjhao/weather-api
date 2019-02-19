const express = require('express');
const router = express.Router();
const rootHandler = require('./middleware/rootHander');
const weatherRouter = require('./routes/weatherRouter');
console.log('router.js');
router.get('/', (req,res)=>res.send('welcomepage'));

router.use('/api/weather',weatherRouter);


module.exports = router;
