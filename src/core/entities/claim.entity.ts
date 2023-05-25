import {
  Column,
  Entity,
  ManyToOne,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Module } from './module.entity';
import { Role } from './role.entity';

@Entity()
export class Claim {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  value: string;

  @ManyToOne(() => Module, (module) => module.claims)
  module: Module;

  @ManyToMany(() => Role, (role) => role.claims)
  roles: Role[];
}
