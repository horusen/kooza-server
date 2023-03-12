import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagingService } from './shared/messaging/messaging.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    public messagingService: MessagingService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('send-message')
  sendMessage(): string {
    this.messagingService.sendWhatsappMessage();
    return 'done';
  }
}
