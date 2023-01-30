import { MongoUnitRepository } from '../../repositories/implementations/MongoUnitRepository';

import { DeleteUnitUseCase } from './DeleteUnitUseCase';
import { DeleteUnitController } from './DeleteUnitController';

export default (): DeleteUnitController => {
  const unitsRepository = new MongoUnitRepository();
  const deleteUnitUseCase = new DeleteUnitUseCase(unitsRepository);
  const deleteUnitController = new DeleteUnitController(
    deleteUnitUseCase
  );

  return deleteUnitController;
};
