import { deleteFile } from '../../../../utils/file';
import { IUserRepository } from '../../repositories/IUserRepository';

interface IRequest {
  id?: string;
  name?: string;
  email?: string;
  role?: string;
  avatar?: string;
  unitId: string;
  companyId: string;
}

export class UpdateUserUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute({
    id,
    name,
    email,
    role,
    avatar,
    companyId,
    unitId,
  }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(id);
    if (user.avatar) await deleteFile(`./uploads/avatar/${user.avatar}`);

    await this.usersRepository.update({
      id,
      name,
      email,
      role,
      avatar,
      companyId,
      unitId,
    });
  }
}
