import { MessagingService } from './../shared/messaging/messaging.service';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';
import { PaymentMethodReminder } from './entities/payment_method_reminder.entity';
import { PaymentMethod } from './../payment_method/entities/payment_method.entity';
import { PaymentMethodReminderService } from './payment_method_reminder.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentMethodService } from 'src/payment_method/payment_method.service';
import { BaseService } from 'src/shared/services/base.service';
import { Repository } from 'typeorm';
import { Reminder } from './entities/reminder.entity';
import { CustomMessageService } from 'src/custom-message/custom-message.service';

@Injectable()
export class ReminderService extends BaseService<Reminder> {
  constructor(
    @InjectRepository(Reminder)
    public repo: Repository<Reminder>,
    public customMessageService: CustomMessageService,
    public paymentMethodService: PaymentMethodService,
    public paymentMethodReminderService: PaymentMethodReminderService,
    public schedulerRegistry: SchedulerRegistry,
    public messagingService: MessagingService,
  ) {
    super(repo);
  }

  async create(createDTO: any) {
    const { payment_method_ids, ...reminderData } = createDTO;

    const reminder = await this.repo.save(reminderData);

    payment_method_ids.forEach(async (element: PaymentMethod) => {
      await this.paymentMethodReminderService.create({
        payment_method_id: element,
        reminder_id: reminder.id,
      });
    });

    this.sendReminderMessage(
      reminder.id,
      reminder.date,
      (await this.customMessageService.findOne(reminder.custom_message_id))
        .message,
    );

    return reminder;
  }

  sendReminderMessage(name: string, date: Date, message: string) {
    const job = new CronJob(new Date(date), () => {
      this.messagingService.sendWhatsappMessage(message);
      console.log('Delivered');
    });

    this.schedulerRegistry.addCronJob(name, job);
    job.start();

    return 'Done';
  }
}
