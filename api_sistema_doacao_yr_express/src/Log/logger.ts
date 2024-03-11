import pino, { Logger } from 'pino';

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