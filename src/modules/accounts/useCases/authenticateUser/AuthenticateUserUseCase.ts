import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { ErrorsHandler } from '../../../../errors/ErrorsHandler';

import { IUserRepository } from '../../repositories/IUserRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
    role: string;
  };
  token: string;
}

export class AuthenticateUserUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) throw new ErrorsHandler('Email or password incorrect', 400);

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch)
      throw new ErrorsHandler('Email or password incorrect', 400);

    const token = sign({}, '603efe5d016c96a27a00c76ad84aa9f9', {
      subject: user.id,
      expiresIn: '1d',
    });

    const tokenInfo: IResponse = {
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    };

    return tokenInfo;
  }
}
