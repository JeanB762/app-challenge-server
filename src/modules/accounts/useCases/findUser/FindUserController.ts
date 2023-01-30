import { Request, Response } from 'express';
import { FindUserUseCase } from './FindUserUseCase';

export class FindUserController {
  constructor(private listUsersUseCase: FindUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const user = await this.listUsersUseCase.execute(id);

    if (!user) return response.status(400).json({ error: 'User not found' });

    return response.status(200).json(user);
  }
}
