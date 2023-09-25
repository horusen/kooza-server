import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/shared/services/base.service';
import { Repository } from 'typeorm';
import { PaymentMethodBusiness } from './entities/payment_method_business.entity';

@Injectable()
export class PaymentMethodBusinessService extends BaseService<PaymentMethodBusiness> {
  constructor(
    @InjectRepository(PaymentMethodBusiness)
    public repo: Repository<PaymentMethodBusiness>,
  ) {
    super(repo);
  }
}
