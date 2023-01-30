import UnitSchema from '../../../../database/schemas/UnitSchema';
import { ICreateUnitDTO, IUnitRepository } from '../IUnitRepository';
import { Unit } from '../../models/Unit';
import { ErrorsHandler } from '../../../../errors/ErrorsHandler';

export class MongoUnitRepository implements IUnitRepository {
  async create({ name, companyId }: ICreateUnitDTO): Promise<void> {
    try {
      await UnitSchema.create({
        name,
        companyId,
      });
    } catch (error) {
      throw new ErrorsHandler(`Unit creation error - ${error}`, 500);
    }
  }

  async update({ id, name, companyId }: ICreateUnitDTO): Promise<void> {
    try {
      await UnitSchema.findOneAndUpdate(
        { _id: id },
        {
          id,
          name,
          companyId,
        }
      );
    } catch (error) {
      throw new ErrorsHandler(`Unit update error - ${error}`, 500);
    }
  }

  async findById(id: string): Promise<Unit> {
    const unit = await UnitSchema.findOne({ _id: id });

    return unit;
  }

  async list(): Promise<Unit[]> {
    const units = await UnitSchema.find();

    return units;
  }

  async delete(id: string): Promise<void> {
    try {
      await UnitSchema.findOneAndDelete({ _id: id });
    } catch (error) {
      throw new ErrorsHandler(`Unit delete error - ${error}`, 500);
    }
  }
}
