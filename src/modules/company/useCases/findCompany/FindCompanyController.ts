import { Request, Response } from 'express';
import { FindCompanyUseCase } from './FindCompanyUseCase';

export class FindCompanyController {
  constructor(private listCompanysUseCase: FindCompanyUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const company = await this.listCompanysUseCase.execute(id);

    if (!company)
      return response.status(400).json({ error: 'Company not found' });

    return response.status(200).json(company);
  }
}
