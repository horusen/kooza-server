import {
  Allow,
  IsNotEmpty,
  IsOptional,
  MinDate,
  IsDateString,
} from 'class-validator';
export class CreateReminderDto {
  @IsDateString()
  @MinDate(new Date('2023-02-02'))
  date: Date;

  @Allow()
  message: string;

  @IsNotEmpty()
  credit_loan_id: string;

  @IsOptional()
  payment_methods: string[];
}
