import { Injectable } from '@nestjs/common';
import { CreateCreditLoanStatusDto } from './dto/create-credit-loan-status.dto';
import { UpdateCreditLoanStatusDto } from './dto/update-credit-loan-status.dto';

@Injectable()
export class CreditLoanStatusService {
  create(createCreditLoanStatusDto: CreateCreditLoanStatusDto) {
    return 'This action adds a new creditLoanStatus';
  }

  findAll() {
    return `This action returns all creditLoanStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} creditLoanStatus`;
  }

  update(id: number, updateCreditLoanStatusDto: UpdateCreditLoanStatusDto) {
    return `This action updates a #${id} creditLoanStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} creditLoanStatus`;
  }
}
