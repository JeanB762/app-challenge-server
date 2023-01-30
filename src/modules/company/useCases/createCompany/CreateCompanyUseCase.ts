import {
  ICreateCompanyDTO,
  ICompanyRepository,
} from '../../repositories/ICompanyRepository';

import { v4 as uuidV4 } from 'uuid';

export class CreateCompanyUseCase {
  constructor(private companyRepository: ICompanyRepository) {}

  async execute({ name }: ICreateCompanyDTO): Promise<void> {
    const companyId = uuidV4();

    await this.companyRepository.create({
      id: companyId,
      name,
    });
  }
}
