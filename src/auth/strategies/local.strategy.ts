import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { scryptSync } from 'crypto';
import { Strategy } from 'passport-local';
import { BusinessService } from 'src/business/business.service';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(
    public businessService: BusinessService,
    public authService: AuthService,
  ) {
    super({
      usernameField: 'identifier',
    });
  }

  async validate(identifier: string, password: string) {
    const business = await this.businessService.findOne({ identifier });

    if (!business) throw new UnprocessableEntityException('Business not found');

    const [salt, businessPassword] = business.password.split('.');

    if (businessPassword != scryptSync(password, salt, 32).toString())
      throw new UnprocessableEntityException('Invalid Password');

    return business;
  }
}
