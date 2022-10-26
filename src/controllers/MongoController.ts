import { Request, Response } from 'express';
import IService from '../interfaces/IService';

abstract class MongoController<T> {
  protected mService: IService<T>;

  constructor(service: IService<T>) {
    this.mService = service;
  }

  create = async (
    req: Request,
    res: Response<T>,
  ): Promise<Response> => {
    const car = await this.mService.create(req.body);
    return res.status(201).json(car);
  };

  read = async (req: Request, res: Response): Promise<Response> => {
    const all = await this.mService.read();
    return res.status(200).json(all);
  };

  readOne = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const one = await this.mService.readOne(id);
    return res.status(200).json(one);
  };

  update = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const up = await this.mService.update(id, req.body);
    return res.status(200).json(up);
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    await this.mService.delete(id);
    return res.status(204).json();
  };
}

export default MongoController;