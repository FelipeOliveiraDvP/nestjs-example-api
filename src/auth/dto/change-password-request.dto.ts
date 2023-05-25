import { MinLength, IsNotEmpty, IsString, Equals } from 'class-validator';

export class ChangePasswordRequestDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  password: string;

  @Equals('password')
  confirmPassword: string;
}
