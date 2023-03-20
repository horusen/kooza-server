import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  business_id: string;

  @IsNotEmpty()
  name: string;

  @IsNumber()
  unit_price: string;
}
