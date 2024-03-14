import express from 'express';
import logger from './Log/logger';
import exampleController from './Controllers/exampleController';
const router = express.Router();

router.get('/teste', (req, res) => {
    res.send('Rota executou com sucesso!');
});

router.get('/teste/:id', (req, res) => {
    try {
        const id = req.params.id;

        if (!isNaN(Number(id))) {
            res.send(id);
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
    try {

        

        if (!isNaN(Number(req.query.valor)) && !isNaN(Number(req.query.quantidade))) {
            res.send(`Rota executou com sucesso recebendo o valor: ${req.query.valor} e quantidade ${req.query.quantidade} !`);
            logger.info('Rota executou corretamente');
        }
        else{
            throw new Error();
        }
    }
    catch (error) {
        logger.error('Digite apenas números');
        res.status(400).send('Requisição inválida (caso 3)');
    }

});

router.get('/example', exampleController.exampleRoute);

export default router;