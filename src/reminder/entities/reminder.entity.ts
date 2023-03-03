import { PaymentMethod } from './../../payment_method/entities/payment_method.entity';
import { CreditLoan } from './../../credit-loan/entities/credit-loan.entity';
import {
  Column,
  Entity,
  ManyToOne,
  ManyToMany,
  JoinTable,
  JoinTableOptions,
} from 'typeorm';
import { BaseEntity } from 'src/shared/entities/base.entity';

@Entity()
export class Reminder extends BaseEntity {
  @Column()
  credit_loan_id: string;

  @Column({ type: 'timestamp' })
  date: Date;

  @Column({ nullable: true })
  maessage: string;

  @ManyToOne(() => CreditLoan, (creditLoan) => creditLoan.id, {})
  credit_loan: CreditLoan;

  @ManyToMany(() => PaymentMethod)
  @JoinTable({
    joinColumn: 'reminder_id',
    inverseJoinColumn: 'payment_method_id',
    name: 'payment_method_reminder',
    synchronize: false,
  } as JoinTableOptions)
  payment_methods: PaymentMethod[];
}
