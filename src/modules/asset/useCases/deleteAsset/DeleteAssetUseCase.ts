import { ErrorsHandler } from '../../../../errors/ErrorsHandler';
import { IAssetRepository } from '../../repositories/IAssetRepository';

export class DeleteAssetUseCase {
  constructor(private assetRepository: IAssetRepository) {}

  async execute(id: string): Promise<void> {
    const assetExists = await this.assetRepository.findById(id);

    if (!assetExists) throw new ErrorsHandler(`Asset does not exist`, 400);

    await this.assetRepository.delete(id);
  }
}
