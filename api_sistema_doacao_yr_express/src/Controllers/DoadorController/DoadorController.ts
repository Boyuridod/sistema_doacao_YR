import { Request, Response } from "express";
import { Repository } from "typeorm";
import Doador from "../..//Models/Doador/Doador";
import logger from "../../Log/logger"
import { AppDataSource } from "../../Database/data-source";

class DoadorController {

  private doadorRepository: Repository<Doador>

  constructor() {
      this.doadorRepository = AppDataSource.getRepository(Doador);
    }

  public async insert(req: Request, res: Response) {
    try {
      let newObject = Doador.fromJson(req.body);
      logger.debug(newObject);
      const savedObject = await this.doadorRepository.save(newObject);
      return res.status(200).json(savedObject);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const objectArray = await this.doadorRepository.find();
      return res.json(objectArray);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getOneById(req: Request, res: Response) {
    try {
      const codigo: number = parseInt(req.params.codigo);
      const object = await this.doadorRepository.findOne({ where: { codigo } });
      if (object) {
        return res.json(object);
      } else {
        return res.status(404).json({ error: "Object not found" });
      }
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const codigo: number = parseInt(req.params.codigo);
      const updatedObject = req.body as Doador;
      const existingObject = await this.doadorRepository.findOne({ where: { codigo } });
      if (existingObject) {
        await this.doadorRepository.save({ ...existingObject, ...updatedObject });
        return res.status(200).json({ message: "Object updated successfully" });
      } else {
        return res.status(404).json({ error: "Object not found" });
      }
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const codigo: number = parseInt(req.params.codigo);
      const existingObject = await this.doadorRepository.findOne({ where: { codigo } });
      if (existingObject) {
        await this.doadorRepository.remove(existingObject);
        return res.status(200).json({ message: "Object deleted successfully" });
      } else {
        return res.status(404).json({ error: "Object not found" });
      }
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

}
export default new DoadorController;
