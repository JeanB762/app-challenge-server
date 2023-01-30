import { Request, Response } from 'express';
import { ListCompaniesUseCase } from './ListCompaniesUseCase';

export class ListCompaniesController {
  constructor(private listCompaniesUseCase: ListCompaniesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const companies = await this.listCompaniesUseCase.execute();

    return response.status(200).json(companies);
  }
}
