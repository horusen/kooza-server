import { Injectable } from '@nestjs/common';
import { CreatePaymentMethodTypeDto } from './dto/create-payment_method_type.dto';
import { UpdatePaymentMethodTypeDto } from './dto/update-payment_method_type.dto';

@Injectable()
export class PaymentMethodTypeService {
  create(createPaymentMethodTypeDto: CreatePaymentMethodTypeDto) {
    return 'This action adds a new paymentMethodType';
  }

  findAll() {
    return `This action returns all paymentMethodType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentMethodType`;
  }

  update(id: number, updatePaymentMethodTypeDto: UpdatePaymentMethodTypeDto) {
    return `This action updates a #${id} paymentMethodType`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentMethodType`;
  }
}
