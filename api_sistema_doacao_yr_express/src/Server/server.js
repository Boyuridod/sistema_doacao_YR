const logger = require("../Logger/logger");
const express = require('express');
const app = express();
const port = 3000;

app.get('/teste', (req, res) => {
    res.send('Rota executou com sucesso!');
});

app.get('/teste/:id', (req, res) => {
    try{
        res.send('Rota executou com sucesso!')
    }
    catch{
        logger.error('id nao foi recebido corretamente')
    }
});

app.listen(port, () => {
    logger.info('Servidor rodando em http://localhost:' + port);
});


//https://blog.4linux.com.br/como-organizar-e-manipular-rotas-com-node-js-e-express/