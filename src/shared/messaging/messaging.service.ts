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

  sendCreditTakenMessage(credit?: CreditLoan) {
    // const message = `Congratulations!\n\nYou've just taken *${credit?.amount}* GHC on credit from *Asante & Asante Limited*.\n\nDon't forget to pay before *${credit?.due_date}*.\n\nMessage sent by *kooza*`;
    const message = `Hey *${
      credit.customer.name
    }*,\n\nCongrats on taking *${new Intl.NumberFormat('en-GH', {
      style: 'currency',
      currency: 'GHS',
    }).format(credit.amount)}* on credit from ${
      credit.business.name
    }!\n\nWe're excited to have you as a customer and can't wait to help you achieve your goals. If you need any assistance, just let us know. \nThanks for choosing us and we look forward to serving you!\n\nMessage sent by *kooza*`;

    this.sendWhatsappMessage(message);
  }

  sendCreditPaidMessage(credit: CreditLoan) {
    const message = `Hi *${
      credit.customer.name
    }*,\n\nCongratulations on paying off your *${new Intl.NumberFormat(
      'en-GH',
      {
        style: 'currency',
        currency: 'GHS',
      },
    ).format(credit.amount)}* debt to *${
      credit.business.name
    }*! We're thrilled to have you as a responsible and loyal customer, and we appreciate your trust and support. If you need any assistance or have any questions, just let us know. We're always here to help you. \n\nThanks for being awesome and we look forward to serving you in the future!\n\nMessage sent by *kooza*`;

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
