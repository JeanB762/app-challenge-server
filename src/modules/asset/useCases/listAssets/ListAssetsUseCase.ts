import { Asset } from '../../models/Asset';
import { IAssetRepository } from '../../repositories/IAssetRepository';

export class ListAssetsUseCase {
  constructor(private assetsRepository: IAssetRepository) {}

  async execute(): Promise<Asset[]> {
    const assets = await this.assetsRepository.list();
    return assets;
  }
}
