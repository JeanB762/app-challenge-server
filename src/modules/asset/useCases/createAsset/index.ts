import { MongoAssetRepository } from '../../repositories/implementations/MongoAssetsRepository';

import { CreateAssetController } from './CreateAssetController';
import { CreateAssetUseCase } from './CreateAssetUseCase';

export default (): CreateAssetController => {
  const assetsRepository = new MongoAssetRepository();
  const createAssetUseCase = new CreateAssetUseCase(assetsRepository);
  const createAssetController = new CreateAssetController(createAssetUseCase);

  return createAssetController;
};
