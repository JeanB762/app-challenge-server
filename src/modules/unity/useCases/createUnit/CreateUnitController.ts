import { Request, Response } from 'express';
import { CreateUnitUseCase } from './CreateUnitUseCase';

export class CreateUnitController {
  constructor(private createUnitUseCase: CreateUnitUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, companyId } = request.body;

    await this.createUnitUseCase.execute({ name, companyId });

    return response.status(201).send();
  }
}
