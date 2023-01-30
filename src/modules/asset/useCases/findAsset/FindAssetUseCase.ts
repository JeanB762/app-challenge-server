import { Asset } from '../../models/Asset';
import { IAssetRepository } from '../../repositories/IAssetRepository';

export class FindAssetUseCase {
  constructor(private assetRepository: IAssetRepository) {}

  async execute(id: string): Promise<Asset> {
    const asset = await this.assetRepository.findById(id);
    return asset;
  }
}
