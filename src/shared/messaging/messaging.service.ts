import { CreditLoan } from './../../credit-loan/entities/credit-loan.entity';
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

  sendWhatsappMessage(message: string) {
    this._sendMessage('whatsapp:', message);
  }

  sendCreditTakenMessage(credit: CreditLoan) {
    const message = `Congratulations! you've just taken ${credit.amount} GHC on credit from Asante & Asante Limited. Don't forget to pay before ${credit.due_date}.
    Message sent by kooza`;

    this.sendWhatsappMessage(message);
  }

  sendCreditPaidMessage(credit: CreditLoan) {
    const message = `
  Congratulations! you've payback the ${
    credit.amount
  } GHC credit you've taken from Asante & Asante Limited on ${Date.now()}.
    
  Thanks for your availability.
    
  Message sent by kooza`;

    this.sendWhatsappMessage(message);
  }

  private _sendMessage(prefix: string, message: string) {
    if (!prefix) prefix = '';
    this._client.messages.create({
      to:
        prefix + this.configService.getOrThrow('messaging.personalPhoneNumber'),
      from:
        prefix + this.configService.getOrThrow('messaging.providerPhoneNumber'),
      body: message || 'Sending a message from KOOZA successfully done!',
    });
  }
}
