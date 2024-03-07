import { Request, Response } from 'express';

class exampleController {
  public exampleRoute(req: Request, res: Response): void {
    res.json({ message: 'Batata!' });
  }
}

export default new exampleController();