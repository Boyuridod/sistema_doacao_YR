import { Request, Response } from "express";
import { Repository } from "typeorm";
import Doador from "../../Models/Doador/Doador";
import logger from "../../Log/logger";
import { AppDataSource } from "../../Database/data-source";

class DoadorController {

  private doadorRepository: Repository<Doador>;

  constructor() {
    this.doadorRepository = AppDataSource.getRepository(Doador);

    // Bind the context of 'this' to the methods
    this.insert = this.insert.bind(this);
    this.getOne = this.getOne.bind(this);
    this.getOneById = this.getOneById.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.updateSituacao = this.updateSituacao.bind(this); // Adicionado bind para updateSituacao
  }

  public async insert(req: Request, res: Response) {
    try {
      logger.debug(req.body);
      let newObject = Doador.fromJson(req.body);
      logger.debug(newObject);
      const savedObject = await this.doadorRepository.save(newObject);
      return res.status(200).json(savedObject);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const query = this.doadorRepository.createQueryBuilder('doador');
      const params: { [key: string]: any } = {};

      Object.keys(req.body).forEach(key => {
        const value = req.body[key];
        if (value !== '' && value !== null && value !== undefined) {
          query.andWhere(`doador.${key} = :${key}`);
          params[key] = value;
        }
      });

      // Adiciona filtro para excluir doadores com situação "INATIVO"
      query.andWhere(`doador.situacao != :situacao`, { situacao: 'INATIVO' });

      const objectArray = await query.setParameters(params).getMany();
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
        const codigo: number = parseInt(req.body.codigo); // Ajuste para req.body.codigo
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


  async updateSituacao(req: Request, res: Response) {
    try {
      const codigo: number = parseInt(req.body.codigo);
      const existingObject = await this.doadorRepository.findOne({ where: { codigo } });
      if (existingObject) {
        existingObject.situacao = 'INATIVO'; // Atualiza apenas a situação
        await this.doadorRepository.save(existingObject);
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

export default new DoadorController();
