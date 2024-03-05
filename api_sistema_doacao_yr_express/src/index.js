const logger = require("./Logger/logger");
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Rota executou com sucesso!');
});

app.get('/:id', (req, res) => {
    try {
        const id = req.params.id;

        if (!isNaN(id)) {
        res.send(id); 
        }

        else {
            throw new Error('Digite apenas numeros');
        }
    }
    catch (error) {
        logger.error(error.message);
        res.status(400).send('Requisição inválida');
    }
});

app.get('/:value/:quant', (req, res) => {
    try{
        const value = req.params.value;
        const quant = req.params.quant;
        if (!isNaN(value) && !isNaN(quant)){
            res.send("Rota executou com sucesso recebendo o valor: " + value + " e quantidade: " + quant + "!");
        }
        else{
            throw new Error('Digite apenas numeros');
        }
    }
    catch(error){
        logger.error(error.message)
        res.status(400).send('Requisição inválida');
    }
});

app.listen(port, () => {
    logger.info('Servidor rodando em http://localhost:' + port);
});


//https://blog.4linux.com.br/como-organizar-e-manipular-rotas-com-node-js-e-express/