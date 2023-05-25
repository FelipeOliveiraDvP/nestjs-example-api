import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Patch,
  Put,
  Param,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from 'src/core/decorators';
import {
  ChangePasswordRequestDto,
  LoginRequestDto,
  RegisterRequestDto,
  SendEmailRequestDto,
} from './dto';
import { UpdateProfileRequestDto } from './dto/update-profile-request.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @Public()
  @HttpCode(HttpStatus.OK)
  login(@Body() loginRequestDto: LoginRequestDto) {
    return this.authService.login(loginRequestDto);
  }

  @Post('register')
  @Public()
  register(@Body() registerRequestDto: RegisterRequestDto) {
    return 'Registra um novo usuário e envia o e-mail de verificação';
  }

  @Post('forgot')
  @Public()
  @HttpCode(HttpStatus.OK)
  forgot(@Body() sendEmailRequestDto: SendEmailRequestDto) {
    return 'Enviar e-mail de recuperação de senha';
  }

  @Post('forgot/:token')
  @Public()
  @HttpCode(HttpStatus.OK)
  recovery(
    @Param('token') token: string,
    @Body() changePasswordRequestDto: ChangePasswordRequestDto,
  ) {
    return 'Valida o token, e altera a senha do usuário';
  }

  @Patch('verify/:userId')
  sendVerify(@Param('userId') userId: string) {
    return 'Envia um e-mail de verificação para um usuário inativo e não verificado.';
  }

  @Get('verify/:userId')
  verifyAccount(
    @Param('userId') userId: string,
    @Body() sendEmailRequestDto: SendEmailRequestDto,
  ) {
    return 'Verifica a conta, ativa o usuário e registra a data de verificação';
  }

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  refresh() {
    return 'Retorna um novo token de acesso para o usuário';
  }

  @Get('profile')
  getProfile() {
    return 'Retorna o perfil do usuário';
  }

  @Put('profile')
  updateProfile(@Body() updateProfileRequestDto: UpdateProfileRequestDto) {
    return 'Atualiza algumas informações do perfil';
  }

  @Put('password')
  changePassword(@Body() changePasswordRequestDto: ChangePasswordRequestDto) {
    return 'Atualiza a senha do usuário';
  }

  @Get('logout')
  logout() {
    return 'Cancelar o token e sair da conta';
  }
}
