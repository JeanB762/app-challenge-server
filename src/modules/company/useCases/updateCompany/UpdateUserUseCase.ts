import { ICompanyRepository } from '../../repositories/ICompanyRepository';

interface IRequest {
  id?: string;
  name?: string;
}

export class UpdateCompanyUseCase {
  constructor(private companysRepository: ICompanyRepository) {}

  async execute({ name, id }: IRequest): Promise<void> {
    const Company = await this.companysRepository.findById(id);

    await this.companysRepository.update({
      id,
      name,
    });
  }
}
