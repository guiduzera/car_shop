import CarZodSchema from '../helpers/CarZodSchema';
import CustomError from '../helpers/CustomError';
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

  async readOne(str: string): Promise<ICar | null> {
    if (str.length !== 24) {
      throw new CustomError('Id must have 24 hexadecimal characters', 400);
    }
    const oneCar = await this.carModel.readOne(str);
    if (!oneCar) {
      throw new CustomError('Object not found', 404);
    }
    return oneCar;
  }
}