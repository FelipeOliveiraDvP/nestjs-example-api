import { User } from 'src/core/entities/user.entity';
import { DataSource } from 'typeorm';

export const USERS_REPOSITORY = 'USERS_REPOSITORY';

export const usersProviders = [
  {
    provide: USERS_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['DATA_SOURCE'],
  },
];
