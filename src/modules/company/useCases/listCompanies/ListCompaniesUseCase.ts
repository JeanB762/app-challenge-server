import { Company } from '../../models/Company';
import { ICompanyRepository } from '../../repositories/ICompanyRepository';

export class ListCompaniesUseCase {
  constructor(private companiesRepository: ICompanyRepository) {}

  async execute(): Promise<Company[]> {
    const companies = await this.companiesRepository.list();
    return companies;
  }
}
