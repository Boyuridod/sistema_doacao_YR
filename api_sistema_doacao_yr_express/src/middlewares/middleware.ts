import { Request, Response, NextFunction } from 'express';
import logger from '../Log/logger';

const handleValidationError = (error: Error, res: Response) => {
    logger.error(error.message);
    res.json({ error: error.message });
};

const middleware = {
    validateText: (req: Request, res: Response, next: NextFunction) => {
        try {
            const { texto } = req.body;
            if (texto.length < 2 || texto.length > 255) {
                throw new Error('Valor de texto incorreto');
            }
            next();

        } catch (error: any) {
            handleValidationError(error, res);
        }
    },

    validateInteger: (req: Request, res: Response, next: NextFunction) => {
        try {
            const { inteiro } = req.body;
            if (inteiro < 0 || inteiro > 1000) {
                throw new Error('Valor de inteiro incorreto');
            }
            next();

        } catch (error: any) {
            handleValidationError(error, res);
        }
    },


    validateBoolean: (req: Request, res: Response, next: NextFunction) => {
        try {
            const { booleano } = req.body;
            if (booleano === undefined || typeof booleano !== 'boolean') {
                throw new Error('O valor nao pode ser indefinido');
            }
            next();

        } catch (error: any) {
            handleValidationError(error, res);
        }
    },

    validateDropbox: (req: Request, res: Response, next: NextFunction) => {
        const { opcaoSelect } = req.body;
        try{
            if (opcaoSelect === '') {
                throw new Error('Defina ao menos um valor');
            }

            next();

        }   catch (error: any) {
            handleValidationError(error, res)
        }
    },

    validateRadioButton: (req: Request, res: Response, next: NextFunction) => {
        const { opcaoRadio } = req.body;
        try{
            if (opcaoRadio === '') {
                throw new Error ('O valor nao pode ser indefinido')
            }
        next();

        }   catch (error: any) {
            handleValidationError(error, res);
        }
    }
}

export default middleware;
