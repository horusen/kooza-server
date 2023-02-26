import { Test, TestingModule } from '@nestjs/testing';
import { CreditLoanService } from './credit-loan.service';

describe('CreditLoanService', () => {
  let service: CreditLoanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreditLoanService],
    }).compile();

    service = module.get<CreditLoanService>(CreditLoanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
