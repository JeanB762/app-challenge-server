import { Request, Response } from 'express';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

export class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { password, email } = request.body;

    const token = await this.authenticateUserUseCase.execute({
      email,
      password,
    });

    return response.json(token);
  }
}
