import { MongoUsersRepository } from '../../repositories/implementations/MongoUserRepository';

import { DeleteUserUseCase } from './DeleteUserUseCase';
import { DeleteUserController } from './DeleteUserController';

export default (): DeleteUserController => {
  const usersRepository = new MongoUsersRepository();
  const deleteUserUseCase = new DeleteUserUseCase(usersRepository);
  const deleteUserController = new DeleteUserController(deleteUserUseCase);

  return deleteUserController;
};
