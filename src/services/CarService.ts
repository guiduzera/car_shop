import CarZodSchema from '../helpers/CarZodSchema';
import CustomError from '../helpers/CustomError';
import { ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import IService from '../interfaces/IService';

export default class CarService implements IService<ICar> {
  private carModel: IModel<ICar>;
  private lengthError: string;
  private notfoundError: string;

  constructor(model: IModel<ICar>) {
    this.carModel = model;
    this.lengthError = 'Id must have 24 hexadecimal characters';
    this.notfoundError = 'Object not found';
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
      throw new CustomError(this.lengthError, 400);
    }
    const oneCar = await this.carModel.readOne(str);
    if (!oneCar) {
      throw new CustomError(this.notfoundError, 404);
    }
    return oneCar;
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

  async delete(str: string): Promise<ICar | null> {
    if (str.length !== 24) {
      throw new CustomError(this.lengthError, 400);
    }
    const deletedCar = await this.carModel.delete(str);
    if (!deletedCar) {
      throw new CustomError(this.notfoundError, 404);
    }
    return deletedCar;
  }
}