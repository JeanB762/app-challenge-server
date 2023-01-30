import { MongoCompanyRepository } from '../../repositories/implementations/MongoCompanyRepository';

import { ListCompaniesUseCase } from './ListCompaniesUseCase';
import { ListCompaniesController } from './ListCompaniesController';

export default (): ListCompaniesController => {
  const companiesRepository = new MongoCompanyRepository();
  const listCompaniesUseCase = new ListCompaniesUseCase(companiesRepository);
  const listCompaniesController = new ListCompaniesController(
    listCompaniesUseCase
  );

  return listCompaniesController;
};
