import { Company } from '../../models/Company';
import { ICompanyRepository } from '../../repositories/ICompanyRepository';

export class FindCompanyUseCase {
  constructor(private companyRepository: ICompanyRepository) {}

  async execute(id: string): Promise<Company> {
    const Company = await this.companyRepository.findById(id);
    return Company;
  }
}
