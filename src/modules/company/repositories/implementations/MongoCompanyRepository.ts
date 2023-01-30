import CompanySchema from '../../../../database/schemas/CompanySchema';
import { ICreateCompanyDTO, ICompanyRepository } from '../ICompanyRepository';
import { Company } from '../../models/Company';
import { ErrorsHandler } from '../../../../errors/ErrorsHandler';

export class MongoCompanyRepository implements ICompanyRepository {
  async create({ id, name }: ICreateCompanyDTO): Promise<void> {
    try {
      await CompanySchema.create({
        id,
        name,
      });
    } catch (error) {
      throw new ErrorsHandler(`Company creation error - ${error}`, 500);
    }
  }

  async update({ id, name }: ICreateCompanyDTO): Promise<void> {
    try {
      await CompanySchema.findOneAndUpdate(
        { _id: id },
        {
          id,
          name,
        }
      );
    } catch (error) {
      throw new ErrorsHandler(`Company update error - ${error}`, 500);
    }
  }

  async findById(id: string): Promise<Company> {
    const company = await CompanySchema.findOne({ _id: id });

    return company;
  }

  async list(): Promise<Company[]> {
    const users = await CompanySchema.find();

    return users;
  }

  async delete(id: string): Promise<void> {
    try {
      await CompanySchema.findOneAndDelete({ _id: id });
    } catch (error) {
      throw new ErrorsHandler(`User delete error - ${error}`, 500);
    }
  }
}
