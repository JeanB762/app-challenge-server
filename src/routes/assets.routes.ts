import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

// import { ensureAuthentication } from '../middlewares/ensureAuth';

import createAssetController from '../modules/asset/useCases/createAsset';
import listAssetsController from '../modules/asset/useCases/listAssets';
import findAssetController from '../modules/asset/useCases/findAsset';
import updateAssetController from '../modules/asset/useCases/updateAsset';
import deleteAssetController from '../modules/asset/useCases/deleteAsset';
import { ensureAuthentication } from '../middlewares/ensureAuth';

export const assetsRoutes = Router();

const uploadAssetImage = multer(
  uploadConfig.upload('./uploads/assetsPictures')
);

assetsRoutes.use(ensureAuthentication);

assetsRoutes.get('/', (request, response) => {
  return listAssetsController().handle(request, response);
});

assetsRoutes.get('/:id', (request, response) => {
  return findAssetController().handle(request, response);
});

assetsRoutes.post(
  '/',
  uploadAssetImage.single('image'),
  (request, response) => {
    return createAssetController().handle(request, response);
  }
);

assetsRoutes.put(
  '/:id',
  uploadAssetImage.single('image'),
  (request, response) => {
    return updateAssetController().handle(request, response);
  }
);

assetsRoutes.delete('/:id', (request, response) => {
  return deleteAssetController().handle(request, response);
});
