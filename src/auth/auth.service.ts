/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {}
  signup() {}
}

const service = new AuthService();
