import MotorcycleZodSchema from '../helpers/MotorcycleZodSchema';
import { IModel } from '../interfaces/IModel';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import IService from '../interfaces/IService';

export default class MotorcycleService implements IService<IMotorcycle> {
  private model: IModel<IMotorcycle>;

  constructor(model: IModel<IMotorcycle>) {
    this.model = model;
  }

  async create(obj: IMotorcycle): Promise<IMotorcycle> {
    const parsed = MotorcycleZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this.model.create(parsed.data);
  }

  async read(): Promise<IMotorcycle[]> {
    return this.model.read();
  }

  async readOne(str: string): Promise<IMotorcycle | null> {
    return this.model.readOne(str);
  }

  async update(str: string, obj: IMotorcycle): Promise<IMotorcycle | null> {
    return this.model.update(str, obj);
  }

  async delete(str: string): Promise<IMotorcycle | null> {
    return this.model.delete(str);
  }
}