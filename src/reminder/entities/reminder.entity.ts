import { PaymentMethod } from './../../payment_method/entities/payment_method.entity';
import { CreditLoan } from './../../credit-loan/entities/credit-loan.entity';
import {
  Column,
  Entity,
  Timestamp,
  JoinColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  JoinTableOptions,
} from 'typeorm';
import { BaseEntity } from 'src/shared/entities/base.entity';

@Entity()
export class Reminder extends BaseEntity {
  @Column({ type: 'timestamptz' })
  date: Date;

  @Column({ nullable: true })
  maessage: string;

  @ManyToOne(() => CreditLoan, (creditLoan) => creditLoan.id, {
    nullable: false,
  })
  creditLoan: CreditLoan;

  @ManyToMany(() => PaymentMethod)
  @JoinTable({
    joinColumn: 'reminer_id',
    inverseJoinColumn: 'payment_method_id',
    name: 'payment_method_reminder',
  } as JoinTableOptions)
  paymentMethods: PaymentMethod[];
}
