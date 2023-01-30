import { Router } from 'express';

import createCompanyController from '../modules/company/useCases/createCompany';
import updateCompanyController from '../modules/company/useCases/updateCompany';
import listCompaniesController from '../modules/company/useCases/listCompanies';
import findCompanyController from '../modules/company/useCases/findCompany';
import delteCompanyController from '../modules/company/useCases/deleteCompany';
import { ensureAuthentication } from '../middlewares/ensureAuth';

export const companiesRoutes = Router();

companiesRoutes.use(ensureAuthentication);

companiesRoutes.get('/', (request, response) => {
  return listCompaniesController().handle(request, response);
});

companiesRoutes.get('/:id', (request, response) => {
  return findCompanyController().handle(request, response);
});

companiesRoutes.post('/', (request, response) => {
  return createCompanyController().handle(request, response);
});

companiesRoutes.put('/:id', (request, response) => {
  return updateCompanyController().handle(request, response);
});

companiesRoutes.delete('/:id', (request, response) => {
  return delteCompanyController().handle(request, response);
});
