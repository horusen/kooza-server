import { MessagingModule } from 'src/shared/messaging/messaging.module';
import { CreditLoanStatusModule } from './../credit-loan-status/credit-loan-status.module';
import { CustomerService } from './../customer/customer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CreditLoanService } from './credit-loan.service';
import { CreditLoanController } from './credit-loan.controller';
import { CreditLoan } from './entities/credit-loan.entity';
import { CustomerModule } from 'src/customer/customer.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CreditLoan]),
    CustomerModule,
    CreditLoanStatusModule,
    MessagingModule,
  ],
  controllers: [CreditLoanController],
  providers: [CreditLoanService],
})
export class CreditLoanModule {}
