import express from 'express';
import logger, { logRequests } from './Log/logger';
import routes from './routes';
import cors from 'cors';
import bodyParser from 'body-parser'
const app = express();
const port = 5000;

app.use(logRequests);
app.use(cors());
app.use(bodyParser.json())
app.use('/api', routes);

app.listen(port, () => {
    logger.info(`Servidor rodando em http://localhost:${port}/api`);
});
