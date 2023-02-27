import { IsDate, MaxDate, Allow, IsNotEmpty } from 'class-validator';
export class CreateReminderDto {
  @IsDate()
  @MaxDate(new Date(Date.now()))
  date: Date;

  @Allow()
  message: string;

  @IsNotEmpty()
  creditLoanId: string;
}
