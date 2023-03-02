import { PaymentMethod } from './../payment_method/entities/payment_method.entity';
import { PaymentMethodReminderService } from './payment_method_reminder.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentMethodService } from 'src/payment_method/payment_method.service';
import { BaseService } from 'src/shared/services/base.service';
import { Repository } from 'typeorm';
import { Reminder } from './entities/reminder.entity';

@Injectable()
export class ReminderService extends BaseService<Reminder> {
  constructor(
    @InjectRepository(Reminder)
    public repo: Repository<Reminder>,
    public paymentMethodService: PaymentMethodService,
    public paymentMethodReminderService: PaymentMethodReminderService,
  ) {
    super(repo);
  }

  async create(createDTO: any) {
    const { payment_methods, ...reminderData } = createDTO;

    const reminder = await this.repo.save(reminderData);

    payment_methods.forEach(async (element: PaymentMethod) => {
      await this.paymentMethodReminderService.create({
        payment_method_id: element,
        reminder_id: reminder.id,
      });
    });
    return reminder;
    // return createDTO();
  }
}
