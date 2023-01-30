import { Asset } from '../models/Asset';

export interface ICreateAssetDTO {
  id?: string;
  name: string;
  description: string;
  model: string;
  owner: string;
  status: string;
  healthlevel: string;
  image?: string;
  companyId: string;
  unitId: string;
  responsibles: string[];
}

export interface IUpdateAssetDTO {
  id?: string;
  name?: string;
  description?: string;
  model?: string;
  owner?: string;
  status?: string;
  healthlevel?: string;
  image?: string;
  companyId: string;
  unitId: string;
  responsibles: string[];
}

export interface IAssetRepository {
  create(data: ICreateAssetDTO): Promise<void>;
  update(data: IUpdateAssetDTO): Promise<void>;
  list(): Promise<Asset[]>;
  findById(id: string): Promise<Asset>;
  findByName(name: string): Promise<Asset>;
  delete(id: string): Promise<void>;
}
