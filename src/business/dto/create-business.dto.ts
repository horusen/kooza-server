import { IsInt, Validate } from 'class-validator';
import {
  IsNotEmpty,
  Allow,
  MaxLength,
  IsEmail,
  IsOptional,
} from 'class-validator';
import { Exists } from 'src/shared/validators/exists.validator';
import { SameValue } from 'src/shared/validators/same-value.validator';

export class CreateBusinessDto {
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsNotEmpty()
  business_type_id: number;

  @Allow()
  location: string;

  @IsOptional()
  @IsEmail()
  email_address: string;

  @IsNotEmpty()
  identifier: string;

  @IsNotEmpty()
  @SameValue('password_confirmation')
  password: string;

  @Allow()
  password_confirmation: string;
}
