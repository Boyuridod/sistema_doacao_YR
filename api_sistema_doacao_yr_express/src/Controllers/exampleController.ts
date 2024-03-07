import { Request, Response } from 'express';

class exampleController {
  public exampleRoute(req: Request, res: Response): void {
    res.json({ message: 'Hello from Express.js!' });
  }
}

export default new exampleController();