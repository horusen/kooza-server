import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateCreditLoanStatusDto {
  @IsNotEmpty()
  @MaxLength(100)
  name: string;
}
