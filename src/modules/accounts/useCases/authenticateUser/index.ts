import { MongoUsersRepository } from '../../repositories/implementations/MongoUserRepository';

import { AuthenticateUserController } from './AuthenticateUserController';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

export default (): AuthenticateUserController => {
  const usersRepository = new MongoUsersRepository();
  const authenticateUserUseCase = new AuthenticateUserUseCase(usersRepository);
  const authenticateUserController = new AuthenticateUserController(
    authenticateUserUseCase
  );

  return authenticateUserController;
};
