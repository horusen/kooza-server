import { CreditLoanItemService } from './credit-loan-item.service';
import { CreditLoanItem } from './entities/credit-loan-item.entity';
import { MessagingModule } from 'src/shared/messaging/messaging.module';
import { CreditLoanStatusModule } from './../credit-loan-status/credit-loan-status.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CreditLoanService } from './credit-loan.service';
import { CreditLoanController } from './credit-loan.controller';
import { CreditLoan } from './entities/credit-loan.entity';
import { CustomerModule } from 'src/customer/customer.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CreditLoan, CreditLoanItem]),
    CustomerModule,
    CreditLoanStatusModule,
    MessagingModule,
  ],
  controllers: [CreditLoanController],
  providers: [CreditLoanService, CreditLoanItemService],
})
export class CreditLoanModule {}
