import {
  IsEmail,
  MinLength,
  IsNotEmpty,
  IsString,
  Equals,
} from 'class-validator';

export class RegisterRequestDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  password: string;

  @Equals('password')
  confirmPassword: string;
}
