import { MessagingService } from './../shared/messaging/messaging.service';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';
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

    const customMessage = (
      await this.customMessageService.findOne(reminder.custom_message_id)
    ).message;

    const message = payment_method_ids.length
      ? this.customizeMessage(
          customMessage,
          await this.paymentMethodService.findOne(payment_method_ids[0]),
        )
      : customMessage;

    this.sendReminderMessage(reminder.id, reminder.date, message);

    return reminder;
  }

  sendReminderMessage(name: string, date: Date, message: string) {
    this.messagingService.sendWhatsappMessage(message);
    // const job = new CronJob(new Date(date), () => {
    //   this.messagingService.sendWhatsappMessage(message);
    //   console.log('Delivered');
    // });

    // this.schedulerRegistry.addCronJob(name, job);
    // job.start();

    return 'Done';
  }

  customizeMessage(message: string, paymentMethod: PaymentMethod) {
    return `${message}\n\n*Payment methods*:\n- Provider name: ${paymentMethod.provider_name}\n- Account number: ${paymentMethod.account_number}
    `;
  }
}
