import { PaymentMethodReminder } from './entities/payment_method_reminder.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from './../shared/services/base.service';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentMethodReminderService extends BaseService<PaymentMethodReminder> {
  constructor(
    @InjectRepository(PaymentMethodReminder)
    public repo: Repository<PaymentMethodReminder>,
  ) {
    super(repo);
  }
}
