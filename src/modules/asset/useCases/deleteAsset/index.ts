import { MongoAssetRepository } from '../../repositories/implementations/MongoAssetsRepository';

import { DeleteAssetUseCase } from './DeleteAssetUseCase';
import { DeleteAssetController } from './DeleteAssetController';

export default (): DeleteAssetController => {
  const assetsRepository = new MongoAssetRepository();
  const deleteAssetUseCase = new DeleteAssetUseCase(assetsRepository);
  const deleteAssetController = new DeleteAssetController(deleteAssetUseCase);

  return deleteAssetController;
};
