import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { USERS_REPOSITORY } from './users.providers';
import { User } from 'src/core/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_REPOSITORY)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(email: string): Promise<User | null> {
    return this.usersRepository.findOne({
      where: {
        email: email,
      },
    });
  }
}
