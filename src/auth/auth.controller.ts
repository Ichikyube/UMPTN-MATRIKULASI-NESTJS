/* eslint-disable @typescript-eslint/no-empty-function */
import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup() {
    return 'just signed up';
  }

  @Post('signin')
  login() {
    return 'just signed in';
  }
}
