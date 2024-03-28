import pino, { Logger } from 'pino';
import { Request, Response, NextFunction } from 'express';

const logger: Logger = pino({
    level: 'debug',
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
            levelFirst: true,
            translateTime: "dd/mm/yyyy|HH:MM:ss"
        }
    }
});

function logRequests(req: Request, res: Response, next: NextFunction) {
    logger.debug({
        method: req.method,
        url: req.url,
        query: req.query,
        body: req.body,
    }, 'Request received');
    next();
}

//https://getpino.io/#/
/*
  trace: 'DEBUG',
  debug: 'DEBUG',
  info: 'INFO',
  warn: 'WARNING',
  error: 'ERROR',
  fatal: 'CRITICAL'
*/

export default logger;
export { logRequests };