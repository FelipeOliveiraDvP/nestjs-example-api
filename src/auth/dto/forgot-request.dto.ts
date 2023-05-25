import { IsEmail, IsNotEmpty } from 'class-validator';

export class SendEmailRequestDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
