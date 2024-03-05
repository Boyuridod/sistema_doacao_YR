import express from 'express';
import logger from './logger/logger';
const app = express();
const port = 3000;

app.get('/teste', (req, res) => {
    res.send('Rota executou com sucesso!');
});

app.get('/teste/:id', (req, res) => {
    try {
        const id = req.params.id;

        if (!isNaN(Number(id))) {
        res.send(id); 
        logger.info('Rota executou corretamente');
        }

        else {
            throw new Error('Digite apenas numeros');
        }
    }
    catch (error) {
        res.status(400).send('Requisição inválida (caso 2)');
    }
});

app.get('/testeQuery', (req, res) => {
    try{
    res.send('Rota executou com sucesso recebendo o valor: ' + req.query.valor + ' e quantidade: ' + req.query.quantidade + '!');
    }
    catch(error){
        res.status(400).send('Requisição inválida (caso 3)')
    }

});

app.listen(port, () => {
    logger.info('Servidor rodando em http://localhost:' + port);
});


//https://blog.4linux.com.br/como-organizar-e-manipular-rotas-com-node-js-e-express/