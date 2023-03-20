import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  ValidateNested,
  IsDateString,
  IsOptional,
} from 'class-validator';

class ItemDTO {
  @IsNotEmpty()
  product_id: string;

  @IsNotEmpty()
  quantity: number;
}

export class CreateCreditLoanDto {
  @IsNotEmpty()
  business_id: string;

  @IsNotEmpty()
  customer_id: string;

  @IsNotEmpty()
  amount: number;

  @IsDateString()
  due_date: Date;

  @IsOptional()
  description: string;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ItemDTO)
  items: ItemDTO[];
}
