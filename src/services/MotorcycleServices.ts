import CustomError from '../helpers/CustomError';
import MotorcycleZodSchema from '../helpers/MotorcycleZodSchema';
import { IModel } from '../interfaces/IModel';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MongoService from './MongoService';

export default class MotorcycleService extends MongoService<IMotorcycle> {
  private mModel: IModel<IMotorcycle>;
    
  constructor(model: IModel<IMotorcycle>) {
    super(model);
    this.mModel = model;
  }

  async create(obj: IMotorcycle): Promise<IMotorcycle> {
    const parsed = MotorcycleZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this.mModel.create(parsed.data);
  }

  async update(str: string, obj: IMotorcycle): Promise<IMotorcycle | null> {
    if (str.length !== 24) {
      throw new CustomError(this.lengthError, 400);
    }
    const parsed = MotorcycleZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    const updated = await this.mModel.update(str, parsed.data);
    if (!updated) {
      throw new CustomError(this.notfoundError, 404);
    }
    return updated;
  }
}