import { CreditLoanStatus } from './entities/credit-loan-status.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CreditLoanStatusService } from './credit-loan-status.service';
import { CreditLoanStatusController } from './credit-loan-status.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CreditLoanStatus])],
  controllers: [CreditLoanStatusController],
  providers: [CreditLoanStatusService],
  exports: [CreditLoanStatusService],
})
export class CreditLoanStatusModule {}
