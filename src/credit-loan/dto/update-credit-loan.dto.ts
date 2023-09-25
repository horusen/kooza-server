import { PartialType } from '@nestjs/mapped-types';
import { CreateCreditLoanDto } from './create-credit-loan.dto';

export class UpdateCreditLoanDto extends PartialType(CreateCreditLoanDto) {}
