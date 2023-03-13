import {
  Allow,
  IsNotEmpty,
  IsOptional,
  MinDate,
  IsDateString,
} from 'class-validator';
export class CreateReminderDto {
  // TODO: add a validator that ensures the date minimum date is today
  @IsDateString()
  // @MinDate(new Date('2023-02-02'))
  date: Date;

  @Allow()
  custom_message_id: string;

  @IsNotEmpty()
  credit_loan_id: string;

  @IsOptional()
  payment_method_ids: string[];
}
