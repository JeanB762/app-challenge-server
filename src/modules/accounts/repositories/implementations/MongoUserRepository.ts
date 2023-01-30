import UserSchema from '../../../../database/schemas/UserSchema';
import { ICreateUserDTO, IUserRepository } from '../IUserRepository';
import { User } from '../../models/User';
import { ErrorsHandler } from '../../../../errors/ErrorsHandler';
import mongoose from 'mongoose';

export class MongoUsersRepository implements IUserRepository {
  async create({
    id,
    name,
    email,
    password,
    role,
    avatar,
    companyId,
    unitId,
  }: ICreateUserDTO): Promise<void> {
    try {
      await UserSchema.create({
        id,
        name,
        email,
        password,
        role,
        avatar,
        companyId,
        unitId,
      });
    } catch (error) {
      throw new ErrorsHandler(`User creation error - ${error}`, 500);
    }
  }

  async update({
    id,
    name,
    email,
    password,
    role,
    avatar,
    companyId,
    unitId,
  }: ICreateUserDTO): Promise<void> {
    try {
      await UserSchema.findOneAndUpdate(
        { _id: new mongoose.Types.ObjectId(id) },
        {
          id,
          name,
          email,
          password,
          role,
          avatar,
          companyId,
          unitId,
        }
      );
    } catch (error) {
      throw new ErrorsHandler(`User update error - ${error}`, 500);
    }
  }

  async findById(id: string): Promise<User> {
    const user = await UserSchema.findOne({ _id: id });

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await UserSchema.findOne({ email });

    return user;
  }

  async list(): Promise<User[]> {
    const users = await UserSchema.find();

    return users;
  }

  async delete(id: string): Promise<void> {
    try {
      await UserSchema.findOneAndDelete({ _id: id });
    } catch (error) {
      throw new ErrorsHandler(`User delete error - ${error}`, 500);
    }
  }
}
