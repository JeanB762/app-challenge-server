import { User } from '../../models/User';
import { IUserRepository } from '../../repositories/IUserRepository';

export class FindUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string): Promise<User> {
    const user = await this.userRepository.findById(id);
    return user;
  }
}
