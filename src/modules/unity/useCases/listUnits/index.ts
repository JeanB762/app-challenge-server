import { MongoUnitRepository } from '../../repositories/implementations/MongoUnitRepository';

import { ListUnitsUseCase } from './ListUnitsUseCase';
import { ListUnitsController } from './ListUnitsController';

export default (): ListUnitsController => {
  const unitsRepository = new MongoUnitRepository();
  const listUnitsUseCase = new ListUnitsUseCase(unitsRepository);
  const listUnitsController = new ListUnitsController(listUnitsUseCase);

  return listUnitsController;
};
