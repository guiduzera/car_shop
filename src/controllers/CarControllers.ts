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
  ): Promise<Response> => {
    const car = await this.carService.create(req.body);
    return res.status(201).json(car);
  };

  read = async (req: Request, res: Response): Promise<Response> => {
    const allCars = await this.carService.read();
    return res.status(200).json(allCars);
  };

  readOne = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const car = await this.carService.readOne(id);
    return res.status(200).json(car);
  };
}