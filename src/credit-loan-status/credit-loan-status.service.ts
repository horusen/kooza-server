import { CreditLoanStatus } from './entities/credit-loan-status.entity';
import { Injectable } from '@nestjs/common';
import { CreateCreditLoanStatusDto } from './dto/create-credit-loan-status.dto';
import { UpdateCreditLoanStatusDto } from './dto/update-credit-loan-status.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from 'src/shared/services/base.service';

@Injectable()
export class CreditLoanStatusService extends BaseService<CreditLoanStatus> {
  constructor(
    @InjectRepository(CreditLoanStatus)
    public repo: Repository<CreditLoanStatus>,
  ) {
    super(repo);
  }
}
