import { AuthGuard } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LinkedinOauthGuard extends AuthGuard('linkedin') {
  constructor() {
    super({
      offline: true,
    });
  }
}
