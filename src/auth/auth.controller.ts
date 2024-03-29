import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

import { AuthDto } from './dto';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() dto: AuthDto) {
    return this.authService.login(dto);
  }

  @Post('register')
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }
}
