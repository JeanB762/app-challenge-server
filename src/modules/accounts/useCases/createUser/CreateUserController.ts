import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, role, companyId, unitId } = request.body;
    const avatarFile = request.file?.filename || '';

    await this.createUserUseCase.execute({
      name,
      email,
      password,
      role,
      avatar: avatarFile,
      companyId,
      unitId,
    });

    return response.status(201).send();
  }
}
