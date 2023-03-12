import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Twilio } from 'twilio';

@Injectable()
export class MessagingService {
  private _client: Twilio;

  constructor(public configService: ConfigService) {
    this._client = new Twilio(
      this.configService.get('messaging.accountId'),
      this.configService.get('messaging.authToken'),
    );
  }

  sendWhatsappMessage() {
    this._sendMessage('whatsapp:');
  }

  private _sendMessage(prefix: string) {
    this._client.messages.create({
      to:
        prefix + this.configService.getOrThrow('messaging.personalPhoneNumber'),
      from:
        prefix + this.configService.getOrThrow('messaging.providerPhoneNumber'),
      body: 'Sending a message from KOOZA successfully done!',
    });
  }
}
