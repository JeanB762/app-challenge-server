import { MongoCompanyRepository } from '../../repositories/implementations/MongoCompanyRepository';
import { UpdateCompanyController } from './UpdateUserController';
import { UpdateCompanyUseCase } from './UpdateUserUseCase';

export default (): UpdateCompanyController => {
  const companyRepository = new MongoCompanyRepository();
  const updateCompanyUseCase = new UpdateCompanyUseCase(companyRepository);
  const updateCompanyController = new UpdateCompanyController(
    updateCompanyUseCase
  );

  return updateCompanyController;
};
