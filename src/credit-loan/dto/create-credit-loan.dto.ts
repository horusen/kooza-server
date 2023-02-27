import { IsNotEmpty, IsDate } from 'class-validator';
export class CreateCreditLoanDto {
  @IsNotEmpty()
  businessId: string;

  @IsNotEmpty()
  customerId: string;

  @IsDate()
  dueDate: Date;
}
