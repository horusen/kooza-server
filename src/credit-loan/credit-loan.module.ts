import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CreditLoanService } from './credit-loan.service';
import { CreditLoanController } from './credit-loan.controller';
import { CreditLoan } from './entities/credit-loan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CreditLoan])],
  controllers: [CreditLoanController],
  providers: [CreditLoanService],
})
export class CreditLoanModule {}
