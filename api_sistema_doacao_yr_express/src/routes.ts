import express from 'express';
import logger from './Log/logger';
import dataController from './Controllers/DataController/DataController';
import middleware from './middlewares/middleware'


const router = express.Router();

router.get('/', (req, res) => {
    res.send('Rota executou com sucesso!');
});

router.get('/teste/:id', (req, res) => {
    const {id} = req.params;
    try {
        if (!isNaN(Number(id))) {
            res.send(`O valor digitado foi: ${id}`);
            logger.info('Rota executou corretamente');
        }

        else {
            throw new Error();
        }
    }
    catch {
        logger.error('Digite apenas números');
        res.status(400).send('Requisição inválida (caso 2)');
    }
});

router.get('/testeQuery', (req, res) => {
    const {valor} = req.query;
    const {quantidade} = req.query;

    try {
        if (!isNaN(Number(valor)) && !isNaN(Number(quantidade))) {
            res.send(`Rota executou com sucesso recebendo o valor: ${valor} e quantidade ${quantidade} !`);
            logger.info('Rota executou corretamente');
        }
        else{
            throw new Error();
        }
    }
    catch {
        logger.error('Digite apenas números');
        res.status(400).send('Requisição inválida (caso 3)');
    }

});

//router.post('/formulario', middleware.validateText, middleware.validateInteger, middleware.validateBoolean, middleware.validateDropbox, middleware.validateRadioButton ,dataController.exampleRoute);
router.post('/formulario', middleware.validateText, dataController.exampleRoute);
export default router;