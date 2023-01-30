import { Unit } from '../models/Unit';

export interface ICreateUnitDTO {
  id?: string;
  name: string;
  companyId: string;
}

export interface IUpdateUnitDTO {
  id?: string;
  name: string;
  companyId: string;
}

export interface IUnitRepository {
  create(data: ICreateUnitDTO): Promise<void>;
  update(data: IUpdateUnitDTO): Promise<void>;
  list(): Promise<Unit[]>;
  findById(id: string): Promise<Unit>;
  delete(id: string): Promise<void>;
}
