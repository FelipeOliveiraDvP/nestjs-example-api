import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from 'src/core/providers/database.module';
import { usersProviders } from './users.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...usersProviders, UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
