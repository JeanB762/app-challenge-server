import { MongoUsersRepository } from '../../repositories/implementations/MongoUserRepository';

import { FindUserUseCase } from './FindUserUseCase';
import { FindUserController } from './FindUserController';

export default (): FindUserController => {
  const usersRepository = new MongoUsersRepository();
  const findUserUseCase = new FindUserUseCase(usersRepository);
  const findUserController = new FindUserController(findUserUseCase);

  return findUserController;
};
