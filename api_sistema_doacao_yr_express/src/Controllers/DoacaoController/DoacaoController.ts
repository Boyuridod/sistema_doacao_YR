import { Request, Response } from "express";
import { Repository } from "typeorm";
import Doacao from "../../Models/Doacao/Doacao";
import Doador from "../../Models/Doador/Doador";
import logger from "../../Log/logger";
import { AppDataSource } from "../../Database/data-source";

class DoacaoController {

  private doacaoRepository: Repository<Doacao>;
  private doadorRepository: Repository<Doador>;

  constructor() {
    this.doacaoRepository = AppDataSource.getRepository(Doacao);
    this.doadorRepository = AppDataSource.getRepository(Doador);

    // Bind the context of 'this' to the methods
    this.insert = this.insert.bind(this);
    this.getOne = this.getOne.bind(this);
    this.getOneById = this.getOneById.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.updateSituacao = this.updateSituacao.bind(this);
  }

  public async insert(req: Request, res: Response) {
    try {
      const { doador, volume, data, hora } = req.body;
      const doadorCodigo = parseInt(doador, 10); // Convertendo doador para número
      const doadorEntity = await this.doadorRepository.findOne({ where: { codigo: doadorCodigo } });
      if (!doadorEntity) {
        return res.status(404).json({ error: "Doador não encontrado" });
      }

      const newDoacao = this.doacaoRepository.create({
        doador: doadorEntity,
        volume,
        data,
        hora
      });

      const savedDoacao = await this.doacaoRepository.save(newDoacao);
      return res.status(200).json(savedDoacao);
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

      query.andWhere(`doacao.situacao != :situacao`, { situacao: 'INATIVO' });

      const objectArray = await query.setParameters(params).getMany();
      return res.json(objectArray);

    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getFromDate(req: Request, res: Response) {
    try {
        const { startDate, endDate } = req.body;

        if (!startDate || !endDate) {
            return res.status(400).json({ error: "Start date and end date are required" });
        }

        const start = new Date(startDate as string);
        const end = new Date(endDate as string);

        if (isNaN(start.getTime()) || isNaN(end.getTime())) {
            return res.status(400).json({ error: "Invalid date format" });
        }

        const query = this.doacaoRepository.createQueryBuilder('doacao')
            .where('doacao.data >= :startDate', { startDate: start.toISOString() })
            .andWhere('doacao.data <= :endDate', { endDate: end.toISOString() })
            .andWhere('doacao.situacao != :situacao', { situacao: 'INATIVO' });

        const doacoes = await query.getMany();

        return res.json(doacoes);
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
  
  async getDoadorById(req: Request, res: Response) {
    try {
      const codigo = parseInt(req.params.codigo); // Convertendo código para número
      const doador = await this.doadorRepository.findOne({ where: { codigo }, relations: ["doacoes"] });
      if (doador) {
        return res.json(doador);
      } else {
        return res.status(404).json({ error: "Doador não encontrado" });
      }
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
        const codigo: number = parseInt(req.body.codigo);
        const updatedObject = req.body as Doacao;
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
        existingObject.situacao = 'INATIVO';
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

export default new DoacaoController();
