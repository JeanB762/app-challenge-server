import {
  ICreateUnitDTO,
  IUnitRepository,
} from '../../repositories/IUnitRepository';

import { v4 as uuidV4 } from 'uuid';

export class CreateUnitUseCase {
  constructor(private unitRepository: IUnitRepository) {}

  async execute({ name, companyId }: ICreateUnitDTO): Promise<void> {
    const UnitId = uuidV4();

    await this.unitRepository.create({
      id: UnitId,
      name,
      companyId,
    });
  }
}
