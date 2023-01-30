import { Request, Response } from 'express';
import { CreateCompanyUseCase } from './CreateCompanyUseCase';

export class CreateCompanyController {
  constructor(private createCompanyUseCase: CreateCompanyUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    await this.createCompanyUseCase.execute({ name });

    return response.status(201).send();
  }
}
