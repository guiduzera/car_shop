import CustomError from '../helpers/CustomError';
import { IModel } from '../interfaces/IModel';
import IService from '../interfaces/IService';

abstract class MongoService<T> implements IService<T> {
  protected Gmodel: IModel<T>;
  protected lengthError: string;
  protected notfoundError: string;

  constructor(model: IModel<T>) {
    this.Gmodel = model;
    this.lengthError = 'Id must have 24 hexadecimal characters';
    this.notfoundError = 'Object not found';
  }

  async create(obj: T): Promise<T> {
    return this.Gmodel.create(obj);
  }

  async read(): Promise<T[]> {
    return this.Gmodel.read();
  }

  async readOne(str: string): Promise<T | null> {
    if (str.length !== 24) {
      throw new CustomError(this.lengthError, 400);
    }
    const one = await this.Gmodel.readOne(str);
    if (!one) {
      throw new CustomError(this.notfoundError, 404);
    }
    return one;
  }

  async update(str: string, obj: T): Promise<T | null> {
    if (str.length !== 24) {
      throw new CustomError(this.lengthError, 400);
    }
    const updated = await this.Gmodel.update(str, obj);
    if (!updated) {
      throw new CustomError(this.notfoundError, 404);
    }
    return updated;
  }

  async delete(str: string): Promise<T | null> {
    if (str.length !== 24) {
      throw new CustomError(this.lengthError, 400);
    }
    const deleted = await this.Gmodel.delete(str);
    if (!deleted) {
      throw new CustomError(this.notfoundError, 404);
    }
    return deleted;
  }
}

export default MongoService;