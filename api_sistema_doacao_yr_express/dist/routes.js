"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./Log/logger"));
const DataController_1 = __importDefault(require("./Controllers/DataController/DataController"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.send('Rota executou com sucesso!');
});
router.get('/teste/:id', (req, res) => {
    const { id } = req.params;
    try {
        if (!isNaN(Number(id))) {
            res.send(`O valor digitado foi: ${id}`);
            logger_1.default.info('Rota executou corretamente');
        }
        else {
            throw new Error();
        }
    }
    catch (_a) {
        logger_1.default.error('Digite apenas números');
        res.status(400).send('Requisição inválida (caso 2)');
    }
});
router.get('/testeQuery', (req, res) => {
    const { valor } = req.query;
    const { quantidade } = req.query;
    try {
        if (!isNaN(Number(valor)) && !isNaN(Number(quantidade))) {
            res.send(`Rota executou com sucesso recebendo o valor: ${valor} e quantidade ${quantidade} !`);
            logger_1.default.info('Rota executou corretamente');
        }
        else {
            throw new Error();
        }
    }
    catch (error) {
        logger_1.default.error('Digite apenas números');
        res.status(400).send('Requisição inválida (caso 3)');
    }
});
router.post('/formulario', DataController_1.default.exampleRoute);
exports.default = router;
