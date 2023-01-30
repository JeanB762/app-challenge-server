import { MongoUsersRepository } from '../../repositories/implementations/MongoUserRepository';

import { ChangeAvatarUserController } from './ChangeAvatarUserController';
import { ChangeAvatarUserUseCase } from './ChangeAvatarUserUseCase';

export default (): ChangeAvatarUserController => {
  const usersRepository = new MongoUsersRepository();
  const changeAvatarUserUseCase = new ChangeAvatarUserUseCase(usersRepository);
  const changeAvatarUserController = new ChangeAvatarUserController(
    changeAvatarUserUseCase
  );

  return changeAvatarUserController;
};
