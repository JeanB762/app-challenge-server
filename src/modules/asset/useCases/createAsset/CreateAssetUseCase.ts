import { ErrorsHandler } from '../../../../errors/ErrorsHandler';
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

export class CreateAssetUseCase {
  constructor(private assetRepository: IAssetRepository) {}

  async execute({
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
    const assetAlreadyExists = await this.assetRepository.findByName(name);

    if (assetAlreadyExists)
      throw new ErrorsHandler('Asset already exists', 400);

    await this.assetRepository.create({
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
