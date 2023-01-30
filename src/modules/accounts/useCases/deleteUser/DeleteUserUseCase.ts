import { ErrorsHandler } from '../../../../errors/ErrorsHandler';
import { deleteFile } from '../../../../utils/file';
import { IUserRepository } from '../../repositories/IUserRepository';

export class DeleteUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string): Promise<void> {
    const userExists = await this.userRepository.findById(id);

    if (!userExists) throw new ErrorsHandler(`User does not exist`, 400);

    if (userExists.avatar) await deleteFile(`./uploads/avatar/${userExists.avatar}`);

    await this.userRepository.delete(id);
  }
}
