import { CreditLoanItem } from './entities/credit-loan-item.entity';
import { BaseService } from 'src/shared/services/base.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class CreditLoanItemService extends BaseService<CreditLoanItem> {
  constructor(
    @InjectRepository(CreditLoanItem)
    public repo: Repository<CreditLoanItem>,
  ) {
    super(repo);
  }
}
