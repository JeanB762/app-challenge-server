import { deleteFile } from '../../../../utils/file';
import { IUserRepository } from '../../repositories/IUserRepository';

interface IRequest {
  userId: string;
  avatarFile: string;
}

export class ChangeAvatarUserUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute({ userId, avatarFile }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(userId);

    if (user.avatar) await deleteFile(`./uploads/avatar/${user.avatar}`);

    user.avatar = avatarFile;

    await this.usersRepository.update(user);
  }
}
