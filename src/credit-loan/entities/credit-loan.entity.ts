import { CreditLoanStatus } from './../../credit-loan-status/entities/credit-loan-status.entity';
import { Customer } from './../../customer/entities/customer.entity';
import { Business } from './../../business/entities/business.entity';
import { Column, Entity, Timestamp, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/shared/entities/base.entity';

@Entity()
export class CreditLoan extends BaseEntity {
  @Column()
  business_id: string;

  @Column()
  customer_id: string;

  @Column()
  credit_loan_status_id: string;

  @Column({ name: 'due_date' })
  due_date: Date;

  @Column({ type: 'decimal' })
  amount: number;

  @ManyToOne(() => Business, (business: Business) => business.id)
  business: Business;

  @ManyToOne(() => Customer, (customer: Customer) => customer.id)
  customer: Customer;

  @JoinColumn({ name: 'credit_loan_status_id' })
  @ManyToOne(
    () => CreditLoanStatus,
    (credit_loan_status: CreditLoanStatus) => credit_loan_status.id,
  )
  creditLoanStatus: CreditLoanStatus;
}
