import { MongoUsersRepository } from '../../repositories/implementations/MongoUserRepository';

import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

export default (): CreateUserController => {
  const usersRepository = new MongoUsersRepository();
  const createUserUseCase = new CreateUserUseCase(usersRepository);
  const createUserController = new CreateUserController(createUserUseCase);

  return createUserController;
};
