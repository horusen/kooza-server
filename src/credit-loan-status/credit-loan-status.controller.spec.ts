import { Test, TestingModule } from '@nestjs/testing';
import { CreditLoanStatusController } from './credit-loan-status.controller';
import { CreditLoanStatusService } from './credit-loan-status.service';

describe('CreditLoanStatusController', () => {
  let controller: CreditLoanStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreditLoanStatusController],
      providers: [CreditLoanStatusService],
    }).compile();

    controller = module.get<CreditLoanStatusController>(CreditLoanStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
