import { Request, Response, NextFunction } from 'express';
import logger from '../Log/logger';


const middleware = {
    validateText: (req: Request, res: Response, next: NextFunction) => {
        const { texto } = req.body;
        if (texto.toString() >= 2 && texto.toString() <= 255) {
            logger.info('Valor de texto correto');
            next();
        }
        else {
            res.status(400).json({ error: 'Valor de texto incorreto' });
            return;
        }
    },

    validateInteger: (req: Request, res: Response, next: NextFunction) => {
        const { inteiro } = req.body;
        if (inteiro > 0 && inteiro <= 1000) {
            logger.info('Valor de inteiro correto');
            next();
        }
        else {
            res.status(400).json({ error: 'Valor de inteiro incorreto' });
        }
    },

    validateBoolean: (req: Request, res: Response, next: NextFunction) => {
        const { booleano } = req.body;
        next();
    },

    validateDropbox: (req: Request, res: Response, next: NextFunction) => {
        const { opcaoSelect } = req.body;
        next();
    },

    validateRadioButton: (req: Request, res: Response, next: NextFunction) => {
        const { opcaoRadio } = req.body;
        next();
    }
}

export default middleware


