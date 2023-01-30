import { Unit } from '../../models/Unit';
import { IUnitRepository } from '../../repositories/IUnitRepository';

export class FindUnitUseCase {
  constructor(private UnitRepository: IUnitRepository) {}

  async execute(id: string): Promise<Unit> {
    const unit = await this.UnitRepository.findById(id);
    return unit;
  }
}
