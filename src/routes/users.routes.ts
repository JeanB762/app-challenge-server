import { Router } from 'express';
import multer from 'multer';

import { ensureAuthentication } from '../middlewares/ensureAuth';
import uploadConfig from '../config/upload';

import createUsersController from '../modules/accounts/useCases/createUser';
import updateUserController from '../modules/accounts/useCases/updateUser';
import listUsersController from '../modules/accounts/useCases/listUsers';
import findUserController from '../modules/accounts/useCases/findUser';
import delteUserController from '../modules/accounts/useCases/deleteUser';

export const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload('./uploads/avatar'));

usersRoutes.post('/', uploadAvatar.single('avatar'), (request, response) => {
  return createUsersController().handle(request, response);
});

usersRoutes.use(ensureAuthentication);

usersRoutes.get('/', (request, response) => {
  return listUsersController().handle(request, response);
});

usersRoutes.get('/:id', (request, response) => {
  return findUserController().handle(request, response);
});

usersRoutes.put('/:id', uploadAvatar.single('avatar'), (request, response) => {
  return updateUserController().handle(request, response);
});

usersRoutes.delete('/:id', (request, response) => {
  return delteUserController().handle(request, response);
});
