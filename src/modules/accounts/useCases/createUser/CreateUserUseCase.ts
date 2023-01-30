import { hash } from 'bcrypt';

import {
  ICreateUserDTO,
  IUserRepository,
} from '../../repositories/IUserRepository';
import { ErrorsHandler } from '../../../../errors/ErrorsHandler';

export class CreateUserUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute({
    name,
    email,
    password,
    role,
    avatar,
    companyId,
    unitId,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) throw new ErrorsHandler('User already exists', 400);

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      role,
      avatar,
      companyId,
      unitId,
    });
  }
}
