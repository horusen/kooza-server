import { InjectRepository } from '@nestjs/typeorm';
import { PaymentMethod } from './entities/payment_method.entity';
import { BaseService } from './../shared/services/base.service';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PaymentMethodBusinessService } from './payment_method_business.service';

@Injectable()
export class PaymentMethodService extends BaseService<PaymentMethod> {
  constructor(
    @InjectRepository(PaymentMethod) public repo: Repository<PaymentMethod>,
    public paymentMethodBusiness: PaymentMethodBusinessService,
  ) {
    super(repo);
  }

  async create(createPaymentMethodDTO: any) {
    const paymentMethod = await this.repo.save(createPaymentMethodDTO);
    console.log(paymentMethod);

    const test = await this.paymentMethodBusiness.create({
      business_id: createPaymentMethodDTO.business_id,
      payment_method_id: paymentMethod.id,
    });

    console.log(test);

    return paymentMethod;
  }
}
