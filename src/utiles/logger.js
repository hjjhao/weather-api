const {createLogger,format,transports} = require('winston');
const appRoot = require('app-root-path');
const option = {
    file: {
        level: 'info',
        filename: `${appRoot}/logs/app.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
      },
      console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true,
      },
};
const logger = createLogger({
    transports:[
        new transports.Console(option.console),
        new transports.File(option.file)

    ],
});


module.exports = logger;