import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateBusinessTypeDto {
  @IsNotEmpty()
  @MaxLength(100)
  name: string;
}
