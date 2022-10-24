import CarZodSchema from '../helpers/CarZodSchema';
import { ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import IService from '../interfaces/IService';

export default class CarService implements IService<ICar> {
  private carModel: IModel<ICar>;

  constructor(model: IModel<ICar>) {
    this.carModel = model;
  }

  async create(obj: ICar): Promise<ICar> {
    const parsed = CarZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this.carModel.create(parsed.data);
  }

  async read(): Promise<ICar[]> {
    return this.carModel.read();
  }
}