import CarZodSchema from '../helpers/CarZodSchema';
import CustomError from '../helpers/CustomError';
import { ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import MongoService from './MongoService';

export default class CarService extends MongoService<ICar> {
  private carModel: IModel<ICar>;

  constructor(model: IModel<ICar>) {
    super(model);
    this.carModel = model;
  }

  async create(obj: ICar): Promise<ICar> {
    const parsed = CarZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this.carModel.create(parsed.data);
  }

  async update(str: string, obj: ICar): Promise<ICar | null> {
    if (str.length !== 24) {
      throw new CustomError(this.lengthError, 400);
    }
    const parsed = CarZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    const updatedCar = await this.carModel.update(str, parsed.data);
    if (!updatedCar) {
      throw new CustomError(this.notfoundError, 404);
    }
    return updatedCar;
  }
}