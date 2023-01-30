import { Unit } from '../../models/Unit';
import { IUnitRepository } from '../../repositories/IUnitRepository';

export class ListUnitsUseCase {
  constructor(private unitsRepository: IUnitRepository) {}

  async execute(): Promise<Unit[]> {
    const units = await this.unitsRepository.list();
    return units;
  }
}
