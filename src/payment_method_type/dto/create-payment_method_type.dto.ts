import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreatePaymentMethodTypeDto {
  @IsNotEmpty()
  @MaxLength(100)
  name: string;
}
