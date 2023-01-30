import { MongoAssetRepository } from '../../repositories/implementations/MongoAssetsRepository';
import { UpdateAssetController } from './UpdateAssetController';
import { UpdateAssetUseCase } from './UpdatAssetUseCase';

export default (): UpdateAssetController => {
  const assetRepository = new MongoAssetRepository();
  const updateAssetUseCase = new UpdateAssetUseCase(assetRepository);
  const updateAssetController = new UpdateAssetController(updateAssetUseCase);

  return updateAssetController;
};
