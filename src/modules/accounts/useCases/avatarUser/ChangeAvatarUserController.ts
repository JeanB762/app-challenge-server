import { Request, Response } from 'express';
import { ChangeAvatarUserUseCase } from './ChangeAvatarUserUseCase';

export class ChangeAvatarUserController {
  constructor(private changeAvatarUserUseCase: ChangeAvatarUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id: userId } = request.params;
    const avatarFile = request.file.filename;

    await this.changeAvatarUserUseCase.execute({ userId, avatarFile });

    return response.status(204).send();
  }
}
