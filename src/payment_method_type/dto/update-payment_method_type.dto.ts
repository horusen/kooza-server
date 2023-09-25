import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentMethodTypeDto } from './create-payment_method_type.dto';

export class UpdatePaymentMethodTypeDto extends PartialType(CreatePaymentMethodTypeDto) {}
