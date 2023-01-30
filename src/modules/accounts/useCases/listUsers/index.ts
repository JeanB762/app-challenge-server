import { MongoUsersRepository } from '../../repositories/implementations/MongoUserRepository';

import { ListUsersUseCase } from './ListUsersUseCase';
import { ListUsersController } from './ListUsersController';

export default (): ListUsersController => {
  const usersRepository = new MongoUsersRepository();
  const listUsersUseCase = new ListUsersUseCase(usersRepository);
  const listUsersController = new ListUsersController(listUsersUseCase);

  return listUsersController;
};
