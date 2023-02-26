import { CreditLoanStatus } from './../../credit-loan-status/entities/credit-loan-status.entity';
import { Customer } from './../../customer/entities/customer.entity';
import { Business } from './../../business/entities/business.entity';
import { Column, Entity, Timestamp, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/shared/entities/base.entity';

@Entity()
export class CreditLoan extends BaseEntity {
  @JoinColumn({ name: 'business_id' })
  @ManyToOne(() => Business, (business: Business) => business.id)
  business: Business;

  @JoinColumn({ name: 'customer_id' })
  @ManyToOne(() => Customer, (customer: Customer) => customer.id)
  customer: Customer;

  @Column({ name: 'due_date', type: 'timestamptz' })
  dueDate: Date;

  @JoinColumn({ name: 'credit_loan_status_id' })
  @ManyToOne(
    () => CreditLoanStatus,
    (credit_loan_status: CreditLoanStatus) => credit_loan_status.id,
  )
  creditLoanStatus: CreditLoanStatus;
}
