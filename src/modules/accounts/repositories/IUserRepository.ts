import { User } from '../models/User';

export interface ICreateUserDTO {
  id?: string;
  name: string;
  email: string;
  password: string;
  role?: string;
  avatar?: string;
  companyId?: string;
  unitId?: string;
}

export interface IUpdateUserDTO {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  role?: string;
  avatar?: string;
  companyId?: string;
  unitId?: string;
}

export interface IUserRepository {
  create(data: ICreateUserDTO): Promise<void>;
  update(data: IUpdateUserDTO): Promise<void>;
  list(): Promise<User[]>;
  findById(id: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
  delete(id: string): Promise<void>;
}
