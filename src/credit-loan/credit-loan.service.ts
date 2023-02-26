import { Injectable } from '@nestjs/common';
import { CreateCreditLoanDto } from './dto/create-credit-loan.dto';
import { UpdateCreditLoanDto } from './dto/update-credit-loan.dto';

@Injectable()
export class CreditLoanService {
  create(createCreditLoanDto: CreateCreditLoanDto) {
    return 'This action adds a new creditLoan';
  }

  findAll() {
    return `This action returns all creditLoan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} creditLoan`;
  }

  update(id: number, updateCreditLoanDto: UpdateCreditLoanDto) {
    return `This action updates a #${id} creditLoan`;
  }

  remove(id: number) {
    return `This action removes a #${id} creditLoan`;
  }
}
