import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import IService from '../interfaces/IService';

export default class CarController {
  private carService: IService<ICar>;

  constructor(service: IService<ICar>) {
    this.carService = service;
  }

  create = async (
    req: Request,
    res: Response<ICar>,
  ): Promise<Response | void> => {
    const car = await this.carService.create(req.body);
    return res.status(201).json(car);
  };
}