import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Timestamps } from './commons/timestamps';
import { Role } from './role.entity';
import { Token } from './token.entity';

@Entity()
export class User extends Timestamps {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 100 })
  password: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  phone: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  avatar: string;

  @Column({ type: 'boolean', default: false })
  active: boolean;

  @Column({ type: 'datetime', nullable: true })
  verifiedAt: Date;

  @OneToOne(() => Role)
  @JoinColumn()
  role: Role;

  @OneToMany(() => Token, (token) => token.user)
  tokens: Token[];
}
