import { InjectRepository } from '@nestjs/typeorm';
import { PaymentMethodType } from './entities/payment_method_type.entity';
import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/services/base.service';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentMethodTypeService extends BaseService<PaymentMethodType> {
  constructor(
    @InjectRepository(PaymentMethodType)
    public repo: Repository<PaymentMethodType>,
  ) {
    super(repo);
  }
}
