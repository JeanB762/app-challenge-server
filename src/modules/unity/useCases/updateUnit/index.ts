import { MongoUnitRepository } from '../../repositories/implementations/MongoUnitRepository';
import { UpdateUnitController } from './UpdateUnitController';
import { UpdateUnitUseCase } from './UpdatUnitUseCase';

export default (): UpdateUnitController => {
  const unitRepository = new MongoUnitRepository();
  const updateUnitUseCase = new UpdateUnitUseCase(unitRepository);
  const updateUnitController = new UpdateUnitController(
    updateUnitUseCase
  );

  return updateUnitController;
};
