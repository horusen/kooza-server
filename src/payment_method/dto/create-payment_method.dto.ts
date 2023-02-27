import { IsNotEmpty } from 'class-validator';
export class CreatePaymentMethodDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  paymentMethodId: number;

  @IsNotEmpty()
  providerName: string;

  @IsNotEmpty()
  accountNumber: string;
}
