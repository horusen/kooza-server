import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagingService } from './shared/messaging/messaging.service';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    public messagingService: MessagingService,
    public schedulerRegistry: SchedulerRegistry,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('set-reminder')
  setReminder() {
    const job = new CronJob(new Date('2023-03-12T14:38'), () => {
      this.messagingService.sendWhatsappMessage();
    });

    this.schedulerRegistry.addCronJob('reminder', job);
    job.start();

    return 'Done';
  }

  //216 450

  @Get('send-message')
  sendMessage(): string {
    this.messagingService.sendWhatsappMessage();
    return 'done';
  }
}
