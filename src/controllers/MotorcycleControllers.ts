import IService from '../interfaces/IService';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MongoController from './MongoController';

export default class MotorcycleController extends MongoController<IMotorcycle> {
  private motorcycleService: IService<IMotorcycle>;
  
  constructor(service: IService<IMotorcycle>) {
    super(service);
    this.motorcycleService = service;
  }
}