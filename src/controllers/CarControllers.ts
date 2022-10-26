import { ICar } from '../interfaces/ICar';
import IService from '../interfaces/IService';
import MongoController from './MongoController';

export default class CarController extends MongoController<ICar> {
  private carService: IService<ICar>;

  constructor(service: IService<ICar>) {
    super(service);
    this.carService = service;
  }
}