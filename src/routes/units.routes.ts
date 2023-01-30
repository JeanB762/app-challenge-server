import { Router } from 'express';

import createUnitController from '../modules/unity/useCases/createUnit';
import updateUnitController from '../modules/unity/useCases/updateUnit';
import listunitsController from '../modules/unity/useCases/listUnits';
import findUnitController from '../modules/unity/useCases/findUnit';
import delteUnitController from '../modules/unity/useCases/deleteUnit';
import { ensureAuthentication } from '../middlewares/ensureAuth';

export const unitsRoutes = Router();

unitsRoutes.use(ensureAuthentication);

unitsRoutes.get('/', (request, response) => {
  return listunitsController().handle(request, response);
});

unitsRoutes.get('/:id', (request, response) => {
  return findUnitController().handle(request, response);
});

unitsRoutes.post('/', (request, response) => {
  return createUnitController().handle(request, response);
});

unitsRoutes.put('/:id', (request, response) => {
  return updateUnitController().handle(request, response);
});

unitsRoutes.delete('/:id', (request, response) => {
  return delteUnitController().handle(request, response);
});
