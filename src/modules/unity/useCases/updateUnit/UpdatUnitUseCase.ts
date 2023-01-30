import { IUnitRepository } from '../../repositories/IUnitRepository';

interface IRequest {
  id?: string;
  name?: string;
  companyId: string;
}

export class UpdateUnitUseCase {
  constructor(private unitRepository: IUnitRepository) {}

  async execute({ name, id, companyId }: IRequest): Promise<void> {
    await this.unitRepository.update({
      id,
      name,
      companyId,
    });
  }
}
