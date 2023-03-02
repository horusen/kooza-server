import { PaymentMethodType } from './../../payment_method_type/entities/payment_method_type.entity';
import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from 'src/shared/entities/base.entity';

@Entity()
export class PaymentMethod extends BaseEntity {
  @Column()
  name: string;

  @Column()
  payment_method_type_id: string;

  @ManyToOne(
    (type) => PaymentMethodType,
    (paymentMethodType) => paymentMethodType.id,
  )
  paymentMethodtype: PaymentMethodType;

  @Column({ name: 'provider_name' })
  provider_name: string;

  @Column({ name: 'account_number' })
  account_number: string;
}
