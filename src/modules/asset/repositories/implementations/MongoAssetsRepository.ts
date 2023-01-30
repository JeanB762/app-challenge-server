import AssetSchema from '../../../../database/schemas/AssetSchema';
import { Asset } from '../../models/Asset';
import { ErrorsHandler } from '../../../../errors/ErrorsHandler';
import { IAssetRepository, ICreateAssetDTO } from '../IAssetRepository';

export class MongoAssetRepository implements IAssetRepository {
  async create({
    name,
    description,
    healthlevel,
    image,
    model,
    owner,
    status,
    companyId,
    responsibles,
    unitId,
  }: ICreateAssetDTO): Promise<void> {
    try {
      await AssetSchema.create({
        name,
        description,
        model,
        owner,
        status,
        healthlevel,
        image,
        companyId,
        responsibles,
        unitId,
      });
    } catch (error) {
      throw new ErrorsHandler(`Asset creation error - ${error}`, 500);
    }
  }

  async update({
    id,
    name,
    description,
    healthlevel,
    image,
    model,
    owner,
    status,
  }: ICreateAssetDTO): Promise<void> {
    try {
      await AssetSchema.findOneAndUpdate(
        { _id: id },
        {
          id,
          name,
          description,
          healthlevel,
          image,
          model,
          owner,
          status,
        }
      );
    } catch (error) {
      throw new ErrorsHandler(`Asset update error - ${error}`, 500);
    }
  }

  async findById(id: string): Promise<Asset> {
    const asset = await AssetSchema.findOne({ _id: id });

    return asset;
  }

  async findByName(name: string): Promise<Asset> {
    const asset = await AssetSchema.findOne({ name });
    return asset;
  }

  async list(): Promise<Asset[]> {
    const assets = await AssetSchema.find();

    return assets;
  }

  async delete(id: string): Promise<void> {
    try {
      await AssetSchema.findOneAndDelete({ _id: id });
    } catch (error) {
      throw new ErrorsHandler(`Asset delete error - ${error}`, 500);
    }
  }
}
