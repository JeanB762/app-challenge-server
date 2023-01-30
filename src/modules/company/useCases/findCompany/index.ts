import { MongoCompanyRepository } from '../../repositories/implementations/MongoCompanyRepository';

import { FindCompanyUseCase } from './FindCompanyUseCase';
import { FindCompanyController } from './FindCompanyController';

export default (): FindCompanyController => {
  const companyRepository = new MongoCompanyRepository();
  const findCompanyUseCase = new FindCompanyUseCase(companyRepository);
  const findCompanyController = new FindCompanyController(findCompanyUseCase);

  return findCompanyController;
};
