import { IsInt, Validate } from 'class-validator';
import { BusinessType } from 'src/business-type/entities/business-type.entity';
import { IsNotEmpty, Allow, MaxLength, IsEmail } from 'class-validator';
import { Exists } from 'src/shared/validators/exists.validator';
import { SameValue } from 'src/shared/validators/same-value.validator';

export class CreateBusinessDto {
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsNotEmpty()
  businessTypeId: number;

  @Allow()
  location: string;

  @IsEmail()
  emailAddress: string;

  @IsNotEmpty()
  identifier: string;

  @SameValue('passwordConfirmation')
  password: string;

  @IsNotEmpty()
  passwordConfirmation: string;
}
