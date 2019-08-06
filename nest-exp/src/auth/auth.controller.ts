import { Controller, Post, Body, ValidationPipe, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthCredentialsDTO } from './dto/authCredentials.dto';
import { AuthService } from './auth.service';
import { GetUser } from './getUser.decorator';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
  ) { }

  @Post('/signup')
  async signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDTO) {
    return await this.authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  async signIn(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDTO): Promise<{ accessToken: string }> {
    return await this.authService.signIn(authCredentialsDto);
  }
}
