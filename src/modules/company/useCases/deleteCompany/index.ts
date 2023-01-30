import { MongoCompanyRepository } from '../../repositories/implementations/MongoCompanyRepository';

import { DeleteCompanyUseCase } from './DeleteCompanyUseCase';
import { DeleteCompanyController } from './DeleteCompanyController';

export default (): DeleteCompanyController => {
  const companysRepository = new MongoCompanyRepository();
  const deleteCompanyUseCase = new DeleteCompanyUseCase(companysRepository);
  const deleteCompanyController = new DeleteCompanyController(
    deleteCompanyUseCase
  );

  return deleteCompanyController;
};
