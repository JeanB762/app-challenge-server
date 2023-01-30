import { MongoAssetRepository } from '../../repositories/implementations/MongoAssetsRepository'; 
import { FindAssetUseCase } from './FindAssetUseCase';
import { FindAssetController } from './FindAssetController';

export default (): FindAssetController => {
  const assetRepository = new MongoAssetRepository();
  const findAssetUseCase = new FindAssetUseCase(assetRepository);
  const findAssetController = new FindAssetController(findAssetUseCase);

  return findAssetController;
};
