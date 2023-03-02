import { CreateBusinessDto } from './../business/dto/create-business.dto';
import { Business } from './../business/entities/business.entity';
import { BusinessService } from 'src/business/business.service';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { randomBytes, scryptSync } from 'crypto';
import { JwtService } from '@nestjs/jwt';
import { DeepPartial } from 'typeorm';

const RANDOM_BYTE_LENGTH = 8;
const SCRYPT_HASH_LENGTH = 32;

@Injectable()
export class AuthService {
  public constructor(
    public businessService: BusinessService,
    public jwtService: JwtService,
  ) {}

  login(business: Business) {
    const payload = { business, sub: business.id };
    return { business, accessToken: this.jwtService.sign(payload) };
  }

  public async signup(business: CreateBusinessDto) {
    const _business = await this.businessService.findOne({
      identifier: business.identifier,
    });
    if (_business)
      throw new UnprocessableEntityException(
        'This identifier already exists existe déjà',
      );

    const hashedPassword = this.hashPassword(business.password);

    return this.businessService.create({
      ...business,
      password: hashedPassword,
    });
  }

  public async signin(identifier: string, password: string) {
    const business = await this.businessService.findOne({ identifier });

    if (!business)
      throw new UnprocessableEntityException('business is not found');

    const [salt, businessPassword] = business.password.split('.');

    if (
      businessPassword !=
      scryptSync(password, salt, SCRYPT_HASH_LENGTH).toString()
    )
      throw new UnprocessableEntityException('Invalid Password');

    return business;
  }

  public hashPassword(password: string, salt?: string): string {
    salt = salt || randomBytes(RANDOM_BYTE_LENGTH).toString('hex');
    const cryptedPassword = scryptSync(password, salt, SCRYPT_HASH_LENGTH);
    return `${salt}.${cryptedPassword}`;
  }
}
