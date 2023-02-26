import { PartialType } from '@nestjs/mapped-types';
import { CreateCreditLoanStatusDto } from './create-credit-loan-status.dto';

export class UpdateCreditLoanStatusDto extends PartialType(CreateCreditLoanStatusDto) {}
