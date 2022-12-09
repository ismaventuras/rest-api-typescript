import winston from 'winston';

export const logger = winston.createLogger({
    format: winston.format.simple(),
    transports:[
        new winston.transports.File({filename:'error.log', level:'error'}),
    ]
})

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));    
}