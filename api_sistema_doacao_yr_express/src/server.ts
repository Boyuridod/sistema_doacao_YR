import express from 'express';
import logger from './Log/logger';
import routes from './routes';
import cors from 'cors';
import bodyParser from 'body-parser'
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json())
app.use('/', routes);

app.listen(port, () => {
    logger.info('Servidor rodando em http://localhost:' + port);
});
