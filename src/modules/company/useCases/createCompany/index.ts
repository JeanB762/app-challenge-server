import { MongoCompanyRepository } from '../../repositories/implementations/MongoCompanyRepository';

import { CreateCompanyController } from './CreateCompanyController';
import { CreateCompanyUseCase } from './CreateCompanyUseCase';

export default (): CreateCompanyController => {
  const CompanyRepository = new MongoCompanyRepository();
  const createCompanyUseCase = new CreateCompanyUseCase(CompanyRepository);
  const createCompanyController = new CreateCompanyController(
    createCompanyUseCase
  );

  return createCompanyController;
};
