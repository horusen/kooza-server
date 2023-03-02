import {
  IsNotEmpty,
  IsPhoneNumber,
  IsEmail,
  IsOptional,
} from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsPhoneNumber('GH')
  phone_number: string;

  @IsOptional()
  @IsEmail()
  email_address: string;

  @IsOptional()
  nin: string;
}
