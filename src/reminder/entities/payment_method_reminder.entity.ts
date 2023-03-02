import { PrimaryColumn, Entity } from 'typeorm';

@Entity()
export class PaymentMethodReminder {
  @PrimaryColumn()
  payment_method_id: string;

  @PrimaryColumn()
  reminder_id: string;
}
