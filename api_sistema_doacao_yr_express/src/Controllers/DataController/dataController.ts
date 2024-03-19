import { Request, Response } from 'express';
import Dados from '../../Models/Dados/Dados';
import logger from '../../Log/logger';

class DataController {
  private dadosRecebidos: Dados | null = null;

  public exampleRoute(req: Request, res: Response): void {
    const data = req.body;

    this.dadosRecebidos = new Dados(
      data.texto,
      data.inteiro,
      data.booleano,
      data.opcaoSelect,
      data.opcaoRadio
    )

    logger.info(this.dadosRecebidos);

    res.send('Dados recebidos com sucesso!');
  }
}

export default new DataController();