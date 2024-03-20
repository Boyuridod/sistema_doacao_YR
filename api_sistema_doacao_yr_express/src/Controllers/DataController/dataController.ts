import { Request, Response } from 'express';
import Dados from '../../Models/Dados/Dados';
import logger from '../../Log/logger';

class DataController {

  public exampleRoute(req: Request, res: Response): void {
    let newObject = Dados.fromJson(req.body);

    logger.info(newObject);

    res.send('Dados recebidos com sucesso!');
  }
}

export default new DataController();