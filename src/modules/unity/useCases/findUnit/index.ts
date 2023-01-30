import { MongoUnitRepository } from '../../repositories/implementations/MongoUnitRepository';

import { FindUnitUseCase } from './FindUnitUseCase';
import { FindUnitController } from './FindUnitController';

export default (): FindUnitController => {
  const unitRepository = new MongoUnitRepository();
  const findUnitUseCase = new FindUnitUseCase(unitRepository);
  const findUnitController = new FindUnitController(findUnitUseCase);

  return findUnitController;
};
