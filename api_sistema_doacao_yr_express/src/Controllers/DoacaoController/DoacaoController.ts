import { Request, Response } from "express";
import { Repository } from "typeorm";
import doacao from "../../Models/Doacao/Doacao";
import logger from "../../Log/logger";
import { AppDataSource } from "../../Database/data-source";

class doacaoController {

  private doacaoRepository: Repository<doacao>;

  constructor() {
    this.doacaoRepository = AppDataSource.getRepository(doacao);

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
      let newObject = doacao.fromJson(req.body);
      logger.debug(newObject);
      const savedObject = await this.doacaoRepository.save(newObject);
      return res.status(200).json(savedObject);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const query = this.doacaoRepository.createQueryBuilder('doacao');
      const params: { [key: string]: any } = {};

      Object.keys(req.body).forEach(key => {
        const value = req.body[key];
        if (value !== '' && value !== null && value !== undefined) {
          query.andWhere(`doacao.${key} = :${key}`);
          params[key] = value;
        }
      });

      // Adiciona filtro para excluir doacaoes com situação "INATIVO"
      query.andWhere(`doacao.situacao != :situacao`, { situacao: 'INATIVO' });

      const objectArray = await query.setParameters(params).getMany();
      return res.json(objectArray);

    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getOneById(req: Request, res: Response) {
    try {
      const codigo: number = parseInt(req.params.codigo);
      const object = await this.doacaoRepository.findOne({ where: { codigo } });
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
        const updatedObject = req.body as doacao;
        const existingObject = await this.doacaoRepository.findOne({ where: { codigo } });
        if (existingObject) {
            await this.doacaoRepository.save({ ...existingObject, ...updatedObject });
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
      const existingObject = await this.doacaoRepository.findOne({ where: { codigo } });
      if (existingObject) {
        existingObject.situacao = 'INATIVO'; // Atualiza apenas a situação
        await this.doacaoRepository.save(existingObject);
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
      const existingObject = await this.doacaoRepository.findOne({ where: { codigo } });
      if (existingObject) {
        await this.doacaoRepository.remove(existingObject);
        return res.status(200).json({ message: "Object deleted successfully" });
      } else {
        return res.status(404).json({ error: "Object not found" });
      }
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

}

export default new doacaoController();
