import { Controller, Delete, Get } from '@nestjs/common';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/enums/role.enum';

@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return 'Lista de usuários';
  }

  @Delete()
  @Roles(Role.Admin)
  removeUser() {
    return 'Remover um usuário';
  }
}
