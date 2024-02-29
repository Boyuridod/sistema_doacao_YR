const { transport } = require('pino');

const pino = require('pino')({
    level: "debug",
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true
      }
    }
    
})

//https://getpino.io/#/
/*
  trace: 'DEBUG',
  debug: 'DEBUG',
  info: 'INFO',
  warn: 'WARNING',
  error: 'ERROR',
  fatal: 'CRITICAL'
*/

module.exports = pino;