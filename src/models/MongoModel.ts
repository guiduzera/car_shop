import { Model, UpdateQuery } from 'mongoose';
import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  protected schema: Model<T>;

  constructor(schema: Model<T>) {
    this.schema = schema;
  }

  async create(obj: T): Promise<T> {
    return this.schema.create({ ...obj });
  }

  async read(): Promise<T[]> {
    return this.schema.find({});
  }

  async readOne(str: string): Promise<T | null> {
    return this.schema.findOne({ _id: str });
  }

  async update(str: string, obj: T): Promise<T | null> {
    return this.schema
      .findByIdAndUpdate({ _id: str }, { ...obj } as UpdateQuery<T>, { new: true });
  }

  async delete(str: string): Promise<T | null> {
    return this.schema.findByIdAndDelete(str);
  }
}

export default MongoModel;