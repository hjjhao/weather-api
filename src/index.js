const express = require('express');
require('dotenv').config();
const router = require('./router');
const helmet = require('helmet');
const app = express();
const morgan = require('morgan');
const notFound = require('./middleware/notFound');
const logger = require('./utiles/logger');

app.use(helmet());
app.use(morgan('combined',{stream: logger.stream}));
app.use(router);
app.use(notFound);

const port = process.env.PORT || 3000;
app.listen(port, () => logger.info(`app listening at port ${port}`));


