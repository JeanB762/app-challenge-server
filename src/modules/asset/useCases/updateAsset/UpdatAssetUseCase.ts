import { IAssetRepository } from '../../repositories/IAssetRepository';

interface IRequest {
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

export class UpdateAssetUseCase {
  constructor(private assetRepository: IAssetRepository) {}

  async execute({
    id,
    name,
    description,
    model,
    owner,
    status,
    healthlevel,
    image,
    companyId,
    responsibles,
    unitId,
  }: IRequest): Promise<void> {
    await this.assetRepository.update({
      id,
      name,
      description,
      model,
      owner,
      status,
      healthlevel,
      image,
      companyId,
      responsibles,
      unitId,
    });
  }
}
