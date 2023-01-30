import { Request, Response } from 'express';
import { UpdateCompanyUseCase } from './UpdateUserUseCase';

export class UpdateCompanyController {
  constructor(private updateCompanyUseCase: UpdateCompanyUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name } = request.body;

    await this.updateCompanyUseCase.execute({ id, name });

    return response.status(204).send();
  }
}
