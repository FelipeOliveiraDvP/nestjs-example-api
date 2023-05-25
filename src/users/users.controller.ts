import { Controller, Post, Get } from '@nestjs/common';

import { UsersService } from './users.service';
import { Public } from 'src/core/decorators/public.decorator';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @Public()
  async findAll() {
    return this.usersService.findAll();
  }

  @Post()
  @Public()
  async create() {
    return 'Cadastrar um usuário';
  }
}
