import { IsNotEmpty, IsPhoneNumber, IsEmail } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsPhoneNumber('GH')
  phoneNumber: string;

  @IsEmail()
  emailAddress: string;
}
