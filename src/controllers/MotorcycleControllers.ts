import { Request, Response } from 'express';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import IService from '../interfaces/IService';

export default class MotorcycleController {
  private motorcycleService: IService<IMotorcycle>;
  
  constructor(service: IService<IMotorcycle>) {
    this.motorcycleService = service;
  }

  create = async (req: Request, res: Response): Promise<Response> => {
    const motorcycle = await this.motorcycleService.create(req.body);
    return res.status(201).json(motorcycle);
  };

  read = async (req: Request, res: Response): Promise<Response> => {
    const motorcycles = await this.motorcycleService.read();
    return res.status(200).json(motorcycles);
  };
}