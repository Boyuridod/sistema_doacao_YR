"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./Log/logger"));
const exampleController_1 = __importDefault(require("./Controllers/exampleController"));
const router = express_1.default.Router();
router.get('/teste', (req, res) => {
    res.send('Rota executou com sucesso!');
});
router.get('/teste/:id', (req, res) => {
    try {
        const id = req.params.id;
        if (!isNaN(Number(id))) {
            res.send(id);
            logger_1.default.info('Rota executou corretamente');
        }
        else {
            throw new Error();
        }
    }
    catch (_a) {
        logger_1.default.error("Digite apenas números");
        res.status(400).send('Requisição inválida (caso 2)');
    }
});
router.get('/testeQuery', (req, res) => {
    try {
        if (!isNaN(Number(req.query.valor)) && !isNaN(Number(req.query.quantidade))) {
            res.send('Rota executou com sucesso recebendo o valor: ' + req.query.valor + ' e quantidade: ' + req.query.quantidade + '!');
            logger_1.default.info('Rota executou corretamente');
        }
        else {
            throw new Error();
        }
    }
    catch (error) {
        logger_1.default.error("Digite apenas números");
        res.status(400).send('Requisição inválida (caso 3)');
    }
});
router.get('/example', exampleController_1.default.exampleRoute);
exports.default = router;
