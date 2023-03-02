import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsDate,
  ValidateNested,
  IsDateString,
} from 'class-validator';
import { CreateCustomerDto } from 'src/customer/dto/create-customer.dto';
export class CreateCreditLoanDto {
  @IsNotEmpty()
  business_id: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateCustomerDto)
  customer: CreateCustomerDto;

  @IsNotEmpty()
  amount: number;

  @IsDateString()
  due_date: Date;
}
