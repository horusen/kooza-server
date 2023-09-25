import { Test, TestingModule } from '@nestjs/testing';
import { CreditLoanStatusService } from './credit-loan-status.service';

describe('CreditLoanStatusService', () => {
  let service: CreditLoanStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreditLoanStatusService],
    }).compile();

    service = module.get<CreditLoanStatusService>(CreditLoanStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
