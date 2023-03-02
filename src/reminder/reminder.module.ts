import { PaymentMethodReminder } from './entities/payment_method_reminder.entity';
import { PaymentMethodReminderService } from './payment_method_reminder.service';
import { PaymentMethodModule } from './../payment_method/payment_method.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ReminderService } from './reminder.service';
import { ReminderController } from './reminder.controller';
import { Reminder } from './entities/reminder.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Reminder, PaymentMethodReminder]),
    PaymentMethodModule,
  ],
  controllers: [ReminderController],
  providers: [ReminderService, PaymentMethodReminderService],
})
export class ReminderModule {}
