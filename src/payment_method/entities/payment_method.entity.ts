import { PaymentMethodType } from './../../payment_method_type/entities/payment_method_type.entity';
import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from 'src/shared/entities/base.entity';

@Entity()
export class PaymentMethod extends BaseEntity {
  @Column()
  name: string;

  @JoinColumn({ name: 'payment_method_type_id' })
  @ManyToOne(
    () => PaymentMethodType,
    (paymentMethodType: PaymentMethodType) => paymentMethodType.id,
  )
  paymentMethodtype: PaymentMethodType;

  @Column({ name: 'provider_name' })
  providerName: string;

  @Column({ name: 'account_number' })
  accountNumber: string;
}
