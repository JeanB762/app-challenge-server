import { ErrorsHandler } from '../../../../errors/ErrorsHandler';
import { ICompanyRepository } from '../../repositories/ICompanyRepository';

export class DeleteCompanyUseCase {
  constructor(private companyRepository: ICompanyRepository) {}

  async execute(id: string): Promise<void> {
    const CompanyExists = await this.companyRepository.findById(id);

    if (!CompanyExists) throw new ErrorsHandler(`Company does not exist`, 400);

    await this.companyRepository.delete(id);
  }
}
