import { MongoAssetRepository } from '../../repositories/implementations/MongoAssetsRepository';

import { ListAssetsController } from './ListAssetsController';
import { ListAssetsUseCase } from './ListAssetsUseCase';

export default (): ListAssetsController => {
  const assetsRepository = new MongoAssetRepository();
  const listAssetsUseCase = new ListAssetsUseCase(assetsRepository);
  const listAssetsController = new ListAssetsController(listAssetsUseCase);

  return listAssetsController;
};
