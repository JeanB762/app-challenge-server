import { ErrorsHandler } from '../../../../errors/ErrorsHandler';
import { IUnitRepository } from '../../repositories/IUnitRepository';

export class DeleteUnitUseCase {
  constructor(private unitRepository: IUnitRepository) {}

  async execute(id: string): Promise<void> {
    const UnitExists = await this.unitRepository.findById(id);

    if (!UnitExists) throw new ErrorsHandler(`Unit does not exist`, 400);

    await this.unitRepository.delete(id);
  }
}
