import { MongoUnitRepository } from '../../repositories/implementations/MongoUnitRepository';

import { CreateUnitController } from './CreateUnitController';
import { CreateUnitUseCase } from './CreateUnitUseCase';

export default (): CreateUnitController => {
  const unitRepository = new MongoUnitRepository();
  const createUnitUseCase = new CreateUnitUseCase(unitRepository);
  const createUnitController = new CreateUnitController(
    createUnitUseCase
  );

  return createUnitController;
};
