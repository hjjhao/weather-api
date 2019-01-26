const { createLogger, format, transports } = require('winston');
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
        level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
        handleExceptions: true,
        json: false,
        colorize: true
    },
};
const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.colorize(),
        format.label({ label: appRoot }),
        format.timestamp(),
        format.printf(info => { 
            return `${info.timestamp} [${info.label}] ${info.level} ${info.message}`
        })
    ),
    transports: [
        new transports.Console(option.console),
        new transports.File(option.file)

    ],
});

logger.stream = {
    write: function(message, encoding){
        logger.info(message.trim());
    }
};

module.exports = logger;