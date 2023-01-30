import { Company } from '../models/Company';

export interface ICreateCompanyDTO {
  id?: string;
  name: string;
}

export interface IUpdateCompanyDTO {
  id?: string;
  name?: string;
}

export interface ICompanyRepository {
  create(data: ICreateCompanyDTO): Promise<void>;
  update(data: IUpdateCompanyDTO): Promise<void>;
  list(): Promise<Company[]>;
  findById(id: string): Promise<Company>;
  delete(id: string): Promise<void>;
}
