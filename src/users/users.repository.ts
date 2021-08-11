import { User } from './user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  createDog = async (createUserDto: CreateUserDto) => {
    return await this.save(createUserDto);
  };
}