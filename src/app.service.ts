import { Injectable } from '@nestjs/common';
import { MessagingService } from './shared/messaging/messaging.service';

@Injectable()
export class AppService {
  constructor(public messagingService: MessagingService) {}
  getHello(): string {
    // this.messagingService.sendCreditTakenMessage();
    return 'Hello World!';
  }
}
