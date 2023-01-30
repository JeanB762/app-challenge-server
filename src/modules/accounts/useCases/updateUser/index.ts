import { MongoUsersRepository } from '../../repositories/implementations/MongoUserRepository';

import { UpdateUserController } from './UpdateUserController';
import { UpdateUserUseCase } from './UpdateUserUseCase';

export default (): UpdateUserController => {
  const usersRepository = new MongoUsersRepository();
  const updateUserUseCase = new UpdateUserUseCase(usersRepository);
  const updateUserController = new UpdateUserController(updateUserUseCase);

  return updateUserController;
};
