import { IsNotEmpty } from 'class-validator';
export class CreatePaymentMethodDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  payment_method_type_id: number;

  @IsNotEmpty()
  provider_name: string;

  @IsNotEmpty()
  account_number: string;

  @IsNotEmpty()
  business_id: string;
}
