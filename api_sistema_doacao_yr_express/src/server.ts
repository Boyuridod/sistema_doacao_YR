import express from 'express';
import logger, { logRequests } from './Log/logger';
import routes from './routes';
import cors from 'cors';
import bodyParser from 'body-parser';
import 'reflect-metadata';
import { AppDataSource } from './Database/data-source';

const app = express();
const port = 5000;

app.use(logRequests);
app.use(cors());
app.use(bodyParser.json())
app.use('/api', routes);

AppDataSource.initialize().then(async () => {
    logger.debug('Database OK!');
    app.listen(port, () => {
        logger.info(`Servidor rodando em http://localhost:${port}/api`)
    })
})
