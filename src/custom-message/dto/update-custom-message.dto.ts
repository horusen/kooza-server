import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomMessageDto } from './create-custom-message.dto';

export class UpdateCustomMessageDto extends PartialType(CreateCustomMessageDto) {}
