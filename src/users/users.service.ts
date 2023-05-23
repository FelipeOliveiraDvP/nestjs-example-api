import { Injectable } from '@nestjs/common';
import { Role } from 'src/enums/role.enum';

export interface User {
  id: number;
  username: string;
  password: string;
  roles: Role[];
}

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      username: 'john',
      password: 'changeme',
      roles: [Role.Admin],
    },
    {
      id: 2,
      username: 'maria',
      password: 'guess',
      roles: [Role.Guest],
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
