import { Test, TestingModule } from '@nestjs/testing';
import { CreditLoanController } from './credit-loan.controller';
import { CreditLoanService } from './credit-loan.service';

describe('CreditLoanController', () => {
  let controller: CreditLoanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreditLoanController],
      providers: [CreditLoanService],
    }).compile();

    controller = module.get<CreditLoanController>(CreditLoanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
