import { IsNotEmpty } from 'class-validator';
export class CreateCustomMessageDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  message: string;

  @IsNotEmpty()
  business_id: string;
}
