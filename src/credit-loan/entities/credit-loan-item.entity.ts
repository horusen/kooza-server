import { CreditLoan } from './credit-loan.entity';
import { BaseEntity } from 'src/shared/entities/base.entity';
import { Column, Entity, PrimaryColumn, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class CreditLoanItem {
  @PrimaryColumn()
  credit_loan_id: string;

  @PrimaryColumn()
  product_id: string;

  @Column({ type: 'int' })
  quantity: number;

  @JoinColumn({ name: 'credit_loan_id' })
  @ManyToOne(() => CreditLoan, (creditLoan) => creditLoan.id, {})
  credit_loan: CreditLoan;
}
