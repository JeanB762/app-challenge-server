import { Request, Response } from 'express';
import { DeleteCompanyUseCase } from './DeleteCompanyUseCase';

export class DeleteCompanyController {
  constructor(private deleteCompanysUseCase: DeleteCompanyUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const company = await this.deleteCompanysUseCase.execute(id);

    return response.status(204).json(company);
  }
}
