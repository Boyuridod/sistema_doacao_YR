"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./Log/logger"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = 3000;
app.use('/', routes_1.default);
app.listen(port, () => {
    logger_1.default.info('Servidor rodando em http://localhost:' + port);
});
//https://blog.4linux.com.br/como-organizar-e-manipular-rotas-com-node-js-e-express/
