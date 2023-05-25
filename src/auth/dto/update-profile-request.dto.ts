import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UpdateProfileRequestDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  avatar?: string;

  @IsString()
  phone?: string;
}
