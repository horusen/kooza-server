import { CustomMessage } from './../../custom-message/entities/custom-message.entity';
import { PaymentMethod } from './../../payment_method/entities/payment_method.entity';
import { CreditLoan } from './../../credit-loan/entities/credit-loan.entity';
import {
  Column,
  Entity,
  ManyToOne,
  ManyToMany,
  JoinTable,
  JoinTableOptions,
  JoinColumn,
} from 'typeorm';
import { BaseEntity } from 'src/shared/entities/base.entity';

@Entity()
export class Reminder extends BaseEntity {
  @Column()
  credit_loan_id: string;

  @Column({ type: 'timestamp' })
  date: Date;

  @Column({ nullable: true })
  custom_message_id: string;

  @JoinColumn({ name: 'custom_message_id' })
  @ManyToOne(() => CustomMessage, (customMessage) => customMessage.id, {
    eager: true,
  })
  custom_message: CustomMessage;

  @JoinColumn({ name: 'credit_loan_id' })
  @ManyToOne(() => CreditLoan, (creditLoan) => creditLoan.id, {})
  credit_loan: CreditLoan;

  @ManyToMany(() => PaymentMethod, { nullable: true, eager: true })
  @JoinTable({
    joinColumn: 'reminder_id',
    inverseJoinColumn: 'payment_method_id',
    name: 'payment_method_reminder',
    synchronize: false,
  } as JoinTableOptions)
  payment_methods: PaymentMethod[];
}
