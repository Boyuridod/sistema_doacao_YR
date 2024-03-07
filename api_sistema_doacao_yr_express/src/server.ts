import express from 'express';
import logger from './Log/logger';
import routes from './routes';
const app = express();
const port = 3000;


logger.info("nada");
app.use('/', routes);

app.listen(port, () => {
    logger.info('Servidor rodando em http://localhost:' + port);
});
