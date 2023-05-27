import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/core/entities';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOneByEmail(email: string): Promise<User | null> {
    return null;
  }

  async findOneById(userId: string): Promise<User | null> {
    return null;
  }

  async create(): Promise<User | null> {
    return null;
  }

  async update(): Promise<User | null> {
    return null;
  }

  async delete(): Promise<null> {
    return null;
  }
}
