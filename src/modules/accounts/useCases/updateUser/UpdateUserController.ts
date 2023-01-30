import { Request, Response } from 'express';
import { UpdateUserUseCase } from './UpdateUserUseCase';

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id: userId } = request.params;
    const { name, email, role, companyId, unitId } = request.body;
    const avatarFile = request.file?.filename;

    await this.updateUserUseCase.execute({
      id: userId,
      name,
      email,
      role,
      avatar: avatarFile,
      companyId,
      unitId,
    });

    return response.status(204).send();
  }
}
