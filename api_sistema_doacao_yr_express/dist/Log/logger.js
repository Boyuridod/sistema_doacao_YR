"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logRequests = void 0;
const pino_1 = __importDefault(require("pino"));
const logger = (0, pino_1.default)({
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
function logRequests(req, res, next) {
    logger.info({
        method: req.method,
        url: req.url,
        query: req.query,
        body: req.body,
    }, 'Request received');
    next();
}
exports.logRequests = logRequests;
//https://getpino.io/#/
/*
  trace: 'DEBUG',
  debug: 'DEBUG',
  info: 'INFO',
  warn: 'WARNING',
  error: 'ERROR',
  fatal: 'CRITICAL'
*/
exports.default = logger;
