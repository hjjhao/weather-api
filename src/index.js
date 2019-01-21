const express = require('express');
const router = require('./router');
const app = express();
const helmet = require('helmet');
const morgan = require('morgan');
const notFound = require('./middleware/notFound');

app.use(helmet());
app.use(morgan('dev'));
app.use(router);
app.use(notFound);

const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`app listening at port ${port}`));


