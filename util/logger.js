const winston = require('winston');
const formatDate = require('./formatDate')

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        //new winston.transports.File({ filename: 'backend.log' })
    ]
});

const customLogger = (req, res, next) => {
    const date = new Date();
    const time = formatDate(date);

        logger.log({
            level: 'info',
            message: `${time} ${req.method} ${req.url} ${res.statusCode} ${req.headers['user-agent']}`
        });

    next();
};

module.exports = customLogger;