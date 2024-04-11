import { Request, Response } from 'express';
import logger from '../../Log/logger';

class TestController{

    public firstTest(req: Request, res: Response){
        res.send('Rota executou com sucesso!');
    }

    public secondTest(req: Request, res: Response){
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
    }

    public queryTest(req: Request, res: Response){
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
    }
}

export default new TestController;